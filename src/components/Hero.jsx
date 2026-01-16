import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  aboutText,
  letters,
  professionTexts,
  socialIcons,
} from "../data/index";
import NavigationCircles from "./NavigationCircles";

const Hero = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const [currentText, setCurrentText] = useState(professionTexts[0]);
  const [isRotating, setIsRotating] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [roadImageOpacity, setRoadImageOpacity] = useState(0.5);
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % professionTexts.length;
        setCurrentText(professionTexts[currentIndex]);
        setIsRotating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="flex flex-col items-center justify-center w-full min-h-screen isolate z-10 relative">
      <Navbar />
      <div className="flex flex-col items-center  xl:gap-y-10 md:gap-y-10 gap-y-3 xl:mb-0">
        <h1 className="flex flex-col xl:space-y-8 md:space-y-4 space-y-2 xl:text-6xl md:text-4xl text-3xl md:font-normal font-bold mt-8 md:mt-0">
          <span className="flex mx-auto md:mx-0 ">
            {letters.map((letter, index) => (
              <span
                className="inline-block md:w-38 w-30 xl:-mr-20 -mr-24 relative"
                key={index}
                onMouseEnter={() => setHoveredLetter(index)}
                onMouseLeave={() => setHoveredLetter(null)}
              >
                {letter.char}
                <img
                  src={letter.img}
                  alt={`Hover image ${index + 1}`}
                  className={`xl:h-36 h-24 absolute bottom-full -translate-x-1/2 ${
                    letter.rotate
                  } ${hoveredLetter == index ? "visible" : "invisible"}`}
                />
              </span>
            ))}
          </span>

          <span className="xl:text-6xl md:text-4xl text-2xl tracking-wider px-2 md:px-0 xl:py-4 py-2 text-center overflow-hidden">
            I'm
            <span
              className={`inline-block xl:w-100 md:w-60 w-40 lg:ml-6 ml-2 font-extrabold transform origin-left transition-transform duration-300 ease-out ${
                isRotating ? "hidden md:rotate-100" : "rotate-0"
              }`}
            >
              {currentText}
            </span>
            Web Developer
          </span>
        </h1>

        <button
          className="xl:w-100 md:w-70 w-62.5 xl:text-2xl md:text-xl text-base md:py-1 py-0 md:px-4 px-2 rounded-r-4xl dark:bg-gray-200 bg-gray-900 dark:text-gray-900 text-white  flex justify-between items-center md:mx-0 mx-auto tracking-widest md:mr-auto transition-colors duration-500"
          onClick={() => setIsTextVisible(!isTextVisible)}
          onMouseEnter={() => setRoadImageOpacity(0.8)}
          onMouseLeave={() => setRoadImageOpacity(0.5)}
        >
          {isTextVisible ? "Hide My Stories" : "Read My Stories"}
          <i
            className={isTextVisible ? "bx bx-book-alt" : "bx bx-book-open"}
          ></i>
        </button>

        <div className="flex mr-auto md:gap-12 gap-2 absolute md:relative top-36 md:top-auto left-4  md:left-auto flex-col md:flex-row gap-y-5 md:gap-y-0 ">
          {socialIcons.map((social, index) => (
            <a
              className={`${social.icon} text-red-500 dark:text-yellow-500 hover:text-gray-900 dark:hover:text-white xl:text-3xl text-2xl transition-colors duration-500 `}
              href="#"
              key={index}
            >
              {" "}
            </a>
          ))}
        </div>

        <div className="absolute lg:w-[500px] md:w-[400px] w-[250px] left-1/2 -translate-x-1/2 -z-10">
          <img
            className="w-full mx-auto transition-opacity duration-300"
            style={{ opacity: roadImageOpacity }}
            src="/images/road.png"
            alt="Road Image"
          />
          <span className="xl:text-xs md:text-[10px] text-[6px] tracking-wide text-red-500 dark:text-yellow-500 font-bold absolute -top-5 xl:right-20 lg:right-18 md:right-16 right-8 rotate-[3.5deg] animate-bounce ">
            Looking For New Challenge
          </span>

          <div
            className={`xl:h-[150px] h-[92px] px-3  mt-4 md:mt-0 xl:text-lg md:text-base text-xs font-light text-justify text-gray-950 dark:text-gray-200 tracking-wide ${
              isTextVisible ? "scale-y-100" : "scale-y-0"
            } transform overflow-y-auto origin-top custom-scrollbar transition-transform duration-300`}
          >
            <p className=" dark:first-letter:text-yellow-500 first-letter:text-red-500 first-letter:text-[30px] first-letter:ml-4 xl:py-3 py-1 px-1">
              {aboutText}
            </p>
          </div>
        </div>
      </div>

      <NavigationCircles section="home" />
    </div>
  );
};

export default Hero;
