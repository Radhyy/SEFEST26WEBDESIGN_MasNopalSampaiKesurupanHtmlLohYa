document.addEventListener("DOMContentLoaded", () => {
  const dataStore = window.WorkSimData;
  if (!dataStore) return;

  const profile = dataStore.getProfile();
  const progress = dataStore.getProgress();
  const level = dataStore.getLevelInfo(progress.xp);

  const toneClasses = {
    amber: {
      bg: "bg-amber-100 dark:bg-amber-900/30",
      border: "border-amber-200 dark:border-amber-800",
      text: "text-amber-500",
      chip: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
      bar: "bg-amber-500",
    },
    brand: {
      bg: "bg-brand-100 dark:bg-brand-900/30",
      border: "border-brand-200 dark:border-brand-800",
      text: "text-brand-500",
      chip: "bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400",
      bar: "bg-brand-500",
    },
    cyan: {
      bg: "bg-cyan-100 dark:bg-cyan-900/30",
      border: "border-cyan-200 dark:border-cyan-800",
      text: "text-cyan-500",
      chip: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
      bar: "bg-cyan-500",
    },
    emerald: {
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
      border: "border-emerald-200 dark:border-emerald-800",
      text: "text-emerald-500",
      chip: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
      bar: "bg-emerald-500",
    },
    purple: {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      border: "border-purple-200 dark:border-purple-800",
      text: "text-purple-500",
      chip: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
      bar: "bg-purple-500",
    },
    rose: {
      bg: "bg-rose-100 dark:bg-rose-900/30",
      border: "border-rose-200 dark:border-rose-800",
      text: "text-rose-500",
      chip: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
      bar: "bg-rose-500",
    },
    slate: {
      bg: "bg-slate-100 dark:bg-slate-700",
      border: "border-slate-200 dark:border-slate-600",
      text: "text-slate-500",
      chip: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
      bar: "bg-slate-500",
    },
  };

  function escapeHTML(value) {
    const div = document.createElement("div");
    div.textContent = value || "";
    return div.innerHTML;
  }

  function getTone(name) {
    return toneClasses[name] || toneClasses.brand;
  }

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  function setHTML(id, value) {
    const element = document.getElementById(id);
    if (element) element.innerHTML = value;
  }

  function getResumeUrl(result) {
    return (
      result?.url ||
      result?.resume_url ||
      result?.pdf_url ||
      result?.file_url ||
      result?.data?.url ||
      result?.data?.resume_url ||
      result?.data?.pdf_url ||
      result?.data?.file_url ||
      result?.data?.resume?.url ||
      result?.data?.resume?.pdf_url ||
      result?.data?.resume?.file_url ||
      ""
    );
  }

  function formatBytes(bytes) {
    const value = Number(bytes || 0);
    if (!value) return "";
    if (value < 1024 * 1024) return `${Math.round(value / 1024)} KB`;
    return `${(value / (1024 * 1024)).toFixed(1)} MB`;
  }

  function formatTimestamp(timestamp) {
    const value = Number(timestamp || 0);
    if (!value) return "";
    return new Intl.DateTimeFormat("id-ID", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  }

  function getResumeDetails(result) {
    const fileSize = formatBytes(result?.data?.file_size_bytes || result?.file_size_bytes);
    const expiresAt = formatTimestamp(
      result?.data?.file_url_expires_at ||
        result?.data?.file_expires_at ||
        result?.file_url_expires_at ||
        result?.file_expires_at,
    );
    const meta = result?.meta || {};
    const details = [];

    if (fileSize) details.push(`Ukuran PDF: ${fileSize}`);
    if (expiresAt) details.push(`Link berlaku sampai ${expiresAt}`);
    if (meta.credits_remaining !== undefined) details.push(`Sisa kredit: ${meta.credits_remaining}`);

    return details.join(" · ");
  }

  function getResumeEndpoint() {
    const functionPath = "/.netlify/functions/create-resume";
    const isLiveServer = ["127.0.0.1", "localhost"].includes(window.location.hostname)
      && window.location.port === "5500";

    return isLiveServer ? `http://localhost:8888${functionPath}` : functionPath;
  }

  function showToast(title, icon = "success") {
    if (window.Swal) {
      Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2200,
        timerProgressBar: true,
        icon,
      }).fire({ title });
      return;
    }
    alert(title);
  }

  function renderProfile() {
    const avatar = document.getElementById("passportAvatar");
    if (avatar) {
      avatar.src = profile.avatar;
      avatar.alt = profile.name;
    }

    setText("passportName", profile.name);
    setHTML(
      "passportMeta",
      `${escapeHTML(profile.role)} <span class="mx-2 text-slate-300 dark:text-slate-600">•</span> <i class="fa-solid fa-location-dot text-xs"></i> ${escapeHTML(profile.address || "Lokasi belum diisi")}`,
    );

    window.WorkSimSkillPassport = {
      shareText: `Lihat progress belajar dan skill passport WorkSim ${profile.name}.`,
    };
  }

  function renderLevel() {
    const dashOffset = 283 - (283 * level.progressPercent) / 100;
    const circle = document.getElementById("levelProgressCircle");
    if (circle) circle.setAttribute("stroke-dashoffset", String(dashOffset));

    setText("levelNumber", `Level ${level.level}`);
    setText("levelName", level.name);
    setHTML(
      "xpSummary",
      `${progress.xp.toLocaleString("id-ID")} <span class="text-slate-400 font-normal">/ ${level.targetXP.toLocaleString("id-ID")}</span>`,
    );

    const xpBar = document.getElementById("xpProgressBar");
    if (xpBar) xpBar.style.width = `${level.progressPercent}%`;

    setHTML(
      "xpHint",
      level.remainingXP
        ? `Dapatkan <strong class="text-brand-500">${level.remainingXP.toLocaleString("id-ID")} XP</strong> lagi untuk membuka Level berikutnya.`
        : `<strong class="text-brand-500">Level tertinggi terbuka.</strong> Terus kumpulkan portofolio terbaikmu.`,
    );
  }

  function renderBadges() {
    const badges = progress.badges || [];
    setHTML(
      "badgeGrid",
      badges
        .map((badge) => {
          const tone = getTone(badge.tone);
          return `
            <div ${badge.extra ? "data-extra-badge" : ""} class="${badge.extra ? "hidden" : "flex"} flex-col items-center text-center gap-2 group cursor-pointer">
              <div class="w-14 h-14 rounded-full ${tone.bg} border ${tone.border} flex items-center justify-center ${tone.text} text-xl transition-transform group-hover:scale-110 shadow-sm">
                <i class="fa-solid ${escapeHTML(badge.icon)}"></i>
              </div>
              <span class="text-[0.65rem] font-bold text-slate-600 dark:text-slate-300 leading-normal pb-1">${escapeHTML(badge.name)}</span>
            </div>
          `;
        })
        .join(""),
    );
  }

  function renderSkills() {
    const skills = progress.skills || [];
    setHTML(
      "skillBars",
      skills
        .map((skill) => {
          const tone = getTone(skill.color);
          const proficiency = Math.max(0, Math.min(Number(skill.proficiency || 0), 100));
          return `
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-slate-700 dark:text-slate-300">${escapeHTML(skill.name)}</span>
                <span class="${tone.text}">${proficiency}%</span>
              </div>
              <div class="h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                <div class="h-full ${tone.bar} rounded-full" style="width:${proficiency}%"></div>
              </div>
            </div>
          `;
        })
        .join(""),
    );
  }

  function renderActivities() {
    const activities = progress.activities || [];
    setHTML(
      "activityList",
      activities
        .map((activity, index) => {
          const tone = getTone(activity.tone || "slate");
          const isExtra = activity.extra || index > 2;
          return `
            <div data-activity-item data-activity-type="${escapeHTML(activity.type || "general")}" ${isExtra ? "data-extra-activity" : ""} class="${isExtra ? "hidden" : "flex"} gap-4">
              <div class="flex flex-col items-center">
                <div class="w-8 h-8 rounded-full ${tone.bg} flex items-center justify-center ${tone.text} shrink-0 border ${tone.border}">
                  <i class="fa-solid ${escapeHTML(activity.icon || "fa-check")} text-xs"></i>
                </div>
                ${index < activities.length - 1 ? '<div class="w-px h-full bg-slate-200 dark:bg-slate-700 my-1"></div>' : ""}
              </div>
              <div class="${index < activities.length - 1 ? "pb-4" : ""}">
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400">${escapeHTML(activity.dateLabel || "Baru saja")}</span>
                  <span class="text-[0.65rem] font-bold ${tone.chip} px-2 py-0.5 rounded-md">${escapeHTML(activity.type || "General")}</span>
                </div>
                <h4 class="font-bold text-slate-900 dark:text-white text-sm">${escapeHTML(activity.title)}</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">${escapeHTML(activity.description)}</p>
              </div>
            </div>
          `;
        })
        .join(""),
    );
  }

  function setGenerateLoading(isLoading) {
    const button = document.getElementById("generateCvButton");
    if (!button) return;
    button.disabled = isLoading;
    button.classList.toggle("opacity-70", isLoading);
    button.classList.toggle("cursor-wait", isLoading);
    button.innerHTML = isLoading
      ? '<i class="fa-solid fa-spinner fa-spin"></i> Membuat CV'
      : '<i class="fa-solid fa-file-lines"></i> Generate CV';
  }

  function renderResumeResult({ title, message, icon = "fa-file-lines", tone = "brand", url = "", details = "" }) {
    const panel = document.getElementById("resumeResultPanel");
    const content = document.getElementById("resumeResultContent");
    if (!panel || !content) return;

    const classes = getTone(tone);
    panel.classList.remove("hidden");
    content.innerHTML = `
      <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div class="flex gap-3">
          <div class="h-11 w-11 shrink-0 rounded-2xl ${classes.bg} ${classes.text} border ${classes.border} flex items-center justify-center">
            <i class="fa-solid ${icon}"></i>
          </div>
          <div>
            <h2 class="font-display text-lg font-bold text-slate-900 dark:text-white">${escapeHTML(title)}</h2>
            <p class="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">${escapeHTML(message)}</p>
            ${details ? `<p class="mt-2 text-xs font-semibold text-slate-400">${escapeHTML(details)}</p>` : ""}
          </div>
        </div>
        ${
          url
            ? `<a href="${escapeHTML(url)}" target="_blank" rel="noreferrer" class="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Buka CV
              </a>`
            : ""
        }
      </div>
    `;
  }

  function validateResumeData(requestData) {
    const missing = [];
    if (!requestData.profile.name) missing.push("nama");
    if (!requestData.profile.email) missing.push("email");
    if (!requestData.profile.role) missing.push("target role");
    if (!requestData.progress.skills?.length) missing.push("skill");
    return missing;
  }

  async function generateResume() {
    const requestData = dataStore.getResumeRequestData();
    const missing = validateResumeData(requestData);

    if (missing.length) {
      renderResumeResult({
        title: "Data CV belum lengkap",
        message: `Lengkapi ${missing.join(", ")} sebelum generate CV.`,
        icon: "fa-circle-exclamation",
        tone: "amber",
      });
      showToast("Data CV belum lengkap.", "warning");
      return;
    }

    setGenerateLoading(true);
    renderResumeResult({
      title: "Mengirim data ke Useresume",
      message: "WorkSim sedang menyusun data profil dan skill kamu menjadi format CV.",
      icon: "fa-spinner fa-spin",
      tone: "brand",
    });

    try {
      const response = await fetch(getResumeEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Useresume belum bisa memproses CV saat ini.");
      }

      renderResumeResult({
        title: "CV berhasil dibuat",
        message: getResumeUrl(result)
          ? "File PDF CV sudah siap dari Useresume."
          : "Useresume sudah menerima data Skill Passport kamu.",
        icon: "fa-circle-check",
        tone: "emerald",
        url: getResumeUrl(result),
        details: getResumeUrl(result)
          ? getResumeDetails(result)
          : "Response berhasil diterima, tetapi URL CV tidak tersedia di payload.",
      });
      showToast("CV berhasil dibuat.");
    } catch (error) {
      renderResumeResult({
        title: "Mode demo CV aktif",
        message: "CV preview dibuat di browser karena API Useresume belum tersedia dari environment ini.",
        icon: "fa-triangle-exclamation",
        tone: "amber",
        details: error.message,
      });
      showToast("API belum tersedia, mode demo ditampilkan.", "warning");
    } finally {
      setGenerateLoading(false);
    }
  }

  function setActivityFilter(activeButton) {
    const activityFilters = document.querySelectorAll("[data-activity-filter]");
    const activityItems = document.querySelectorAll("[data-activity-item]");
    const activeFilter = activeButton.dataset.activityFilter;

    activityFilters.forEach((button) => {
      const isActive = button === activeButton;
      button.setAttribute("aria-pressed", String(isActive));
      button.classList.toggle("rounded", isActive);
      button.classList.toggle("bg-white", isActive);
      button.classList.toggle("dark:bg-slate-800", isActive);
      button.classList.toggle("text-slate-900", isActive);
      button.classList.toggle("dark:text-white", isActive);
      button.classList.toggle("shadow-sm", isActive);
      button.classList.toggle("text-slate-500", !isActive);
    });

    activityItems.forEach((item) => {
      const isLoadedExtra = !item.hasAttribute("data-extra-activity") || item.dataset.loaded === "true";
      const matchesFilter = activeFilter === "all" || item.dataset.activityType === activeFilter;
      item.classList.toggle("hidden", !isLoadedExtra || !matchesFilter);
      item.classList.toggle("flex", isLoadedExtra && matchesFilter);
    });
  }

  function bindDynamicInteractions() {
    const showAllBadgesButton = document.getElementById("showAllBadgesButton");
    if (showAllBadgesButton) {
      showAllBadgesButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        document.querySelectorAll("[data-extra-badge]").forEach((badge) => {
          badge.classList.remove("hidden");
          badge.classList.add("flex");
        });
        showAllBadgesButton.textContent = "Semua terlihat";
        showAllBadgesButton.disabled = true;
        showAllBadgesButton.classList.add("cursor-default", "text-slate-400");
        showToast("Semua badge pencapaian ditampilkan.");
      }, true);
    }

    document.querySelectorAll("[data-activity-filter]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        setActivityFilter(button);
      }, true);
    });

    const loadMoreButton = document.getElementById("loadMoreActivitiesButton");
    if (loadMoreButton) {
      loadMoreButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        const hiddenActivities = Array.from(document.querySelectorAll("[data-extra-activity]"))
          .filter((item) => item.dataset.loaded !== "true");

        if (!hiddenActivities.length) {
          showToast("Semua riwayat sudah ditampilkan.");
          return;
        }

        hiddenActivities.slice(0, 2).forEach((item) => {
          item.dataset.loaded = "true";
          item.classList.remove("hidden");
          item.classList.add("flex");
        });

        const activeFilter = document.querySelector("[data-activity-filter][aria-pressed='true']");
        if (activeFilter) setActivityFilter(activeFilter);
        loadMoreButton.textContent = "Semua Riwayat Ditampilkan";
        loadMoreButton.disabled = true;
        loadMoreButton.classList.add("cursor-default", "opacity-70");
        showToast("Riwayat tambahan dimuat.");
      }, true);
    }
  }

  renderProfile();
  renderLevel();
  renderBadges();
  renderSkills();
  renderActivities();
  bindDynamicInteractions();

  const generateButton = document.getElementById("generateCvButton");
  if (generateButton) generateButton.addEventListener("click", generateResume);
});
