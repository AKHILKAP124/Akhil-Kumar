import React, { useState } from "react";
import { Copy, CheckCheck, MoveLeft } from "lucide-react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footor from "../../components/Footor";
import { Helmet } from "react-helmet";

const ChatAppUsingSocketio = () => {
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
        <title>Blog - Real-Time Chat App with MERN and Socket.IO</title>
        <meta
          name="description"
          content="Building a real-time chat application is one of the best ways to learn
          how WebSockets work. In this tutorial, we’ll build a chat app using
          MERN (MongoDB, Express, React, Node.js) and Socket.IO."
        />
        <meta name="keywords" content=" Akhil Kumar, Akhil Kapoor, Akhil portfolio, Blogs, Programming, Web Development, web developer portfolio, web developer blog, real time chat app, socket io, mern, mongodb, express, react, node.js, how to build a chat app using mern and socket.io" />
      </Helmet>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mb-26">
        <MoveLeft
          onClick={() => window.history.back()}
          className="size-8 mb-2 mt-4
         text-gray-500 cursor-pointer"
        />
        <h1 className="text-4xl font-bold mb-4">
          Real-Time Chat App with MERN and Socket.IO 🚀
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
          <span>August 28, 2025</span>
          <span className="mx-2">•</span>
          <span>9 min read</span>
        </div>

        <p className="mb-4">
          Building a real-time chat application is one of the best ways to learn
          how WebSockets work. In this tutorial, we’ll build a chat app using{" "}
          <b>MERN (MongoDB, Express, React, Node.js)</b> and <b>Socket.IO</b>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🖼️ Architecture of Real-Time Chat App
        </h2>
        <img
          src="https://i.ibb.co/twYBqsSZ/Mirror-Fly-Chat-App-System-02-1.webp"
          alt="Chat App Architecture"
          className="rounded-xl shadow-lg mx-auto my-8"
        />
        <ul className="list-disc pl-6 mb-6">
          <li>The client (React) connects to the server (Express/Node).</li>
          <li>Users send messages which are emitted to the server.</li>
          <li>The server broadcasts them to all connected clients.</li>
          <li>MongoDB stores chat history for persistence.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          ⚡ Step 1: Install Dependencies
        </h2>
        <CodeBlock
          code={`npm install express mongoose socket.io cors dotenv
npm install react react-dom socket.io-client`}
          language={"bash"}
          index={0}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          ⚡ Step 2: Backend Setup (Node + Express + Socket.IO)
        </h2>
        <CodeBlock
          code={`import express from "express";
import http from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("sendMessage", (message) => {
    io.emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(5000, () => console.log("Server running on port 5000"));`}
          language={"javascript"}
          index={1}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          ⚡ Step 3: MongoDB Model for Messages
        </h2>
        <CodeBlock
          code={`import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  user: String,
  text: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("Message", messageSchema);`}
          language={"javascript"}
          index={2}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          ⚡ Step 4: Frontend (React + Socket.IO Client)
        </h2>
        <CodeBlock
          code={`import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function ChatApp() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      setChat([...chat, msg]);
    });
  }, [chat]);

  const sendMessage = () => {
    socket.emit("sendMessage", message);
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">💬 Real-Time Chat</h1>
      <div className="w-96 h-80 border rounded p-4 overflow-y-auto mb-4">
        {chat.map((msg, index) => (
          <div key={index} className="p-2 bg-gray-200 rounded my-1">
            {msg}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 rounded w-72"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatApp;`}
          language={"javascript"}
          index={3}
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">🖼️ UI Example</h2>
        <img
          src="https://i.ibb.co/gM948ZHG/Screenshot-2025-08-28-212002.png"
          alt="Chat UI Example"
          className="rounded-xl shadow-lg mx-auto my-8"
        />

        <h2 className="text-2xl font-semibold mt-8 mb-4">✅ Final Notes</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            We used <b>Socket.IO</b> for real-time communication.
          </li>
          <li>
            Messages are stored in <b>MongoDB</b> for persistence.
          </li>
          <li>
            React handles the <b>frontend UI</b> and real-time events.
          </li>
        </ul>
        <p className="text-lg font-semibold">
          🎉 Congrats! You’ve built a Real-Time Chat App using MERN + Socket.IO.
        </p>
      </div>
      <div className="px-4 ">
        <Contact />
        <Footor />
      </div>
    </div>
  );
};

export default ChatAppUsingSocketio;
