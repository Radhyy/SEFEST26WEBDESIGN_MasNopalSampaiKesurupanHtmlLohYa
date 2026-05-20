// ─── WorkSim Shared Components ─────────────────────────────────────────────
// Inject this script on any page to get the navbar & footer automatically.

// ─── Path Helper ─────────────────────────────────────────────────────────────
// Mendapatkan relative path ke root directory berdasarkan src dari script ini
let rootPath = "";
const scripts = document.getElementsByTagName("script");
for (let i = 0; i < scripts.length; i++) {
  const src = scripts[i].getAttribute("src");
  if (src && src.includes("shared.js")) {
    rootPath = src.replace("js/shared.js", "").replace("shared.js", "");
    break;
  }
}

// Demo Auth Helper
const AUTH_USER_KEY = "worksim_user";
const AUTH_SESSION_KEY = "worksim_session";
const DUMMY_USER = {
  name: "Budi Santoso",
  email: "budi@worksim.id",
  password: "password123",
  avatar:
    "https://api.dicebear.com/7.x/avataaars/svg?seed=BudiSantoso&backgroundColor=b6e3f4",
};

const PROTECTED_PATHS = [
  "/pages/skill-passport",
  "/pages/career-simulation",
  "/pages/learning-roadmap",
  "/pages/ai-career-advisor",
];

function readJSON(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return null;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function createAvatar(name) {
  const seed = encodeURIComponent((name || "WorkSim User").replace(/\s+/g, ""));
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4`;
}

function sanitizeRedirectPath(path) {
  if (!path) return "/pages/skill-passport/";
  try {
    const url = new URL(path, window.location.origin);
    if (url.origin !== window.location.origin) return "/pages/skill-passport/";
    return `${url.pathname}${url.search}${url.hash}`;
  } catch (error) {
    return "/pages/skill-passport/";
  }
}

function getRedirectTarget(fallback = "/pages/skill-passport/") {
  const params = new URLSearchParams(window.location.search);
  return sanitizeRedirectPath(params.get("redirect") || fallback);
}

function isProtectedPath(pathname) {
  const currentPath = pathname.replace(/\/+$/, "");
  return PROTECTED_PATHS.some(
    (path) => currentPath === path || currentPath.startsWith(`${path}/`),
  );
}

function getStoredUser() {
  const storedUser = readJSON(AUTH_USER_KEY);
  return storedUser && storedUser.email ? storedUser : null;
}

function getCurrentUser() {
  const session = readJSON(AUTH_SESSION_KEY);
  if (!session || !session.email) return null;

  const storedUser = getStoredUser();
  if (storedUser && storedUser.email === session.email) return storedUser;
  if (DUMMY_USER.email === session.email) return DUMMY_USER;
  return null;
}

function loginUser(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  const storedUser = getStoredUser();
  const users = [storedUser, DUMMY_USER].filter(Boolean);
  const matchedUser = users.find(
    (user) =>
      user.email.toLowerCase() === normalizedEmail && user.password === password,
  );

  if (!matchedUser) return null;
  writeJSON(AUTH_SESSION_KEY, {
    email: matchedUser.email,
    loggedInAt: new Date().toISOString(),
  });
  return matchedUser;
}

function registerUser({ name, email, password }) {
  const user = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password,
    avatar: createAvatar(name),
  };
  writeJSON(AUTH_USER_KEY, user);
  writeJSON(AUTH_SESSION_KEY, {
    email: user.email,
    loggedInAt: new Date().toISOString(),
  });
  return user;
}

function logoutUser() {
  localStorage.removeItem(AUTH_SESSION_KEY);
  sessionStorage.removeItem("worksim_xp_progress");
  window.location.href = "/";
}

window.WorkSimAuth = {
  createAvatar,
  getCurrentUser,
  getRedirectTarget,
  loginUser,
  logoutUser,
  registerUser,
};

if (isProtectedPath(window.location.pathname) && !getCurrentUser()) {
  const redirect = encodeURIComponent(
    `${window.location.pathname}${window.location.search}${window.location.hash}`,
  );
  window.location.replace(`/pages/login/?redirect=${redirect}`);
}

function escapeHTML(value) {
  const div = document.createElement("div");
  div.textContent = value || "";
  return div.innerHTML;
}

function getAuthActionsHTML(user) {
  if (!user) {
    return `
        <a class="inline-flex min-h-11 items-center rounded-full border border-[#dbe3f8] bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-brand-50 dark:border-slate-500 dark:bg-slate-900 dark:text-slate-100" href="/pages/login/">Login</a>
        <a class="inline-flex min-h-11 items-center gap-2 rounded-full bg-linear-to-br from-brand-500 to-[#3f6ef0] px-5 py-2.5 text-sm font-bold text-white shadow-brand-sm transition hover:-translate-y-0.5 hover:shadow-brand-md" href="/pages/register/">
          <i class="fa-solid fa-rocket"></i> Mulai Sekarang
        </a>`;
  }

  const name = escapeHTML(user.name);
  const avatar = escapeHTML(user.avatar || createAvatar(user.name));
  return `
        <a class="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#dbe3f8] bg-white py-1.5 pl-2 pr-4 text-sm font-bold text-slate-900 transition hover:bg-brand-50 dark:border-slate-500 dark:bg-slate-900 dark:text-slate-100" href="/pages/skill-passport/" aria-label="Buka profil ${name}">
          <img src="${avatar}" alt="${name}" class="h-8 w-8 rounded-full border border-[#dbe3f8] bg-brand-50 object-cover">
          <span class="truncate" style="max-width: 8rem;">${name}</span>
        </a>
        <button id="logoutButton" type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dbe3f8] bg-white text-slate-600 transition hover:text-red-500 dark:border-slate-500 dark:bg-slate-900 dark:text-slate-200" aria-label="Keluar dari akun WorkSim">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>`;
}

function getMobileAuthActionsHTML(user) {
  if (!user) {
    return `<a class="w-full inline-flex min-h-11 items-center justify-center rounded-2xl bg-linear-to-br from-brand-500 to-[#3f6ef0] px-4 py-2.5 text-sm font-bold text-white shadow-brand-sm" href="/pages/login/">Login / Daftar</a>`;
  }

  const name = escapeHTML(user.name);
  const avatar = escapeHTML(user.avatar || createAvatar(user.name));
  return `
        <a class="flex-1 inline-flex min-h-12 items-center gap-3 rounded-2xl border border-[#dbe3f8] bg-[#f7faff] px-3 py-2 text-[0.9rem] font-bold text-slate-900 transition hover:bg-[#eaf0ff] dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700" href="/pages/skill-passport/" aria-label="Buka profil ${name}">
          <img src="${avatar}" alt="${name}" class="h-8 w-8 rounded-full border border-[#dbe3f8] bg-brand-50 object-cover">
          <span class="truncate">${name}</span>
        </a>
        <button id="logoutButtonMobile" type="button" class="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-red-200 bg-red-50 text-red-600 transition hover:bg-red-100 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400" aria-label="Keluar dari akun WorkSim">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>`;
}

const NAVBAR_HTML = `
<header class="sticky top-0 z-30 w-full" id="site-header" style="padding: 0 1vw; border-bottom: 1px solid transparent; transition: padding 0.75s cubic-bezier(0.25,0.46,0.45,0.94), background 0.75s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.75s cubic-bezier(0.25,0.46,0.45,0.94);">
  <div class="mx-auto flex min-h-18 w-full max-w-310 items-center px-4 sm:px-6 lg:min-h-22 lg:px-0 2xl:max-w-330" id="navbar-outer">
    <div id="navbar-pill" class="hidden w-full items-center justify-between lg:flex" style="border-radius: 9999px; border: 1px solid #dbe3f8; background: #f7faff; padding: 0.5rem; box-shadow: 0 10px 26px rgba(47,91,211,0.14); transition: border-radius 0.75s cubic-bezier(0.25,0.46,0.45,0.94), padding 0.75s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.75s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.75s cubic-bezier(0.25,0.46,0.45,0.94), background 0.75s cubic-bezier(0.25,0.46,0.45,0.94);">
      <a href="/" class="px-4 font-display text-[1.3rem] font-bold tracking-[-0.02em]">Work<span class="text-brand-500">Sim</span></a>
      <nav class="flex items-center gap-1 text-[0.95rem] font-semibold text-slate-600 dark:text-slate-200">
        <a class="rounded-full px-4 py-2 transition hover:bg-[#eaf0ff] dark:hover:bg-white/10" href="/">Home</a>
        <a class="rounded-full px-4 py-2 transition hover:bg-[#eaf0ff] dark:hover:bg-white/10" href="/pages/ai-career-advisor/">AI Advisor</a>
        <a class="rounded-full px-4 py-2 transition hover:bg-[#eaf0ff] dark:hover:bg-white/10" href="/pages/learning-roadmap/">Roadmap</a>
        <a class="rounded-full px-4 py-2 transition hover:bg-[#eaf0ff] dark:hover:bg-white/10" href="/pages/career-simulation/">Simulasi</a>
        <a class="rounded-full px-4 py-2 transition hover:bg-[#eaf0ff] dark:hover:bg-white/10" href="/pages/skill-passport/">Skill Passport</a>
      </nav>
      <div class="flex items-center gap-2">
        <button id="themeToggle" type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b8cdfa] bg-[#e3edff] text-brand-500 transition hover:-translate-y-0.5 hover:border-brand-500 dark:border-slate-500 dark:bg-slate-900 dark:text-[#ffd166]" aria-label="Ganti tema tampilan WorkSim antara mode terang dan gelap" aria-pressed="false">
          <i id="themeIcon" class="fa-solid fa-moon text-base"></i>
        </button>
        <div id="authActions" class="flex items-center gap-2"></div>
      </div>
    </div>
    <div class="w-full lg:hidden">
      <div class="flex w-full items-center justify-between rounded-full border border-[#dbe3f8]/80 bg-white/85 px-3 py-2 shadow-[0_10px_26px_rgba(47,91,211,0.10)] backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/85">
        <a href="/" class="inline-flex min-h-10 items-center font-display text-[1.3rem] font-bold tracking-[-0.02em]">Work<span class="text-brand-500">Sim</span></a>
        <div class="flex items-center gap-2">
          <button id="themeToggleMobile" type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#b8cdfa] bg-[#e3edff] text-brand-500 dark:border-slate-500 dark:bg-slate-900 dark:text-[#ffd166]" aria-label="Ganti tema tampilan WorkSim antara mode terang dan gelap" aria-pressed="false">
            <i id="themeIconMobile" class="fa-solid fa-moon text-sm"></i>
          </button>
          <button id="mobileMenuToggle" type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#b8cdfa] bg-white text-slate-700 transition hover:text-brand-500 dark:border-slate-500 dark:bg-slate-900 dark:text-slate-100" aria-label="Buka menu navigasi" aria-controls="mobileMenu" aria-expanded="false">
            <i id="mobileMenuIcon" class="fa-solid fa-bars text-sm"></i>
          </button>
        </div>
      </div>
      <nav id="mobileMenu" class="mt-2 flex flex-col overflow-hidden rounded-3xl border border-[#dbe3f8]/80 bg-white/95 px-3 text-sm font-bold text-slate-700 shadow-[0_16px_32px_rgba(47,91,211,0.13)] backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/95 dark:text-slate-100" style="max-height: 0; opacity: 0; padding-top: 0; padding-bottom: 0; transform: translateY(-8px); pointer-events: none; transition: max-height 0.3s ease, opacity 0.2s ease, padding 0.3s ease, transform 0.3s ease;">
        <div id="authActionsMobile" class="mb-2 flex w-full items-center gap-2 border-b border-[#dbe3f8]/80 pb-3 px-1 pt-1 dark:border-slate-700/80"></div>
        <div class="grid gap-1">
          <a class="rounded-2xl px-4 py-3 transition hover:bg-[#eaf0ff] dark:hover:bg-white/10" href="/">Home</a>
          <a class="rounded-2xl px-4 py-3 transition hover:bg-[#eaf0ff] dark:hover:bg-white/10" href="/pages/ai-career-advisor/">AI Advisor</a>
          <a class="rounded-2xl px-4 py-3 transition hover:bg-[#eaf0ff] dark:hover:bg-white/10" href="/pages/learning-roadmap/">Roadmap</a>
          <a class="rounded-2xl px-4 py-3 transition hover:bg-[#eaf0ff] dark:hover:bg-white/10" href="/pages/career-simulation/">Simulasi</a>
          <a class="rounded-2xl px-4 py-3 transition hover:bg-[#eaf0ff] dark:hover:bg-white/10" href="/pages/skill-passport/">Skill Passport</a>
        </div>
      </nav>
    </div>
  </div>
</header>`;

const FOOTER_HTML = `
<footer id="kontak" class="relative overflow-hidden border-t border-[#dce5fb] bg-linear-to-b from-[#f7faff] to-brand-50 py-8 pb-7 dark:border-slate-700 dark:from-[#0a1020] dark:to-[#111c2f]">
  <div class="pointer-events-none absolute -left-24 top-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(47,91,211,0.14)_0%,transparent_72%)] dark:opacity-30"></div>
  <div class="pointer-events-none absolute -right-20 -bottom-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(23,190,187,0.12)_0%,transparent_70%)] dark:opacity-30"></div>
  <div class="wide-page">
    <div class="rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_14px_40px_rgba(20,24,38,0.07)] backdrop-blur sm:p-6 lg:p-8 dark:border-slate-700 dark:bg-slate-900/80">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_0.7fr_0.65fr] lg:items-start">
        <div>
          <a href="${rootPath}" class="inline-flex min-h-10 items-center font-display text-[1.3rem] font-bold tracking-[-0.02em]">
            <img src="${rootPath}assets/logo/WorksimLogo.webp" alt="Logo WorkSim" class="h-15 w-15">
            Work<span class="text-brand-500">Sim</span>
          </a>
          <p class="mt-4 max-w-[34ch] text-[0.94rem] leading-7 text-slate-500 dark:text-slate-400">Platform eksplorasi karier digital untuk pelajar, mahasiswa, dan career switcher yang ingin belajar dengan arah yang lebih jelas.</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span class="inline-flex items-center gap-2 rounded-full border border-[#d9e3fb] bg-[#f6f8ff] px-3 py-1.5 text-xs font-semibold text-[#35518d] dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"><i class="fa-solid fa-bolt text-brand-500"></i> Roadmap interaktif</span>
            <span class="inline-flex items-center gap-2 rounded-full border border-[#d9e3fb] bg-[#f6f8ff] px-3 py-1.5 text-xs font-semibold text-[#35518d] dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"><i class="fa-solid fa-shield-heart text-brand-500"></i> Belajar lebih konsisten</span>
          </div>
        </div>
        <div>
          <p class="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-brand-500">Navigasi</p>
          <div class="grid gap-3 text-[0.95rem] text-slate-600 dark:text-slate-300">
            <a class="inline-flex min-h-10 items-center transition hover:text-brand-500" href="${rootPath}index.html">Home</a>
            <a class="inline-flex min-h-10 items-center transition hover:text-brand-500" href="${rootPath}pages/ai-career-advisor/">AI Advisor</a>
            <a class="inline-flex min-h-10 items-center transition hover:text-brand-500" href="${rootPath}pages/learning-roadmap/">Roadmap</a>
            <a class="inline-flex min-h-10 items-center transition hover:text-brand-500" href="${rootPath}pages/career-simulation/">Simulasi</a>
            <a class="inline-flex min-h-10 items-center transition hover:text-brand-500" href="${rootPath}pages/skill-passport/">Skill Passport</a>
          </div>
        </div>
        <div>
          <p class="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-brand-500">Komunitas</p>
          <p class="max-w-[22ch] text-[0.94rem] leading-7 text-slate-500 dark:text-slate-400">Ikuti update, tips belajar, dan contoh perjalanan karier digital yang relevan.</p>
          <div class="mt-5 flex gap-2.5">
            <span class="grid h-10 w-10 cursor-not-allowed place-items-center rounded-2xl border border-[#dbe3f8] bg-white text-brand-500/60 dark:border-slate-600 dark:bg-slate-800 dark:text-brand-400/60" aria-label="Instagram coming soon" title="Instagram coming soon"><i class="fa-brands fa-instagram"></i></span>
            <span class="grid h-10 w-10 cursor-not-allowed place-items-center rounded-2xl border border-[#dbe3f8] bg-white text-brand-500/60 dark:border-slate-600 dark:bg-slate-800 dark:text-brand-400/60" aria-label="LinkedIn coming soon" title="LinkedIn coming soon"><i class="fa-brands fa-linkedin-in"></i></span>
            <span class="grid h-10 w-10 cursor-not-allowed place-items-center rounded-2xl border border-[#dbe3f8] bg-white text-brand-500/60 dark:border-slate-600 dark:bg-slate-800 dark:text-brand-400/60" aria-label="YouTube coming soon" title="YouTube coming soon"><i class="fa-brands fa-youtube"></i></span>
          </div>
          <p class="mt-2 text-xs font-semibold text-slate-400 dark:text-slate-500">Media sosial coming soon</p>
        </div>
        <div>
          <p class="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-brand-500">Mitra Kami</p>
          <div class="rounded-2xl border border-[#dbe3f8] bg-linear-to-br from-[#f8faff] to-brand-50 p-5 shadow-[0_10px_24px_rgba(47,91,211,0.07)] dark:border-slate-600 dark:from-[#1a2640] dark:to-[#111c2f] flex flex-wrap items-center gap-3">
              <img src="${rootPath}assets/partners/skomda-full.webp" alt="Partner 1" class="h-8">
              <img src="${rootPath}assets/partners/scs.webp" alt="Partner 2" class="h-10 rounded-full">
              <img src="${rootPath}assets/partners/fiksi.webp" alt="Partner 3" class="h-12">
              <img src="${rootPath}assets/partners/partner_4.webp" alt="Partner 4" class="h-10">
          </div>
        </div>
      </div>
      <div class="mt-8 flex flex-col gap-3 border-t border-[#e7edfb] pt-5 text-sm text-slate-500 xl:flex-row xl:items-center xl:justify-between dark:border-slate-700 dark:text-slate-400">
        <p>&copy; 2026 WorkSim. Dibangun untuk membantu perjalanan karier digital jadi lebih terarah.</p>
        <p class="inline-flex items-center gap-2"><i class="fa-solid fa-sparkles text-brand-500"></i> Belajar, progres, dan eksplorasi dalam satu tempat</p>
      </div>
    </div>
  </div>
</footer>`;

// Inject Components
document.addEventListener("DOMContentLoaded", () => {
  // Inject Navbar before <main> or at top of body
  const navPlaceholder = document.getElementById("navbar-placeholder");
  if (navPlaceholder) navPlaceholder.outerHTML = NAVBAR_HTML;

  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;

  // Auth-aware Navbar
  const currentUser = getCurrentUser();
  const authActions = document.getElementById("authActions");
  const authActionsMobile = document.getElementById("authActionsMobile");
  if (authActions) authActions.innerHTML = getAuthActionsHTML(currentUser);
  if (authActionsMobile) {
    authActionsMobile.innerHTML = getMobileAuthActionsHTML(currentUser);
  }
  ["logoutButton", "logoutButtonMobile"].forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener("click", async () => {
      const result = await Swal.fire({
        title: "Keluar dari akun?",
        text: "Kamu perlu login kembali untuk mengakses dashboard serta fitur lainnya. Pastikan semua pekerjaanmu sudah tersimpan sebelum melanjutkan.",
        confirmButtonText: "Keluar",
        cancelButtonText: "Batal",
      });

      if (result.isConfirmed) {
        logoutUser();
      }
    });
  });

  // Active Nav Highlight
  const navLinks = document.querySelectorAll("header nav a");
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href").replace(/\/+$/, "") || "/";
    if (currentPath === linkPath) {
      link.classList.add("bg-[#eaf0ff]", "dark:bg-white/10", "text-brand-500");
    }
  });

  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuIcon = document.getElementById("mobileMenuIcon");

  function setMobileMenuOpen(isOpen) {
    if (!mobileMenuToggle || !mobileMenu || !mobileMenuIcon) return;

    mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
    mobileMenuToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu navigasi" : "Buka menu navigasi",
    );
    mobileMenuIcon.className = isOpen
      ? "fa-solid fa-xmark text-sm"
      : "fa-solid fa-bars text-sm";

    mobileMenu.style.maxHeight = isOpen ? `${mobileMenu.scrollHeight + 24}px` : "0";
    mobileMenu.style.opacity = isOpen ? "1" : "0";
    mobileMenu.style.paddingTop = isOpen ? "0.75rem" : "0";
    mobileMenu.style.paddingBottom = isOpen ? "0.75rem" : "0";
    mobileMenu.style.transform = isOpen ? "translateY(0)" : "translateY(-8px)";
    mobileMenu.style.pointerEvents = isOpen ? "auto" : "none";
  }

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      const isOpen = mobileMenuToggle.getAttribute("aria-expanded") === "true";
      setMobileMenuOpen(!isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMobileMenuOpen(false));
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    });
  }

  // Dark Mode Toggle
  const html = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") html.classList.add("dark");

  function updateIcons(isDark) {
    ["themeIcon", "themeIconMobile"].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.className = isDark
        ? "fa-solid fa-sun text-base"
        : "fa-solid fa-moon text-base";
    });
    ["themeToggle", "themeToggleMobile"].forEach((id) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.setAttribute("aria-pressed", String(isDark));
    });
  }
  updateIcons(html.classList.contains("dark"));

  ["themeToggle", "themeToggleMobile"].forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener("click", () => {
      html.classList.toggle("dark");
      const isDark = html.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      updateIcons(isDark);
    });
  });

  // ─── Navbar Scroll Morph: Capsule → Normal ────────────────────────────────
  const siteHeader  = document.getElementById('site-header');
  const navbarOuter = document.getElementById('navbar-outer');
  const navbarPill  = document.getElementById('navbar-pill');

  const SCROLL_THRESHOLD = 60;

  function applyScrollState(scrolled) {
    if (!siteHeader || !navbarPill) return;
    const isDark = html.classList.contains('dark');

    if (scrolled) {
      // ── Scrolled: full-width flat navbar ──
      siteHeader.style.padding         = '0';
      siteHeader.style.background      = isDark ? 'rgba(11,18,32,0.9)' : 'rgba(247,250,255,0.9)';
      siteHeader.style.borderColor     = isDark ? 'rgba(71,85,105,0.5)' : 'rgba(219,229,248,1)';
      siteHeader.style.backdropFilter  = 'blur(20px)';

      navbarPill.style.borderRadius = '0';
      navbarPill.style.borderColor  = 'transparent';
      navbarPill.style.boxShadow    = 'none';
      navbarPill.style.padding      = '0.5rem 1.5rem';
      navbarPill.style.background   = 'transparent';
    } else {
      // ── Top: capsule pill ──
      siteHeader.style.padding         = '0 1vw';
      siteHeader.style.background      = 'transparent';
      siteHeader.style.borderColor     = 'transparent';
      siteHeader.style.backdropFilter  = 'none';

      navbarPill.style.borderRadius = '9999px';
      navbarPill.style.borderColor  = isDark ? 'rgb(71,85,105)' : '#dbe3f8';
      navbarPill.style.boxShadow    = '0 10px 26px rgba(47,91,211,0.14)';
      navbarPill.style.padding      = '0.5rem';
      navbarPill.style.background   = isDark ? '#111c2f' : '#f7faff';
    }
  }

  // Re-apply on dark mode toggle to keep colors consistent
  const _origUpdateIcons = updateIcons;
  ['themeToggle', 'themeToggleMobile'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      // Recompute scroll state after theme switch
      setTimeout(() => applyScrollState(window.scrollY > SCROLL_THRESHOLD), 0);
    });
  });

  window.addEventListener('scroll', () => {
    applyScrollState(window.scrollY > SCROLL_THRESHOLD);
  }, { passive: true });

  // Apply on load
  applyScrollState(window.scrollY > SCROLL_THRESHOLD);

  // ─── Scroll Reveal ────────────────────────────────────────────────────────
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("opacity-0", "translate-y-6");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealEls.forEach((el) => observer.observe(el));
  }
});
