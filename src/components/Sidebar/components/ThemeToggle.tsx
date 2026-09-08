import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../../../contexts/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 bg-secondary hover:bg-secondary/70 text-secondary-foreground rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <BsSun className="text-lg" /> : <BsMoon className="text-lg" />}
    </button>
  );
}
