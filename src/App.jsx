// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import { ChevronDown } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import { Link, useNavigate } from "react-router-dom";
import Contact from "./components/Contact";
import Footor from "./components/Footor";
import { projects } from "./constants/index";
import { Helmet } from "react-helmet";

export default function App() {
  const navigate = useNavigate();

  const defaultProjects = {
    logo: "react.svg",
    title: "Adding More Projects",
    description: "Adding More Projects",
    link: "#",
    skills: [
      "React JS",
      "TailwindCSS",
      "Socket.io",
      "MongoDB",
      "Node JS",
      "Express JS",
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#18181b] text-gray-900">
      <Helmet>
        <title>Akhil Kumar - Developer</title>
        <meta name="description" content="Akhil Kumar - Developer" />
        <meta
          name="keywords"
          content="Akhil Kumar, Akhil Kapoor, Akhil portfolio, Blogs, Programming, Web Development, web developer portfolio, web developer blog"
        />
      </Helmet>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-3xl mx-auto flex flex-col-reverse md:flex-row justify-between md:items-center py-12 px-6 ">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold dark:text-gray-200 mb-1">
            Akhil Kumar
          </h1>
          <p className="text-[15px] dark:text-[#949498] mb-4">
            Building{" "}
            <span className="bg-gray-200 dark:bg-gray-200/20 dark:text-gray-200 font-medium rounded px-2 py-0.5">
              Infraa
            </span>
            ,{" "}
            <span className="bg-gray-200 dark:bg-gray-200/20 dark:text-gray-200 font-medium rounded px-2 py-0.5">
              QKart
            </span>{" "}
            and other{" "}
            <span className="font-medium dark:text-gray-200">cool things</span>
          </p>
          <p className="text-[15px] text-gray-600 dark:text-[#949498]">
            Senior Software Engineer building SaaS products and web apps. Find
            me on{" "}
            <a
              href="https://x.com/AkhilKumar_39"
              target="_blank"
              className="text-blue-600 dark:text-blue-500/70 hover:underline  font-medium"
            >
              twitter
            </a>{" "}
            for tech updates and memes.
          </p>
        </div>
        <div className=" relative flex p-4 md:p-4 w-28 mb-5">
          <a
            href="https://x.com/AkhilKumar_39"
            target="__blank"
            className="block z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5  relative bg-white h-20 w-20"
          >
            <img
              src="https://i.ibb.co/6ct1ChNF/Whats-App-Image-2025-09-25-at-7-07-55-PM.jpg"
              alt="Akhil Kumar"
              className="size-20 rounded object-cover shadow-lg "
            />
          </a>
          <div className="z-0">
            <div className="absolute left-0 -right-12 top-0 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute left-0 -right-12 bottom-14 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
              <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="max-w-3xl mx-auto px-6 dark:text-gray-200">
        <h2 className="text-3xl font-bold mb-6">Recent Blogs</h2>
        <div className="space-y-4">
          <div
            onClick={() => navigate("/blog/real-time-chat-app-using-socket-io")}
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
        <div className="flex mt-6">
          <Link
            to="/blogs"
            className="text-gray-600 dark:text-gray-200 text-sm font-medium flex items-center gap-1 mx-auto cursor-pointer"
          >
            See All Blogs <ChevronDown className="w-5" />
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-3xl mx-auto px-6 py-12 dark:text-gray-200">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            while (index <= 4) {
              index += 1;
              return (
                <ProjectCard
                  key={index}
                  link={project.link}
                  project={project}
                />
              );
            }
          })}
          <ProjectCard project={defaultProjects} link={defaultProjects.link} />
        </div>
        {projects.length > 4 && (
          <div className="flex mt-6">
            <Link
              to="/projects"
              className="text-gray-600 dark:text-gray-200 text-sm font-medium flex items-center gap-1 mx-auto cursor-pointer"
            >
              See All Projects <ChevronDown className="w-5" />
            </Link>
          </div>
        )}
      </section>

      {/* Contact */}
      <section className="max-w-2xl mx-auto px-6 py-12 dark:text-gray-200">
        <Contact />
      </section>

      {/* Footer */}
      <section className="max-w-2xl mx-auto px-6 py-12 dark:text-gray-200">
        <Footor />
      </section>
    </div>
  );
}
