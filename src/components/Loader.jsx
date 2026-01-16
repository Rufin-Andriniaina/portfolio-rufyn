import React from "react";

const Loader = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 bg-white dark:bg-gray-900 grid place-items-center z-50 transition-opacity duration-1000 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none "
      }`}
    >
      <img className="w-40" src="/images/loading.gif" alt="" />
    </div>
  );
};

export default Loader;
