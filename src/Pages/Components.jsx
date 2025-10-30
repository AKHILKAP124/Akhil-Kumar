import React from "react";
import { pageSEO } from "../seo/SEOConfig";

const SEO = React.lazy(() => import("../components/SEO"));
const Navbar = React.lazy(() => import("../components/Navbar"));
const Contact = React.lazy(() => import("../components/Contact"));
const Footor = React.lazy(() => import("../components/Footor"));
const ComponentCard = React.lazy(() => import("../components/ComponentCard"));


const Components = () => {
  const components = [
    {
      title: "Accordion",
      description: "A simple Accordion Component",
      logo: "react.svg",
      link: "/component/accordion",
    },
    {
      title: "Alert",
      description: "A simple Alert Component",
      logo: "react.svg",
      link: "/component/alert",
    },
    {
      title: "Avatar",
      description: "A simple Avatar Component",
      logo: "react.svg",
      link: "/component/avatar",
    },
    // {
    //   title: "Badge",
    //   description: "A simple Badge Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Button",
    //   description: "A simple Button Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Card",
    //   description: "A simple Card Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Checkbox",
    //   description: "A simple Checkbox Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Dialog",
    //   description: "A simple Dialog Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Dropdown",
    //   description: "A simple Dropdown Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Footer",
    //   description: "A simple Footer Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Form",
    //   description: "A simple Form Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Input",
    //   description: "A simple Input Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Modal",
    //   description: "A simple Modal Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Navbar",
    //   description: "A simple Navbar Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Pagination",
    //   description: "A simple Pagination Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Rating",
    //   description: "A simple Rating Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Select",
    //   description: "A simple Select Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Sidebar",
    //   description: "A simple Sidebar Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Switch",
    //   description: "A simple Switch Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Table",
    //   description: "A simple Table Component",
    //   logo: "react.png",
    // },
    // {
    //   title: "Tabs",
    //   description: "A simple Tabs Component",
    //   logo: "react.png",
    // },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#18181b] text-gray-900">
      {/* SEO */}
      <SEO {...pageSEO.components} />

      {/* Navbar */}
      <Navbar />
      <div className="max-w-2xl mx-auto py-12 px-6 lg:px-0 ">
        <h1 className="text-5xl font-bold dark:text-gray-200 mb-1">
          Components
        </h1>
        <p className="text-[15px] dark:text-[#949498] mt-4">
          A collection of reusable, customizable, and scalable UI elements. Each
          component is built with React and TailwindCSS, making integration
          seamless. Use them to speed up development while keeping your design
          consistent.
        </p>

        {/* Components  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {components.map((component, index) => (
            <ComponentCard
              key={index}
              title={component.title}
              description={component.description}
              logo={component.logo}
              link={component.link}
            />
          ))}
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

export default Components;
