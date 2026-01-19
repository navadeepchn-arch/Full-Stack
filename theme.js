const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  const root = document.documentElement;

  if (root.dataset.theme === "dark") {
    root.dataset.theme = "light";
    toggleBtn.textContent = "☀️"; // Sun for light mode
  } else {
    root.dataset.theme = "dark";
    toggleBtn.textContent = "🌑"; // Moon for dark mode
  }
});
