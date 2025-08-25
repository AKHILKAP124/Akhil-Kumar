import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { NavLink } from 'react-router-dom';

const NavbarLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog'},
    { name: 'Snippets', href: '/snippets'},
    { name: 'Resources', href: '/resources'},
  ];


const Navbar = () => {

    const [theme, setTheme] = React.useState('light');

    const storedTheme = localStorage.getItem('theme');

    React.useEffect(() => {
        if (storedTheme) {
          setTheme(storedTheme);
          if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
          }
        }
      }, [storedTheme]);


    const toggleTheme = () => {
      if (theme === 'dark') {
          setTheme('light');
          localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
      } else {
          setTheme('dark');
            localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
      }
    };

  return (
    <header className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4 sticky top-0 backdrop-blur-2xl z-50">
          <button
        onClick={toggleTheme}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 cursor-pointer">
              {
                  theme === 'dark' ? (
          <Sun className="w-5 h-5 text-gray-600" />
        ) : (
          <Moon className="w-5 h-5 text-gray-600" />
        )
        }
      </button>
      <nav className="flex space-x-6 bg-white dark:bg-transparent px-6 py-2 rounded-full shadow-md text-sm font-medium">
        {NavbarLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar