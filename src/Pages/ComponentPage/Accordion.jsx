import React, { useState } from "react";
import { Copy, CheckCheck, MoveLeft } from "lucide-react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footor from "../../components/Footor";
import { Helmet } from "react-helmet";
import AccordionPreview from "./component/AccordionPreview";

const Accordion = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  const CodeBlock = ({ code, language, index }) => (
    <div className="relative my-6">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        className="rounded-2xl shadow-md p-8"
      >
        {code}
      </SyntaxHighlighter>
      <button
        onClick={() => handleCopy(code, index)}
        className={`absolute top-2 right-2 bg-gray-200/10 dark:bg-gray-500/10 px-2 py-1 text-xs text-white dark:text-gray-200/80 rounded flex items-center gap-1 ${
          copiedCode ? "cursor-not-allowed" : " cursor-pointer"
        }`}
      >
        {copiedCode === index ? (
          <>
            <CheckCheck className="w-4 h-4" />
            copied
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            copy
          </>
        )}{" "}
      </button>
    </div>
    );
    
    const accordionItems = [
      {
        title: "What is React?",
        content:
          "React is a JavaScript library for building user interfaces, developed by Facebook.",
      },
      {
        title: "What is Tailwind CSS?",
        content:
          "Tailwind CSS is a utility-first CSS framework that makes styling faster and more consistent.",
      },
      {
        title: "What is an Accordion?",
        content:
          "An accordion is a UI component that allows users to expand and collapse sections of content.",
      },
    ];

    

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-[#18181b] dark:text-gray-200">
      <Helmet>
        <title>
          Component - Accordion Component in React with Tailwind CSS
        </title>
        <meta
          name="description"
          content="Building a real-time chat application is one of the best ways to learn
          how WebSockets work. In this tutorial, we’ll build a chat app using
          MERN (MongoDB, Express, React, Node.js) and Socket.IO."
        />
        <meta
          name="keywords"
          content=" Akhil Kumar, Akhil Kapoor, Akhil portfolio, Blogs, Programming, Web Development, web developer portfolio, web developer blog, real time chat app, socket io, mern, mongodb, express, react, node.js, how to build a chat app using mern and socket.io"
        />
      </Helmet>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mb-26">
        <MoveLeft
          onClick={() => window.history.back()}
          className="size-8 mb-2 mt-4
         text-gray-500 cursor-pointer"
        />
        <h1 className="text-4xl font-bold mb-4">
          Accordion Component in React with Tailwind CSS
        </h1>
        <div className="flex items-center mb-4 text-sm dark:text-gray-200/50">
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/vvvNf99Q/IMG-20250702-174551-777.jpg"
              alt="Akhil Kuamr"
              className="w-5 h-5 rounded-full mr-2"
            />{" "}
            <span>Akhil Kuamr</span>
          </div>
          <span className="mx-1">/</span>
          <span>August 31, 2025</span>
          <span className="mx-2">•</span>
          <span>3 min read</span>
        </div>

        <p className="mb-4">
          Accordions are a great way to display information in collapsible
          sections, making your UI clean and user-friendly. In this tutorial,
          we’ll build a simple <b>Accordion</b> Component using{" "}
          <b> React JS and Tailwind CSS</b>, and show you how to integrate it
          into your project.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          ⚡ Step 1: Create Accordion Component
        </h2>
        <p>
          Create a new file:{" "}
          <span className="font-medium text-sm bg-gray-300/50 dark:bg-gray-600/50 px-0.5 py-1 rounded">
            Accordion.js
          </span>{" "}
          inside{" "}
          <span className="font-medium text-sm bg-gray-300/50 dark:bg-gray-600/50 px-0.5 py-1 rounded">
            src/components/
          </span>
          .
        </p>
        <CodeBlock
          code={`
  import { useState } from "react";

  const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          {/* Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-100 transition"
          >
            {item.title}
            <span className="ml-2">{openIndex === index ? "−" : "+"}</span>
          </button>

          {/* Content */}
          <div
            className={\`overflow-hidden transition-all duration-300 \${
              openIndex === index ? "max-h-40 p-4" : "max-h-0"
            }\`}
          >
            <p className="text-gray-600">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
`}
          language={"javascript"}
          index={1}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          ⚡ Step 2: Use Accordion in App.js
        </h2>
        <CodeBlock
          code={`import Accordion from "./components/Accordion";

export default function App() {
  const accordionItems = [
    {
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces, developed by Facebook.",
    },
    {
      title: "What is Tailwind CSS?",
      content:
        "Tailwind CSS is a utility-first CSS framework that makes styling faster and more consistent.",
    },
    {
      title: "What is an Accordion?",
      content:
        "An accordion is a UI component that allows users to expand and collapse sections of content.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Accordion items={accordionItems} />
    </div>
  );
}
`}
          language={"javascript"}
          index={2}
        />

        {/* Demo Accordion Inline */}
        <div className="mt-8  p-4 my-10">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Live Demo:
          </h3>
          <div className="mb-6">
            <AccordionPreview items={accordionItems} />
          </div>
        </div>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          ✅ Final Thoughts
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          You’ve successfully created an Accordion Component using React and
          Tailwind CSS. This component is reusable and can be extended further
          by adding animations, icons, or nested sections.
        </p>
      </div>
      <div className="px-4 ">
        <Contact />
        <Footor />
      </div>
    </div>
  );
};

export default Accordion;
