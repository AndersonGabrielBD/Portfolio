import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const navMenus = [
  { name: "Home", link: "/#sobre" },
  { name: "Sobre", link: "/#about" },
  { name: "Projetos", link: "#projects" },
  { name: "Contato", link: "#about" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const element = document.documentElement;

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      id="home"
      className={`bg-slate-300 dark:bg-gray-900 fixed top-0 left-0 w-full z-20 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex justify-between items-center py-3 sm:py-0">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-900 flex justify-center items-center">
          G.
        </h1>
        <div className="hidden sm:block">
          <ul className="flex items-center gap-4 dark:text-white">
            {navMenus.map((navMenu, index) => (
              <li key={index}>
                <a
                  className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                  href={navMenu.link}
                >
                  {navMenu.name}
                </a>
              </li>
            ))}
            {theme === "dark" ? (
              <BiSolidSun
                className="text-2xl dark:text-white cursor-pointer"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl dark:text-white cursor-pointer"
                onClick={() => setTheme("dark")}
              />
            )}
          </ul>
        </div>

        {/* Menu Mobile */}
        <div className="sm:hidden">
          <div className="flex items-center gap-4">
            {theme === "dark" ? (
              <BiSolidSun
                className="text-2xl dark:text-white cursor-pointer"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl dark:text-white cursor-pointer"
                onClick={() => setTheme("dark")}
              />
            )}
            <FiMenu
              className="text-3xl cursor-pointer dark:text-white"
              onClick={toggleMenu}
            />
          </div>
          {showMenu && (
            <div className="fixed top-16 bg-slate-300 dark:text-white dark:bg-gray-950 shadow-md rounded-b-xl left-0 w-full z-10 py-10">
              <ul className="flex flex-col items-center gap-4">
                {navMenus.map((navMenu, index) => (
                  <li key={index}>
                    <a
                      className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                      href={navMenu.link}
                      onClick={() => setShowMenu(false)}
                    >
                      {navMenu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
