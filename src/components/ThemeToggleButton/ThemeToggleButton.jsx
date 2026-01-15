import { useTheme } from "../../context/ThemeContext";

import { FaRegMoon, FaSun } from "react-icons/fa";

const ThemeToggleButton = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle-button ${className}`}
      aria-label="Cambiar tema"
    >
      {theme === "light" ? <FaRegMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggleButton;
