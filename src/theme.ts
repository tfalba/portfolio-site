// theme.ts
export function initTheme() {
  const root = document.documentElement; // <html>
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (stored === "dark" || (!stored && prefersDark)) {
    root.classList.add("dark");
    root.classList.remove("light");
  } else if (stored === "light") {
    root.classList.add("light");
    root.classList.remove("dark");
  }
}

export function toggleTheme() {
  const root = document.documentElement;

  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
    root.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    root.classList.remove("light");
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}
