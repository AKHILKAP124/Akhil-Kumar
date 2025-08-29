import React from "react";
import Contact from "../components/Contact";
import Footor from "../components/Footor";
import Navbar from "../components/Navbar";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-[#18181b] text-gray-900">
      <Helmet>
        <title>Blogs -Akhil Kumar</title>
        <meta
          name="description"
          content="I’ve been programming for almost 1.5 years now. Throughout this time,
          I’ve worked with various technologies, and I’m here to share them with
          you. Use the search below to filter by title."
        />
        <meta name="keywords" content=" Akhil Kumar, Akhil Kapoor, Akhil portfolio, Blogs, Programming, Web Development, web developer portfolio, web developer blog" />
      </Helmet>
      <Navbar />
      <div className="max-w-2xl mx-auto py-12 px-6 lg:px-0 ">
        <h1 className="text-5xl font-bold dark:text-gray-200 mb-1">Blogs</h1>
        <p className="text-[15px] dark:text-[#949498] mt-4">
          I’ve been programming for almost 1.5 years now. Throughout this time,
          I’ve worked with various technologies, and I’m here to share them with
          you. Use the search below to filter by title.
        </p>

        {/* Search */}
        <div className="w-full h-fit mt-4 mb-8 rounded-md shadow bg-white dark:bg-[#27272a] border border-gray-300 dark:border-gray-500/50 focus-within:border-2 focus-within:border-gray-700 dark:focus-within:border-gray-200 flex items-center justify-between px-1 py-2">
          <input
            type="text"
            className="w-full h-full px-2 text-sm focus:outline-none placeholder:text-gray-400 dark:text-gray-200 "
            placeholder="Search articles..."
          />
          <Search className="mr-2 size-5 text-gray-400 dark:text-gray-500" />
        </div>

        {/* All Posts */}
        <div className="max-w-3xl mx-auto dark:text-gray-200 pb-14">
          <h2 className="text-3xl font-bold mb-6">All Posts</h2>
          <div className="space-y-4">
            <div
              onClick={() =>
                navigate("/blog/real-time-chat-app-using-socket-io")
              }
              className="pb-6  border-1 border-gray-300 bg-gray-100 dark:bg-[#27272a] dark:border-gray-500/50 p-4 rounded-lg cursor-pointer text-base font-medium"
            >
              <p className="max-w-xl text-base font-medium">
                Real-Time Chat App with MERN and Socket.IO 🚀
              </p>
              <p
                className="text-gray-500 dark:text-gray-200/50 text-sm mt-1
            "
              >
                Building a real-time chat application is one of the best ways to
                learn how WebSockets work...
              </p>
            </div>
            <div
              onClick={() => navigate("/blog/mern-jwt-authentication")}
              className="pb-6  border-1 border-gray-300 bg-gray-100 dark:bg-[#27272a] dark:border-gray-500/50 p-4 rounded-lg cursor-pointer font-medium"
            >
              <p className="max-w-xl text-base font-medium">
                🛡️ How to Add Authentication in MERN Using JWT
              </p>
              <p
                className="text-gray-500 dark:text-gray-200/50 text-sm mt-1
            "
              >
                Learn how to implement secure JWT-based authentication in your
                MERN...
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="my-8">
          <Contact />
        </div>

        {/* Footer */}
        <Footor />
      </div>
    </div>
  );
};

export default Blogs;
