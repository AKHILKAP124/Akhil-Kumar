import React, { useState } from "react";
import { Copy, CheckCheck, MoveLeft } from "lucide-react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footor from "../../components/Footor";
import { Helmet } from "react-helmet";
import Alert from "./component/AlertPreview";

const AlertBlog = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-[#18181b] dark:text-gray-200">
      <Helmet>
        <title>
          Component - How to Create an Alert Component in React with Tailwind
          CSS
        </title>
        <meta
          name="description"
          content="Alerts are a simple way to provide feedback messages like success,
          warnings, or errors. In this tutorial, we’ll create a reusable Alert
          component using React and Tailwind CSS."
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
          How to Create an Alert Component in React with Tailwind CSS
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
          <span>September 1, 2025</span>
          <span className="mx-2">•</span>
          <span>3 min read</span>
        </div>

        <p className="mb-4">
          Alerts are a simple way to provide feedback messages like success,
          warnings, or errors. In this tutorial, we’ll create a reusable Alert
          component using <strong>React</strong> and{" "}
          <strong>Tailwind CSS</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🚀 Step 1: Create Alert Component
        </h2>
        <p>
          Create a new file:{" "}
          <span className="font-medium text-sm bg-gray-300/50 dark:bg-gray-600/50 px-0.5 py-1 rounded">
            Alert.js
          </span>{" "}
          inside{" "}
          <span className="font-medium text-sm bg-gray-300/50 dark:bg-gray-600/50 px-0.5 py-1 rounded">
            src/components/
          </span>{" "}
          and add the following code: .
        </p>
        <CodeBlock
          code={`
  const Alert = ({ type = "info", message }) => {
  const baseStyle =
    "flex items-center justify-between p-4 mb-4 rounded-lg border shadow-sm";
  const typeStyles = {
    success: "bg-green-50 text-green-800 border-green-300",
    error: "bg-red-50 text-red-800 border-red-300",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-300",
    info: "bg-blue-50 text-blue-800 border-blue-300",
  };

  return (
    <div className={\`\${baseStyle} \${typeStyles[type]}\`}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
`}
          language={"javascript"}
          index={1}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🎯 Step 2: Use Alert Component
        </h2>
        <CodeBlock
          code={`import Alert from "./components/Alert";

export default function App() {
  return (
    <div className="p-6">
      <Alert type="success" message="✅ Action completed successfully!" />
      <Alert type="error" message="❌ Something went wrong!" />
      <Alert type="warning" message="⚠️ Be careful with this action." />
      <Alert type="info" message="ℹ️ This is an informational alert." />
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
            <Alert type="success" message="✅ Action completed successfully!" />
            <Alert type="error" message="❌ Something went wrong!" />
            <Alert type="warning" message="⚠️ Be careful with this action." />
            <Alert type="info" message="ℹ️ This is an informational alert." />
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

export default AlertBlog;
