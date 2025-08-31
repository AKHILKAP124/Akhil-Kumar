import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ComponentCard = ({ title, description, logo, link, ...rest }) => {
  return (
    <Link to={link}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.2 }}
        className="border border-gray-200 dark:border-zinc-700 rounded-xl p-4 w-full relative"
        {...rest}
      >
        <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <span className="absolute w-px -left-px h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <span className="absolute w-[40%] -top-px left-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <span className="absolute w-px -right-px bottom-px h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>

        <img
          alt={title}
          height={32}
          width={32}
          src={`/logos/${logo}`}
          className="rounded-xl"
        />
        <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-1 text-gray-700 dark:text-gray-400 text-sm">
          {description}
        </p>
      </motion.div>
    </Link>
  );
};

export default ComponentCard;
