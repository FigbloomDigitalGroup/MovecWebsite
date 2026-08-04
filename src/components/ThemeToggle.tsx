import { type FC } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        relative
        flex
        items-center
        w-14
        h-8
        rounded-full
        bg-slate-300
        dark:bg-slate-700
        transition-colors
        duration-300
        cursor-pointer
        p-1
      "
    >
      <span
        className={`
          absolute
          flex
          items-center
          justify-center
          w-6
          h-6
          rounded-full
          bg-white
          shadow-lg
          transition-transform
          duration-300
          ${
            theme === "dark"
              ? "translate-x-6"
              : "translate-x-0"
          }
        `}
      >
        {theme === "dark" ? (
          <FaSun className="text-yellow-500 text-sm" />
        ) : (
          <FaMoon className="text-slate-700 text-sm" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;



