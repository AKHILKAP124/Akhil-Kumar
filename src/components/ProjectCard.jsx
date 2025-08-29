import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
      className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 w-full relative cursor-pointer"
      onClick={() => window.open(link, "_blank")}
    >
      <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
      <span className="absolute w-px -left-px h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
      <span className="absolute w-[40%] -top-px left-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
      <span className="absolute w-px -right-px bottom-px h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>

      <img
        src={`/logos/${project.logo}`}
        className="size-9 rounded mb-4"
        alt={project.title}
      />
      <h3 className="font-bold text-xl">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-200 text-sm mt-3">
        {project.description}
      </p>
      <div className="flex flex-wrap space-x-2 space-y-2 mt-4 overflow-hidden">
        {project.skills.map((skill, index) => (
          <span
            key={index}
            className="px-1 py-0.5 text-xs text-gray-600  italic bg-gray-200/10 dark:bg-transparent dark:border dark:border-gray-500/50 dark:text-gray-300 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
