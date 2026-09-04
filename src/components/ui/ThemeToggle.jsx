function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-lg transition hover:bg-gray-100 dark:border-white/15 dark:bg-black dark:hover:bg-white/10"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🔆" : "⏾"}
    </button>
  );
}

export default ThemeToggle;