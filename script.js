const stepsContainer = document.getElementById("roadSteps");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeToggleMobile = document.getElementById("themeToggleMobile");
const themeIconMobile = document.getElementById("themeIconMobile");

function updateThemeIcons(isDark) {
  const iconClass = isDark ? "fa-solid fa-sun text-base" : "fa-solid fa-moon text-base";
  const mobileIconClass = isDark ? "fa-solid fa-sun text-sm" : "fa-solid fa-moon text-sm";

  if (themeIcon) {
    themeIcon.className = iconClass;
  }

  if (themeIconMobile) {
    themeIconMobile.className = mobileIconClass;
  }
}

function setTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("theme", theme);
  updateThemeIcons(isDark);
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark" || savedTheme === "light") {
  setTheme(savedTheme);
} else {
  setTheme("light");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
    setTheme(nextTheme);
  });
}

if (themeToggleMobile) {
  themeToggleMobile.addEventListener("click", () => {
    const nextTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
    setTheme(nextTheme);
  });
}

function updateProgress() {
  const checkboxes = Array.from(stepsContainer.querySelectorAll("input[type='checkbox']"));
  const checkedCount = checkboxes.filter((item) => item.checked).length;
  const percent = Math.round((checkedCount / checkboxes.length) * 100);

  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${percent}%`;
}

if (stepsContainer && progressFill && progressText) {
  stepsContainer.addEventListener("change", updateProgress);
  updateProgress();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-6");
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
