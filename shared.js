// ─── WorkSim Shared Components ─────────────────────────────────────────────
// Inject this script on any page to get the navbar & footer automatically.

// ─── Path Helper ─────────────────────────────────────────────────────────────
// Mendapatkan relative path ke root directory berdasarkan src dari script ini
let rootPath = '';
const scripts = document.getElementsByTagName('script');
for (let i = 0; i < scripts.length; i++) {
  const src = scripts[i].getAttribute('src');
  if (src && src.includes('shared.js')) {
    rootPath = src.split('shared.js')[0];
    break;
  }
}

const NAVBAR_HTML = `
<header class="sticky top-0 z-30 border-b border-transparent bg-transparent transition-colors duration-300" id="site-header">
  <div class="mx-auto flex min-h-[88px] w-[98vw] max-w-[1320px] items-center">
    <div class="hidden w-full items-center justify-between rounded-full border border-[#dbe3f8] bg-[#f7faff] p-2 shadow-[0_10px_26px_rgba(47,91,211,0.14)] lg:flex dark:border-slate-600 dark:bg-[#111c2f]">
      <a href="${rootPath}index.html" class="px-4 font-display text-[1.3rem] font-bold tracking-[-0.02em]">Work<span class="text-brand-500">Sim</span></a>
      <nav class="flex items-center gap-1 text-[0.95rem] font-semibold text-slate-600 dark:text-slate-200">
        <a class="rounded-full px-4 py-2 transition hover:bg-[#eaf0ff] dark:hover:bg-white/10" href="${rootPath}index.html#fitur">Fitur</a>
        <a class="rounded-full px-4 py-2 transition hover:bg-[#eaf0ff] dark:hover:bg-white/10" href="${rootPath}features/learning-roadmap/index.html">Roadmap</a>
        <a class="rounded-full px-4 py-2 transition hover:bg-[#eaf0ff] dark:hover:bg-white/10" href="${rootPath}features/career-simulation/index.html">Simulasi</a>
        <a class="rounded-full px-4 py-2 transition hover:bg-[#eaf0ff] dark:hover:bg-white/10" href="${rootPath}index.html#kontak">Kontak</a>
      </nav>
      <div class="flex items-center gap-2">
        <button id="themeToggle" type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b8cdfa] bg-[#e3edff] text-[#2f5bd3] transition hover:-translate-y-0.5 hover:border-brand-500 dark:border-slate-500 dark:bg-slate-900 dark:text-[#ffd166]" aria-label="Ganti tema">
          <i id="themeIcon" class="fa-solid fa-moon text-base"></i>
        </button>
        <a class="inline-flex items-center rounded-full border border-[#dbe3f8] bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-[#eef3ff] dark:border-slate-500 dark:bg-slate-900 dark:text-slate-100" href="${rootPath}login.html">Login</a>
        <a class="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-500 to-[#3f6ef0] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(47,91,211,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(47,91,211,0.35)]" href="${rootPath}login.html">
          <i class="fa-solid fa-rocket"></i> Mulai Sekarang
        </a>
      </div>
    </div>
    <div class="flex w-full items-center justify-between lg:hidden">
      <a href="${rootPath}index.html" class="font-display text-[1.3rem] font-bold tracking-[-0.02em]">Work<span class="text-brand-500">Sim</span></a>
      <div class="flex items-center gap-2">
        <button id="themeToggleMobile" type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#b8cdfa] bg-[#e3edff] text-[#2f5bd3] dark:border-slate-500 dark:bg-slate-900 dark:text-[#ffd166]" aria-label="Ganti tema mobile">
          <i id="themeIconMobile" class="fa-solid fa-moon text-sm"></i>
        </button>
        <a class="inline-flex items-center rounded-full bg-gradient-to-br from-brand-500 to-[#3f6ef0] px-4 py-2.5 text-sm font-bold text-white" href="${rootPath}login.html">Mulai</a>
      </div>
    </div>
  </div>
</header>`;

const FOOTER_HTML = `
<footer id="kontak" class="relative overflow-hidden border-t border-[#dce5fb] bg-gradient-to-b from-[#f7faff] to-[#eef3ff] py-8 pb-7">
  <div class="pointer-events-none absolute -left-24 top-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(47,91,211,0.14)_0%,transparent_72%)]"></div>
  <div class="pointer-events-none absolute right-[-5rem] bottom-[-4rem] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(23,190,187,0.12)_0%,transparent_70%)]"></div>
  <div class="mx-auto w-[98vw] max-w-[1320px]">
    <div class="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_14px_40px_rgba(20,24,38,0.07)] backdrop-blur lg:p-8">
      <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr_0.7fr_0.65fr] lg:items-start">
        <div>
          <a href="${rootPath}index.html" class="inline-flex items-center gap-2 font-display text-[1.3rem] font-bold tracking-[-0.02em]">
            <span class="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-[#17bebb] text-white shadow-[0_10px_20px_rgba(47,91,211,0.22)]">
              <i class="fa-solid fa-compass"></i>
            </span>
            Work<span class="text-brand-500">Sim</span>
          </a>
          <p class="mt-4 max-w-[34ch] text-[0.94rem] leading-7 text-slate-500">Platform eksplorasi karier digital untuk pelajar, mahasiswa, dan career switcher yang ingin belajar dengan arah yang lebih jelas.</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span class="inline-flex items-center gap-2 rounded-full border border-[#d9e3fb] bg-[#f6f8ff] px-3 py-1.5 text-xs font-semibold text-[#35518d]"><i class="fa-solid fa-bolt text-brand-500"></i> Roadmap interaktif</span>
            <span class="inline-flex items-center gap-2 rounded-full border border-[#d9e3fb] bg-[#f6f8ff] px-3 py-1.5 text-xs font-semibold text-[#35518d]"><i class="fa-solid fa-shield-heart text-brand-500"></i> Belajar lebih konsisten</span>
          </div>
        </div>
        <div>
          <p class="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-brand-500">Navigasi</p>
          <div class="grid gap-3 text-[0.95rem] text-slate-600">
            <a class="transition hover:text-brand-500" href="${rootPath}index.html">Home</a>
            <a class="transition hover:text-brand-500" href="${rootPath}index.html#fitur">Fitur</a>
            <a class="transition hover:text-brand-500" href="${rootPath}features/learning-roadmap/index.html">Roadmap</a>
            <a class="transition hover:text-brand-500" href="${rootPath}features/career-simulation/index.html">Simulasi</a>
          </div>
        </div>
        <div>
          <p class="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-brand-500">Komunitas</p>
          <p class="max-w-[22ch] text-[0.94rem] leading-7 text-slate-500">Ikuti update, tips belajar, dan contoh perjalanan karier digital yang relevan.</p>
          <div class="mt-5 flex gap-2.5">
            <a class="grid h-10 w-10 place-items-center rounded-2xl border border-[#dbe3f8] bg-white text-brand-500 transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-[0_10px_18px_rgba(47,91,211,0.12)]" href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a class="grid h-10 w-10 place-items-center rounded-2xl border border-[#dbe3f8] bg-white text-brand-500 transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-[0_10px_18px_rgba(47,91,211,0.12)]" href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a class="grid h-10 w-10 place-items-center rounded-2xl border border-[#dbe3f8] bg-white text-brand-500 transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-[0_10px_18px_rgba(47,91,211,0.12)]" href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
        <div>
          <p class="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-brand-500">Next step</p>
          <div class="rounded-2xl border border-[#dbe3f8] bg-gradient-to-br from-[#f8faff] to-[#eef3ff] p-4 shadow-[0_10px_24px_rgba(47,91,211,0.07)]">
            <p class="text-[0.9rem] font-semibold text-slate-900">Mulai cek jalur kariermu</p>
            <p class="mt-2 text-[0.9rem] leading-7 text-slate-500">Gunakan demo roadmap untuk melihat langkah yang paling masuk akal dari skill saat ini ke role target.</p>
            <a class="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-500 to-[#3f6ef0] px-4 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(47,91,211,0.22)] transition hover:-translate-y-0.5" href="${rootPath}features/learning-roadmap/index.html">
              Lihat Roadmap <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 flex flex-col gap-3 border-t border-[#e7edfb] pt-5 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
        <p>&copy; 2026 WorkSim. Dibangun untuk membantu perjalanan karier digital jadi lebih terarah.</p>
        <p class="inline-flex items-center gap-2"><i class="fa-solid fa-sparkles text-brand-500"></i> Belajar, progres, dan eksplorasi dalam satu tempat</p>
      </div>
    </div>
  </div>
</footer>`;

// ─── Inject Components ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Inject Navbar before <main> or at top of body
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAVBAR_HTML;

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;

  // ─── Dark Mode Toggle ─────────────────────────────────────────────────────
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') html.classList.add('dark');

  function updateIcons(isDark) {
    ['themeIcon', 'themeIconMobile'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.className = isDark ? 'fa-solid fa-sun text-base' : 'fa-solid fa-moon text-base';
    });
  }
  updateIcons(html.classList.contains('dark'));

  ['themeToggle', 'themeToggleMobile'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      html.classList.toggle('dark');
      const isDark = html.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateIcons(isDark);
    });
  });

  // ─── Scroll Reveal ────────────────────────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.remove('opacity-0', 'translate-y-6');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  }
});
