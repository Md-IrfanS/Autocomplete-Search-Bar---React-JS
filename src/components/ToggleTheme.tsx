import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex space-x-2">
      <button
        className={`p-2 rounded ${theme === "light" ? "bg-blue-500 text-white" : theme === "system"? "bg-gray-300"   : "bg-gray-700"}`}
        onClick={() => setTheme("light")}
      >
        ☀️ Light
      </button>
      <button
        className={`p-2 rounded ${theme === "dark" ? "bg-black text-white" : "bg-gray-300"}`}
        onClick={() => setTheme("dark")}
      >
        🌙 Dark
      </button>
      <button
        className={`p-2 rounded ${theme === "system" ? "bg-green-500 text-white" :theme === "light"? "bg-slate-400": "bg-gray-700"}`}
        onClick={() => setTheme("system")}
      >
        💻 System
      </button>
    </div>
  );
};

export default ThemeToggle;
