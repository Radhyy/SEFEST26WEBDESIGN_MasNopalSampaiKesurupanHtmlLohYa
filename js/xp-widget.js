const LEVELS = [
  { level: 1, name: "Beginner", threshold: 0, description: "Untuk pemula & yang baru belajar", unlockFeature: false },
  { level: 2, name: "Intermediate", threshold: 500, description: "Materi lanjutan yang lebih dalam", unlockFeature: false },
  { level: 3, name: "Freelance", threshold: 1000, description: "🎯 Buka Career Simulation Mode", unlockFeature: true }
];

window.xpProgress = {
  xp: 0,
  completedNodes: {}, // tracking per node { 'html': { materi: true, example: false } }
  activity: []
};
window.xpWidgetHidden = true;

document.addEventListener("DOMContentLoaded", function () {
  // Hanya inisialisasi jika user login. Progress disalin ke localStorage agar Skill Passport bisa merender data permanen.
  if (window.WorkSimData) {
    const storedProgress = window.WorkSimData.getProgress();
    window.xpProgress = {
      ...window.xpProgress,
      xp: storedProgress.xp || 0,
      completedNodes: storedProgress.completedNodes || {},
      activity: storedProgress.activity || [],
    };
  } else {
    let progressStr = sessionStorage.getItem("worksim_xp_progress");
    if (progressStr) {
      try {
        window.xpProgress = JSON.parse(progressStr);
      } catch (e) {}
    }
  }
  
  const container = document.createElement("div");
  container.id = "xp-widget-container";
  document.body.appendChild(container);
  
  renderXPWidgetUI();

  // Kembalikan status centang sesuai data node yang sudah complete
  setTimeout(() => {
    Object.keys(window.xpProgress.completedNodes).forEach(nodeId => {
      checkNodeCompletion(nodeId);
    });
  }, 500);
});

window.saveXPProgress = function() {
  if (window.WorkSimData) {
    window.WorkSimData.saveProgress(window.xpProgress);
  } else {
    sessionStorage.setItem("worksim_xp_progress", JSON.stringify(window.xpProgress));
  }
  renderXPWidgetUI();
}

window.toggleXPWidget = function(forceClose) {
  if (forceClose) {
    window.xpWidgetHidden = true;
  } else {
    window.xpWidgetHidden = !window.xpWidgetHidden;
  }
  renderXPWidgetUI();
}

window.addActivityXP = function(nodeId, title, type, amount) {
  if (!window.xpProgress.completedNodes[nodeId]) {
    window.xpProgress.completedNodes[nodeId] = { materi: false, example: false };
  }
  
  if (window.xpProgress.completedNodes[nodeId][type]) return; // already got XP for this
  
  window.xpProgress.completedNodes[nodeId][type] = true;
  window.xpProgress.xp += amount;
  
  window.xpProgress.activity.push({
    name: `${title} (${type === 'materi' ? 'Teori' : 'Contoh'})`,
    xp: amount
  });
  
  if (window.xpProgress.activity.length > 10) {
    window.xpProgress.activity.shift(); // keep last 10
  }
  
  saveXPProgress();
  
  // Show checkmark when materi is completed
  if (type === 'materi') {
    showNodeBadge(nodeId);
  }
}

function showNodeBadge(nodeId) {
  const badge = document.getElementById(`badge-${nodeId}`);
  if (badge) {
    badge.classList.remove('hidden');
    // Trigger animation on next frame
    requestAnimationFrame(() => {
      badge.classList.remove('opacity-0', 'scale-50');
      badge.classList.add('opacity-100', 'scale-100');
    });
  }
}


function renderXPWidgetUI() {
  const container = document.getElementById("xp-widget-container");
  if (!container) return;
  
  const p = window.xpProgress;
  let currentLevelIdx = 0;
  for (let i = 0; i < LEVELS.length; i++) {
    if (p.xp >= LEVELS[i].threshold) {
      currentLevelIdx = i;
    }
  }
  
  const currLevel = LEVELS[currentLevelIdx];
  const nextLevel = LEVELS[currentLevelIdx + 1];
  
  let progressPercent = 100;
  let nextText = "Max Level";
  let targetXP = p.xp;
  if (nextLevel) {
    progressPercent = ((p.xp - currLevel.threshold) / (nextLevel.threshold - currLevel.threshold)) * 100;
    nextText = `Menuju Level ${nextLevel.level} · ${nextLevel.name}`;
    targetXP = nextLevel.threshold;
  }
  
  let activityHTML = p.activity.slice(-3).reverse().map(act => `
    <div class="flex items-center gap-2.5">
      <div class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center shrink-0">
        <i class="fa-solid fa-check text-emerald-600 dark:text-emerald-400 text-[9px]"></i>
      </div>
      <span class="text-xs text-slate-600 dark:text-slate-300 flex-1 truncate">${act.name}</span>
      <span class="text-[0.65rem] font-bold text-emerald-600 dark:text-emerald-400 shrink-0">+${act.xp} XP</span>
    </div>
  `).join('');
  if (activityHTML === '') {
    activityHTML = `<span class="text-xs text-slate-400">Belum ada aktivitas selesai.</span>`;
  }

  let pathsHTML = LEVELS.map((lvl, index) => {
    const isUnlocked = p.xp >= lvl.threshold;
    const isActive = index === currentLevelIdx;
    return `
      <div class="flex items-center gap-2.5 ${!isUnlocked ? 'opacity-50' : ''}">
        <div class="w-6 h-6 rounded-full ${isUnlocked ? 'bg-brand-500 ring-2 ring-brand-200' : 'bg-slate-200 dark:bg-slate-700'} flex items-center justify-center shrink-0">
          ${isUnlocked ? `<span class="text-white font-bold text-[9px]">${lvl.level}</span>` : `<i class="fa-solid fa-lock text-slate-400 text-[8px]"></i>`}
        </div>
        <div class="flex-1">
          <p class="text-[0.75rem] font-bold ${isActive ? 'text-brand-500' : 'text-slate-500 dark:text-slate-400'} leading-none">${lvl.name}</p>
          <p class="text-[0.6rem] ${lvl.unlockFeature && !isUnlocked ? 'text-amber-500 font-bold' : 'text-slate-400'} leading-none mt-0.5">${lvl.description}</p>
        </div>
        ${isActive ? `<span class="text-[0.6rem] font-bold text-brand-500 bg-brand-50 dark:bg-brand-900/40 px-1.5 py-0.5 rounded-full shrink-0">Aktif</span>` : ''}
      </div>
      ${index < LEVELS.length - 1 ? `<div class="ml-3 w-px h-3 bg-slate-200 dark:bg-slate-700"></div>` : ''}
    `;
  }).join('');

  container.innerHTML = `
  <div id="xp-widget" class="fixed bottom-6 left-6 z-50 w-[260px] select-none">
    <button id="xp-toggle"
      onclick="window.toggleXPWidget()"
      class="mb-2 w-full flex items-center gap-2 rounded-2xl bg-brand-500 text-white px-4 py-2.5 shadow-xl font-bold text-sm hover:-translate-y-0.5 transition-all ${!window.xpWidgetHidden ? 'hidden' : ''}">
      <i class="fa-solid fa-bolt text-yellow-300"></i>
      <span>${p.xp} XP · Lv.${currLevel.level} ${currLevel.name}</span>
      <i class="fa-solid fa-chevron-up ml-auto text-xs opacity-70"></i>
    </button>

    <div id="xp-card"
      class="${window.xpWidgetHidden ? 'hidden' : ''} rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
      
      <div class="bg-linear-to-r from-brand-500 to-[#4f46e5] px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="relative">
            <div class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white font-display font-bold text-base shadow-inner">
              ${currLevel.level}
            </div>
            <div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
              <i class="fa-solid fa-star text-[7px] text-yellow-800"></i>
            </div>
          </div>
          <div>
            <p class="text-white/70 text-[0.6rem] font-bold uppercase tracking-widest leading-none mb-0.5">Level ${currLevel.level}</p>
            <p class="text-white font-bold text-sm leading-none">${currLevel.name}</p>
          </div>
        </div>
        <div class="text-right">
          <p class="text-white/70 text-[0.6rem] font-bold uppercase tracking-widest leading-none mb-0.5">Total XP</p>
          <p class="text-white font-display font-bold text-lg leading-none">${p.xp}</p>
        </div>
        <button
          onclick="window.toggleXPWidget(true)"
          class="ml-2 w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
          <i class="fa-solid fa-chevron-down text-[9px]"></i>
        </button>
      </div>

      <div class="px-4 pt-3 pb-1">
        <div class="flex justify-between items-center mb-1.5">
          <span class="text-[0.68rem] font-bold text-slate-500 dark:text-slate-400">${nextText}</span>
          <span class="text-[0.68rem] font-bold text-brand-500">${p.xp} / ${targetXP}</span>
        </div>
        <div class="relative h-2.5 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
          <div class="h-full rounded-full bg-linear-to-r from-brand-500 to-[#4f46e5] transition-all duration-700" style="width: ${progressPercent}%"></div>
          <div class="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <div class="mx-4 my-2 h-px bg-slate-100 dark:bg-slate-700"></div>

      <div class="px-4 pb-3">
        <p class="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Aktivitas Terakhir</p>
        <div class="space-y-1.5">
          ${activityHTML}
        </div>
      </div>

      <div class="bg-slate-50 dark:bg-slate-900/50 px-4 py-3 space-y-1.5">
        <p class="text-[0.6rem] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Jalur Level</p>
        ${pathsHTML}
      </div>
    </div>
  </div>`;
}
