import React from "react";
import { projects } from "../constants/index";
import { pageSEO } from "../seo/SEOConfig";

const SEO = React.lazy(() => import("../components/SEO"));
const Navbar = React.lazy(() => import("../components/Navbar"));
const Contact = React.lazy(() => import("../components/Contact"));
const Footor = React.lazy(() => import("../components/Footor"));
const ProjectCard = React.lazy(() => import("../components/ProjectCard"));


const Projects = () => {
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
      {/* SEO */}
      <SEO {...pageSEO.projects} />
      
      {/* Navbar */}
      <Navbar />
      <div className="max-w-2xl mx-auto py-12 px-6 lg:px-0 ">
        <h1 className="text-5xl font-bold dark:text-gray-200 mb-1">Projects</h1>
        <p className="text-[15px] dark:text-[#949498] mt-4">
          I’ve developed commercial projects as well as hobby projects. All
          projects are included here. –{" "}
          <a href="/blogs" className="underline text-blue-500 font-medium">
            checkout my blog
          </a>{" "}
          while you're here.
        </p>
        <p className="text-[15px] dark:text-[#949498] mt-1">
          I write about technology, learning and memes.
        </p>

        {/* Project Cards */}
        <div className="my-8">
          <div className="mb-4 ">
            <h1 className="text-3xl font-bold dark:text-gray-200">
              Full-Stack
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 dark:text-gray-200">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                link={project.link}
                project={project}
              />
            ))}
            <ProjectCard
              project={defaultProjects}
              link={defaultProjects.link}
            />
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

export default Projects;
