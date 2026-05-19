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
  const registerLink = document.querySelector('a[href="../register/"]');
  const redirect = new URLSearchParams(window.location.search).get("redirect");
  if (registerLink && redirect) {
    registerLink.href = `../register/?redirect=${encodeURIComponent(redirect)}`;
  }

  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const pwd = document.getElementById("password").value;
      const user = window.WorkSimAuth?.loginUser(email, pwd);

      if (user) {
        window.location.href = window.WorkSimAuth.getRedirectTarget(
          "/pages/skill-passport/",
        );
      } else {
        alert(
          "Email atau password salah!\nGunakan akun yang sudah didaftarkan atau akun dummy:\nEmail: budi@worksim.id\nPassword: password123",
        );
      }
    });
  }
});
