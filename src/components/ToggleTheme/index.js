export default function ToggleTheme() {
  function toggleDarkMode() {
    if (!document.documentElement.classList.add("dark")) {
      document.documentElement.classList.add("dark");
    }
  }

  function toggleLightMode() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <div className="flex bg-white dark:bg-black rounded-full mt-8 w-28 ml-40">
      <div className="bg-[#EA002A] dark:bg-black text-white font-bold rounded-full p-2 pl-3 w-14">
        <button onClick={toggleLightMode}>Day</button>
      </div>

      <div className="bg-white text-black dark:bg-[#EA002A] dark:text-white font-bold rounded-full p-2 pl-2.5 w-16">
        <button onClick={toggleDarkMode}>Night</button>
      </div>
    </div>
  );
}
