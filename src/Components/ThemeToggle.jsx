import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import {cn} from '../lib/utils'

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div>
      <button onClick={() => toggleTheme()} className={cn("cursor-pointer fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}>
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;
