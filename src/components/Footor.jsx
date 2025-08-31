import React from 'react'
import { Link } from 'react-router-dom'
import { links, socialLinks } from '../constants/footer'
import { Linkedin, Twitter } from 'lucide-react';

const Footor = () => {
  return (
    <div className="max-w-2xl mx-auto min-h-72 dark:text-gray-200 py-10">
      <div className="w-full blur-[1px] border-t border-gray-400"></div>
      <div className="w-full grid grid-cols-2 gap-4 p-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold dark:text-gray-200">Links</h1>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.herf}
              className="text-gray-600 dark:text-gray-200/60 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer "
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold dark:text-gray-200">Socials</h1>
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              to={link.herf}
              className="text-gray-600 dark:text-gray-200/60 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer "
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start mt-10 text-sm text-gray-600 dark:text-gray-200/60">
        <p className=" flex gap-1">
          Find me on{" "}
          <a href="">
            <Twitter className="text-sky-600" />
          </a>{" "}
          and{" "}
          <a href="">
            <Linkedin className="text-sky-600" />
          </a>
        </p>
        <p className=" flex gap-1">
          Portfolio inspired by{" "}
          <a href="https://manuarora.in/" target="_blank">
            manu arora
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footor