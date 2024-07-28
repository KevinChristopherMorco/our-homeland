import React, { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "lightMode"
  );

  const [themeToggle, setThemeToggle] = useState(
    JSON.parse(localStorage.getItem("themeToggle") || false)
  );

  const handleTheme = () => {
    const themeToggle = document.body.classList.toggle("darkMode");

    themeToggle ? setTheme("darkMode") : setTheme("lightMode");
    themeToggle ? setThemeToggle(true) : setThemeToggle(false);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("themeToggle", JSON.stringify(themeToggle));
    document.body.classList = "";
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <header className="w-full fixed top-0 z-[999]">
      <nav className="w-full px-4 py-8 flex justify-between items center bg-[var(--secondary-color)] md:py-10 xl:justify-around">
        <div className="w-[50%]">
          <h1 className="font-bold md:text-xl xl:text-2xl">
            Where in the world?
          </h1>
        </div>
        <div
          className="w-[30%] flex justify-around items-center text-sm cursor-pointer md:justify-end md:gap-x-2 md:text-lg xl:text-xl"
          onClick={handleTheme}
        >
          {themeToggle ? (
            <ion-icon name="sunny"></ion-icon>
          ) : (
            <ion-icon name="moon"></ion-icon>
          )}
          <p>{themeToggle ? "Light Mode" : "Dark Mode"}</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
