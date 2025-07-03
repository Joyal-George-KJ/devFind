import { useState, useEffect } from "react";

type Theme = "dark" | "light";

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toogleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return { theme, toogleTheme };
};

export default useTheme;
