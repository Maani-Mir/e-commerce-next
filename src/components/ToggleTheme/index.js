import { useState } from "react";

// import Home from "@/app/page";

export default function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <div className="flex bg-black rounded-lg mt-8 w-20 ml-44">
      <div className="bg-red-600 text-white rounded-lg w-10">
        <button onClick={toggleDarkMode}>Day</button>
        {/* <Home darkMode={darkMode} /> */}
      </div>

      <div className="bg-blue-600 text-white rounded-lg w-12">
        <button>Night</button>
      </div>
    </div>
  );
}
