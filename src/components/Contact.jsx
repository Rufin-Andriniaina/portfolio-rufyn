import React from "react";
import NavigationCircles from "./NavigationCircles";

const Contact = () => {
  return (
    <div id="contact" className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl xl:mb-20 md:mb-32 font-light mb-28 lg:mb-20">Contact With Me</h2>
      <form className="flex flex-col lg:space-y-10 space-y-8" action="">
        <input
          placeholder="Email"
          className=" h-13 md:w-[400px] w-[300px] placeholder-gray-600 pl-3 dark:placeholder-yellow-500/50    outline-0 border border-red-500 dark:border-yellow-500 transition-colors duration-500  "
          type="email"
        />
        <textarea
          placeholder="Message"
          className=" md:w-[400px] w-[300px] pl-3  placeholder-gray-600 min-h-[100px]  max-h-[200px] h-13 dark:placeholder-yellow-500/50  outline-0 border border-red-500 dark:border-yellow-500 resize-y transition-colors duration-500    p-3"
          name=""
          id=""
        ></textarea>
        <input
          className="text-white dark:text-gray-900 transition-colors duration-500 bg-red-500 dark:bg-yellow-500 py-2 font-extrabold tracking-wide pl-3 h-13 shadow-md shadow-yellow-700/20 outline uppercase cursor-pointer "
          type="submit"
          value="Stay Connected"
        />
      </form>

      <NavigationCircles section="contact" />
    </div>
  );
};

export default Contact;
