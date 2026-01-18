import { useTheme } from "../../context/ThemeContext";

import Icons from "../../icons/icons";

const ThemeToggleButton = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle-button ${className}`}
      title={theme === "light" ? "Cambiar a tema oscuro" : "Cambiar a tema claro"}
      aria-label="Cambiar tema"
    >
      {theme === "light" ? <Icons.Moon/> : <Icons.Sun/>}
    </button>
  );
};

export default ThemeToggleButton;
