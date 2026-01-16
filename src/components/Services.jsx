import React, { useEffect, useState } from "react";
import { skillCards } from "../data/index";
import NavigationCircles from "./NavigationCircles";

const Services = () => {
  const [hoverPositionClass, setHoverPositionClass] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getPositionClass = (card) => {
    const position = isLargeScreen
      ? card.hoverPosition.large
      : card.hoverPosition.small;
    return position === "bottom" ? "bottom-0" : "top-0";
  };

  const getHoverPositionClass = (card) => {
    const position = isLargeScreen
      ? card.hoverPosition.large
      : card.hoverPosition.small;
    return position === "bottom" ? "bottom-full" : "top-full";
  };

  return (
    <div
      id="services"
      className="min-h-screen flex flex-col justify-center items-center px-4 w-full"
    >
      <h2 className="text-4xl lg:text-3xl mb-30 lg:mb-20 font-light lg:font-bold xl:mt-0 mt-30 lg:mt-0">
        Skill Sket
      </h2>
      <div className="xl:w-[900px] lg:w-[800px] md:w-[600px] grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-26 xl:mb-0 mb-16  ">
        {skillCards.map((card, index) => (
          <div
            key={index}
            className=" lg:max-w-[280px] md:max-w-[400px] max-w-[360px] w-full rounded-md mx-auto ring ring-gray-400/20 shadow-md shadow-gray-700/20 relative isolate"
            onMouseEnter={() => setHoverPositionClass(index)}
            onMouseLeave={() => setHoverPositionClass(null)}
          >
            {" "}
            <div className="w-full p-3 bg-gray-200 dark:bg-gray-800 transition-colors duration-500">
              <i
                className={`${card.icon} md:text-2xl text-xl text-gray-900 dark:text-white transition-colors duration-500`}
              ></i>{" "}
              <h3 className="md:text-lg text-md font-bold my-4 transition-colors duration-500 text-red-500 dark:text-yellow-500">
                {" "}
                {card.title}{" "}
              </h3>
              <p className="text-gray-900 md:text-sm text-xs dark:text-white custom-scrollbar md:h-20 pr-2 font-light h-16 transition-colors duration-500 overflow-y-auto">
                {" "}
                {card.description}{" "}
              </p>
            </div>
            <div
              className={`absolute left-0 w-full  
                 ${getPositionClass(card)} 
                 flex flex-col gap-y-5 lg:gap-y-2 py-4
                 ${hoverPositionClass === index && getHoverPositionClass(card)}
                 transition-all duration-300 -z-10`}
            >
              {isLargeScreen && card.hoverPosition.large === "top" && (
                <div className="flex justify-between">
                  {[...Array(card.projectCount)].map((_, index) => (
                    <a
                      className="text-lg grid place-items-center w-8 bg-red-500 dark:bg-yellow-500 aspect-square rounded-full text-white transition-colors"
                      href="#"
                      key={index}
                    >
                      {index + 1}
                    </a>
                  ))}
                </div>
              )}

              <h2 className="text-center text-gray-900 dark:text-white">
                Projects
              </h2>

              {(!isLargeScreen ||
                (isLargeScreen && card.hoverPosition.large === "bottom")) && (
                <div
                  className={`flex ${
                    card.projectCount === 1
                      ? "justify-center"
                      : "justify-between"
                  }
                ${
                  card.projectCount === 2 ? "mx-4" : "mx-0"
                }
                `}
                >
                  {[...Array(card.projectCount)].map((_, index) => (
                    <a
                      className="text-lg grid place-items-center w-8 bg-red-500 dark:bg-yellow-500 aspect-square rounded-full text-white transition-colors"
                      href="#"
                      key={index}
                    >
                      {index + 1}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <NavigationCircles section="services" />
    </div>
  );
};

export default Services;
