import AutoCompleteSearch from "./components/AutoCompleteSearch";
import ThemeToggle from "./components/ToggleTheme";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="w-full flex justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <h1 className="text-lg font-bold">Search</h1>
        <ThemeToggle />
      </header>
      <div className="relative w-96 mt-10">
        <div className="flex items-center border flex-col border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700">
          <AutoCompleteSearch />
        </div>
      </div>
    </div>
  );
};

export default App;
