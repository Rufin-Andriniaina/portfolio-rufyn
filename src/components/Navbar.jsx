import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toogleDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const sections = ["home", "services", "contact"];
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            setActiveSection(sectionId);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    isScrollingRef.current = true;
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  return (
    <div className="w-full md:h-12 sm:h-14 h-18 mt-0 flex flex-col md:flex-row justify-center md:justify-between items-center fixed top-0 xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 z-50 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="flex items-center sm:gap-x-4 gap-x-2 pt-2 mb-3 md:mb-0">
        <a
          className="dark:text-yellow-500 text-red-500 md:text-2xl sm:text-xl text-lg"
          href=""
        >
          Rufin Andriniaina
        </a>

        <i
          className={`${
            darkMode ? "bx bx-sun" : "bx bx-moon"
          }  text-gray-600 dark:text-white  md:text-xl text-lg sm:ml-4 ml-2 cursor-pointer transition-colors duration-500`}
          onClick={toogleDarkMode}
        ></i>
      </div>

      <div className=" pb-2">
        <a
          className={`group font-light lg:text-lg sm:text-base text-sm tracking-wide lg:mr-12 mr-8 relative ${
            activeSection === "home"
              ? "text-red-500 dark:text-yellow-500"
              : "text-gray-600 dark:text-white"
          }`}
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
        >
          Home
          <span
            className={`absolute -bottom-1 left-0 w-full h-px bg-gray-600 dark:bg-white transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300 ${
              activeSection === "home"
                ? "bg-red-500 dark:bg-yellow-500 scale-x-100"
                : "bg-gray-600 dark:bg-white scale-x-0"
            }`}
          ></span>
        </a>

        <a
          className={`group text-gray-700 dark:text-white font-light lg:text-lg sm:text-base text-sm tracking-wide lg:mr-12 mr-8 relative ${
            activeSection === "services"
              ? "text-red-500 dark:text-yellow-500"
              : "text-gray-600 dark:text-white"
          }`}
          href="#services"
          onClick={(e) => handleNavClick(e, "services")}
        >
          Services
          <span
            className={`absolute -bottom-1 left-0 w-full h-px transform scale-x-0 bg-gray-600 dark:bg-white group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300 ${
              activeSection === "services"
                ? "bg-red-500 dark:bg-yellow-500 scale-x-100"
                : "bg-gray-600 dark:bg-white scale-x-0"
            }`}
          ></span>
        </a>

        <a
          className={` group text-gray-700 dark:text-white font-light lg:text-lg sm:text-base text-sm tracking-wide lg:mr-12 mr-8 relative ${
            activeSection === "contact"
              ? "text-red-500 dark:text-yellow-500"
              : "text-gray-600 dark:text-white"
          }`}
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
        >
          Contact
          <span
            className={`absolute -bottom-1 left-0 w-full h-px transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right bg-gray-600 dark:bg-white transition duration-300 ${
              activeSection === "contact"
                ? "bg-red-500 dark:bg-yellow-500 scale-x-100"
                : "bg-gray-600 dark:bg-white scale-x-0"
            }`}
          ></span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
