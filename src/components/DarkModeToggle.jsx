import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check local storage or default to system preference
    return localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-500 ${
        isDark ? "bg-gray-700" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full transition-transform duration-500 ${
          isDark ? "translate-x-6 bg-white" : "translate-x-0 bg-black"
        }`}
      ></div>
    </button>
  );
};

export default DarkModeToggle;
