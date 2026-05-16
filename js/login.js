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
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const pwd = document.getElementById("password").value;

      if (email === "budi@worksim.id" && pwd === "password123") {
        window.location.href = "features/skill-passport/index.html";
      } else {
        alert(
          "Email atau password salah!\nGunakan akun dummy:\nEmail: budi@worksim.id\nPassword: password123",
        );
      }
    });
  }
});
