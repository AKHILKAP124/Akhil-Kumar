import React from "react";

const Resources = () => {
  return (
    <div className=" w-full h-screen text-gray-900 dark:text-gray-200 font-medium text-xl dark:bg-[#18181b] text-center pt-20">
      <p>This page is under development🧑‍💻</p>
      <button
        onClick={() => (window.location.href = "/")}
        className="bg-blue-500 hover:bg-blue-700 font-medium text-lg text-white py-1 px-4 mt-4 rounded cursor-pointer"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Resources;
