
document.body.classList.add("dark-mode");

function toggleDarkMode() {
  const body = document.body;
  const button = document.querySelector(".dark-mode-toggle");
  body.classList.toggle("dark-mode");

  // Toggle button text
  if (body.classList.contains("dark-mode")) {
    button.textContent = "☀️ Light Mode";
  } else {
    button.textContent = "🌙 Dark Mode";
  }
}
