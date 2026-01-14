import { useTheme } from "../../context/ThemeContext";

import { FaRegMoon, FaSun } from "react-icons/fa";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="navbar__theme-toggle-btn"
      aria-label="Cambiar tema"
    >
      {theme === "light" ? <FaRegMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggleButton;
