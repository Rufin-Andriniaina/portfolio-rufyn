import React from "react";

const NavigationCircles = ({ section }) => {
  return (
    <div className="hidden  md:flex flex-col justify-between items-center h-[185px] w-px absolute right-12 bg-red-500 dark:bg-yellow-500 transition-colors duration-500">
      <div
        className={`w-3 rounded-full aspect-square bg-gray-300 border border-red-500 dark:border-yellow-500  ${
          section === "home" ? 
          "bg-red-500 dark:bg-yellow-500" 
          : "bg-gray-300"
        } `}
      ></div>
      <div
        className={`w-3 rounded-full aspect-square  bg-gray-300 border border-red-500 dark:border-yellow-500 ${
          section === "services"
            ? "bg-red-500 dark:bg-yellow-500"
            : "bg-gray-300"
        } `}
      ></div>
      <div
        className={`w-3 rounded-full aspect-square bg-gray-300 border border-red-500 dark:border-yellow-500 ${
          section === "contact"
            ? "bg-red-500 dark:bg-yellow-500"
            : "bg-gray-300"
        } `}
      ></div>
    </div>
  );
};

export default NavigationCircles;
