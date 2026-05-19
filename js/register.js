// Inisialisasi Dark Mode
if (
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
function toggleTheme() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

function togglePassword(inputId, iconContainer) {
  const input = document.getElementById(inputId);
  const icon = iconContainer.querySelector("i");
  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.querySelector('a[href="../login/"]');
  const redirect = new URLSearchParams(window.location.search).get("redirect");
  if (loginLink && redirect) {
    loginLink.href = `../login/?redirect=${encodeURIComponent(redirect)}`;
  }

  const form = document.getElementById("registerForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    window.WorkSimAuth?.registerUser({
      name,
      email,
      password,
    });
    window.location.href = window.WorkSimAuth.getRedirectTarget(
      "/pages/skill-passport/",
    );
  });
});
