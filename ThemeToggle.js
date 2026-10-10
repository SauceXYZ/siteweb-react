"use client";

// Bouton pour changer de thème (clair / sombre), mémorisé dans le navigateur
export default function ThemeToggle() {
  function toggle() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  }

  return (
    <button className="toggle" type="button" onClick={toggle} aria-label="Changer de thème">
      <span className="when-dark">☀️ Clair</span>
      <span className="when-light">🌙 Sombre</span>
    </button>
  );
}
