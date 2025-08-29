import React from "react";
import { Helmet } from "react-helmet";

const Resources = () => {
  return (
    <div className=" w-full h-screen text-gray-900 dark:text-gray-200 font-medium text-xl dark:bg-[#18181b] text-center pt-20">
      <Helmet>
        <title>Resources - Akhil Kumar</title>
        <meta
          name="description"
          content="I’ve been programming for almost 1.5 years now. Throughout this time,
          I’ve worked with various technologies, and I’m here to share them with
          you. Use the search below to filter by title."
        />
        <meta name="keywords" content=" Akhil Kumar, Akhil Kapoor, Akhil portfolio, Blogs, Programming, Web Development, web developer portfolio, web developer blog" />
      </Helmet>
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
