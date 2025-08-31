import React, { useState } from "react";
import { Copy, CheckCheck, MoveLeft } from "lucide-react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footor from "../../components/Footor";
import { Helmet } from "react-helmet";
import Alert from "./component/AlertPreview";
import Avatar from "./component/AvatarPreview";
import AvatarGroup from "./component/AvatarGroupPreview";

const AvatarBlog = () => {
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
    
    const users = [
      { src: "https://i.pravatar.cc/150?img=3", name: "User 1" },
      { src: "https://i.pravatar.cc/150?img=5", name: "User 2" },
      { src: "https://i.pravatar.cc/150?img=8", name: "User 3" },
      { src: "https://i.pravatar.cc/150?img=10", name: "User 4" },
      { src: "https://i.pravatar.cc/150?img=12", name: "User 5" },
    ];


  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-[#18181b] dark:text-gray-200">
      <Helmet>
        <title>
          Component - How to Create Avatar & Avatar Group in React with Tailwind
          CSS
        </title>
        <meta
          name="description"
          content="Avatars are commonly used to display profile images or user initials.
          In this tutorial, we’ll build a reusable Avatar Component and extend it with an Avatar Group to show multiple users together."
        />
        <meta
          name="keywords"
          content=" Akhil Kumar, Akhil Kapoor, Akhil portfolio, Blogs, Programming, Web Development, web developer portfolio, web developer blog, how to create Avatar and Avatar Group in react js and tailwind css, how to create Avatar Group in react js and tailwind css, how to create Avatar in react js and tailwind css, how to create Avatar Component in react js and tailwind css"
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
          How to Create Avatar & Avatar Group in React with Tailwind CSS
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
          Avatars are commonly used to display profile images or user initials.
          In this tutorial, we’ll build a reusable{" "}
          <strong>Avatar Component</strong> and extend it with an{" "}
          <strong>Avatar Group</strong> to show multiple users together.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🚀 Step 1: Create Avatar Component
        </h2>
        <p>
          Create a new file:{" "}
          <span className="font-medium text-sm bg-gray-300/50 dark:bg-gray-600/50 px-0.5 py-1 rounded">
            Avatar.jsx
          </span>{" "}
          inside{" "}
          <span className="font-medium text-sm bg-gray-300/50 dark:bg-gray-600/50 px-0.5 py-1 rounded">
            src/components/
          </span>{" "}
          and add the following code: .
        </p>
        <CodeBlock
          code={`
  const Avatar = ({ src, alt, size = "md", name }) => {
  const sizes = {
    sm: "w-10 h-10 text-sm",
    md: "w-14 h-14 text-base",
    lg: "w-20 h-20 text-lg",
  };

  return (
    <div className={\`flex items-center justify-center rounded-full bg-gray-200 overflow-hidden \${sizes[size]}\`}>
      {src ? (
        <img src={src} alt={alt} className="object-cover w-full h-full" />
      ) : (
        <span className="text-gray-600 font-semibold">
          {name ? name.charAt(0).toUpperCase() : "?"}
        </span>
      )}
    </div>
  );
};

export default Avatar;
`}
          language={"javascript"}
          index={1}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🎯 Step 2: Now create Avatar Group Component.
        </h2>
        <p>
          Create a another file:{" "}
          <span className="font-medium text-sm bg-gray-300/50 dark:bg-gray-600/50 px-0.5 py-1 rounded">
            AvatarGroup.jsx
          </span>{" "}
          inside{" "}
          <span className="font-medium text-sm bg-gray-300/50 dark:bg-gray-600/50 px-0.5 py-1 rounded">
            src/components/
          </span>{" "}
          and add the following code: .
        </p>
        <CodeBlock
          code={`const AvatarGroup = ({ users, size = "md", max = 3 }) => {
  const displayUsers = users.slice(0, max);
  const remaining = users.length - max;

  return (
    <div className="flex -space-x-4">
      {displayUsers.map((user, idx) => (
        <div key={idx} className="border-2 border-white rounded-full">
          <Avatar src={user.src} name={user.name} size={size} />
        </div>
      ))}
      {remaining > 0 && (
        <div
          className={\`flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-semibold border-2 border-white \${
            size === "sm"
              ? "w-10 h-10 text-sm"
              : size === "lg"
              ? "w-20 h-20 text-lg"
              : "w-14 h-14 text-base"
          }\`}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
`}
          language={"javascript"}
          index={2}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🎯 Step 3: Use of Avatar Component.
        </h2>

        <CodeBlock
          code={`
  import Avatar from "./component/Avatar";                     

  const UseAvatar = () => {

  return (
    <div className="flex gap-20 flex-col md:flex-row mb-6">
        <div className="flex space-x-4">
            <Avatar
                src="https://i.pravatar.cc/150?img=3"
                name="User 1"
                size="sm"
            />
            <Avatar
                src="https://i.pravatar.cc/150?img=5"
                name="User 2"
                size="md"
            />
            <Avatar name="Alice" size="lg" />
        </div>
    </div>
  )};

  export default UseAvatar;
`}
          language={"javascript"}
          index={2}
        />

        {/* Demo Accordion Inline */}
        <div className=" p-4 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Live Demo:
          </h3>
          <div className="flex gap-20 flex-col md:flex-row mb-6">
            <div className="flex space-x-4">
              <Avatar
                src="https://i.pravatar.cc/150?img=3"
                name="User 1"
                size="sm"
              />
              <Avatar
                src="https://i.pravatar.cc/150?img=5"
                name="User 2"
                size="md"
              />
              <Avatar name="Alice" size="lg" />
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🎯 Step 3: Use of AvatarGroup Component.
        </h2>

        <CodeBlock
          code={`
  import AvatarGroup from "./component/AvatarGroup";                     

  const UseAvatarGroup = () => {

    const users = [
      { src: "https://i.pravatar.cc/150?img=3", name: "User 1" },
      { src: "https://i.pravatar.cc/150?img=5", name: "User 2" },
      { src: "https://i.pravatar.cc/150?img=8", name: "User 3" },
      { src: "https://i.pravatar.cc/150?img=10", name: "User 4" },
      { src: "https://i.pravatar.cc/150?img=12", name: "User 5" },
    ];

  return (
    <div className="flex gap-20 flex-col md:flex-row mb-6">
        <div className="flex space-x-4">
            <AvatarGroup users={users} size="md" max={2} />
            <AvatarGroup users={users} size="md" max={3} />
        </div>
    </div>
  )};

  export default UseAvatarGroup;
`}
          language={"javascript"}
          index={2}
        />

        {/* Demo Accordion Inline */}
        <div className=" p-4 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Live Demo:
          </h3>
          <div className="flex gap-20 flex-col md:flex-row mb-6">
            <div className="flex space-x-4">
              <AvatarGroup users={users} size="md" max={2} />
              <AvatarGroup users={users} size="md" max={3} />
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          ✅ Final Thoughts
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          You now have a reusable <strong>Avatar Component</strong> and{" "}
          <strong>Avatar Group</strong>. The group automatically shows a
          <em> “+X”</em> indicator when there are more users than the maximum
          displayed. You can extend this by adding status indicators, tooltips,
          or click actions.
        </p>
      </div>
      <div className="px-4 ">
        <Contact />
        <Footor />
      </div>
    </div>
  );
};

export default AvatarBlog;
