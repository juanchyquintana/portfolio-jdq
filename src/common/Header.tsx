import { useEffect, useState } from "react";
import pittyLogo from "../img/LogoPittyDev.png";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    isDarkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <header className="md:mt-6 border-b-2 border-blue-500 shadow-lg">
      <nav className="mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link className="shrink-0 text-blue-500" to={"/"}>
          <img src={pittyLogo} alt="Logo de JDQ" className="h-20" />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          <li className="hover:border-b-2 hover:border-blue-500 hover:transition">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 rounded-lg text-md font-bold uppercase text-blue-500 hover:text-blue-900 transition-colors"
                  : "px-4 py-2 rounded-lg text-md font-bold uppercase hover:text-blue-500 transition-colors"
               }
              to={"/aboutme"}
            >
              Sobre Mí
            </NavLink>
          </li>
          <li className="hover:border-b-2 hover:border-blue-500 hover:transition">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 rounded-lg text-md font-bold uppercase text-blue-500 hover:text-blue-900 transition-colors"
                  : "px-4 py-2 rounded-lg text-md font-bold uppercase hover:text-blue-500 transition-colors"
              }
              to={"/projects"}
            >
              Proyectos
            </NavLink>
          </li>
          <li className="hover:border-b-2 hover:border-blue-500 hover:transition">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 rounded-lg text-md font-bold uppercase text-blue-500 hover:text-blue-900 transition-colors"
                  : "px-4 py-2 rounded-lg text-md font-bold uppercase hover:text-blue-500 transition-colors"
              }
              to={"/contact"}
            >
              Contacto
            </NavLink>
          </li>
        </ul>

        <div className="ml-auto flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="relative flex h-8 w-8 items-center justify-center rounded-lg hover:text-blue-500 dark:text-gray-300"
            type="button"
            aria-haspopup="listbox"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-secondary hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500 cursor-pointer transition-colors"
            >
              <path
                fillRule="evenodd"
                d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <button
            onClick={toggleMenu}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-secondary md:hidden"
            type="button"
            aria-expanded={isMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 cursor-pointer text-secondary transition-colors hover:text-primary"
            >
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="relative md:hidden">
            <div className="absolute right-0 z-10 mt-5 w-40 origin-top-right overflow-auto rounded-xl bg-white p-2 text-base shadow-md focus:outline-none sm:text-sm md:hidden">
              <div className="grid text-center">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "px-4 py-2 rounded-lg text-md font-bold uppercase text-blue-500 transition-colors"
                      : "px-4 py-2 rounded-lg text-md font-bold uppercase hover:text-blue-500 transition-colors"
                  }
                  to={"/aboutme"}
                >
                  Sobre Mí
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "px-4 py-2 rounded-lg text-md font-bold uppercase text-blue-500 transition-colors"
                      : "px-4 py-2 rounded-lg text-md font-bold uppercase hover:text-blue-500 transition-colors"
                  }
                  to={"/projects"}
                >
                  Proyectos
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "px-4 py-2 rounded-lg text-md font-bold uppercase text-blue-500 transition-colors"
                      : "px-4 py-2 rounded-lg text-md font-bold uppercase hover:text-blue-500 transition-colors"
                  }
                  to={"/contact"}
                >
                  Contacto
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
