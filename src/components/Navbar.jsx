import React from "react";
import { Moon, Sun } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavbarLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Components", href: "/components" },
  { name: "Resources", href: "/resources" },
];

const Navbar = () => {
  const [theme, setTheme] = React.useState("light");
  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);
  const storedTheme = localStorage.getItem("theme");

  const variants = {
    hidden: { opacity: 0, y: "1vh" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
    // transition: { staggerChildren: 0.5 },
    exit: { opacity: 0, y: "1vh" },
  };

  const itemA = {
    hidden: { opacity: 0, scale: 0.5, y: "1vh" },
    show: { opacity: 1, scale: 1, y: 0 },
  };

  React.useEffect(() => {
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, [storedTheme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <header className="max-w-6xl mx-auto flex justify-between items-center px-6 lg:px-36 py-4 pt-5 sticky  top-0 backdrop-blur-2xl dark:bg-[#18181b] z-40">
      <button
        onClick={toggleTheme}
        className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-yellow-800/20 dark:hover:bg-yellow-700/30 cursor-pointer"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-yellow-600 spinner " />
        ) : (
          <Moon className="w-5 h-5 text-gray-600 animate-pulse" />
        )}
      </button>

      {/* Mobile Nav */}
      <nav className="flex items-center space-x-3 bg-transparent dark:bg-transparent text-gray-600 dark:text-gray-300 text-sm font-medium sm:hidden relative">
        <NavLink to="/" className="">
          Home
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <button
          onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          className=" p-2.5 bg-slate-600/20 text-gray-800 dark:text-gray-200 rounded"
        >
          <AlignJustify className="w-5 h-5" />
        </button>
      </nav>

      {/* Desktop Nav */}
      <nav className="hidden sm:flex space-x-6 bg-white dark:bg-transparent dark:border dark:border-gray-400/20 px-6 py-2 rounded-full shadow-md text-sm font-medium">
        {NavbarLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            className={({ isActive }) =>
              isActive
                ? " text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-600"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <AnimatePresence>
        {isHamburgerOpen && (
          <motion.div
            key="modal"
            variants={variants}
            initial="hidden"
            animate="show"
            className="z-50 p-4 rounded-xl bg-white dark:bg-zinc-800 shadow-2xl absolute top-16 left-3  w-[calc(100vw-2rem)] min-h-40 text-base dark:text-gray-200 font-medium md:hidden"
          >
            <ul>
              <motion.li
                variants={itemA}
                onClick={() => window.open("/blogs")}
                className="py-1.5 px-2.5 rounded-lg hover:bg-sky-600/10 dark:hover:bg-sky-600/20  cursor-pointer mb-1 w-full "
              >
                <motion.p variants={itemA}>Blogs</motion.p>
              </motion.li>
              <motion.div
                variants={itemA}
                className=" w-full flex-none blur-[1px] h-px border-t border-slate-900/20 dark:border-gray-300  py-2"
              ></motion.div>
              <motion.li
                variants={itemA}
                onClick={() => window.open("/components")}
                className="py-1.5 px-2.5 rounded-lg hover:bg-sky-600/10 dark:hover:bg-sky-600/20 cursor-pointer mb-1"
              >
                <motion.p variants={itemA}>Components</motion.p>
              </motion.li>
              <motion.div
                variants={itemA}
                className=" w-full flex-none blur-[1px] h-px border-t border-slate-900/20 dark:border-gray-300 py-2"
              ></motion.div>
              <motion.li
                variants={itemA}
                onClick={() => window.open("/resources")}
                className="py-1.5 px-2.5 rounded-lg hover:bg-sky-600/10 dark:hover:bg-sky-600/20 cursor-pointer mb-4"
              >
                <motion.p variants={itemA}>Resources</motion.p>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
