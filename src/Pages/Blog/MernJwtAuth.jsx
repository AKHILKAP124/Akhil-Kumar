import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CheckCheck, Copy, MoveLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footor from "../../components/Footor";
import Contact from "../../components/Contact";

const MernJwtAuth = () => {
  const [copiedCode, setCopiedCode] = useState(null);

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
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <MoveLeft
          onClick={() => window.history.back()}
          className="size-8 mb-2
         text-gray-500 cursor-pointer"
        />
        {/* Blog Title */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-200 mb-4">
          🛡️ How to Add Authentication in MERN Using JWT
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
          <span>August 27, 2025</span>
          <span className="mx-2">•</span>
          <span>7 min read</span>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
          Learn how to implement secure JWT-based authentication in your MERN
          stack applications with this step-by-step guide.
        </p>
        <img
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*9pWUdYPAwCQoWdEnvZli4A.jpeg"
          alt="jwt"
          className="w-2/3 h-full object-cover rounded-lg mb-6 mx-auto
            "
        />

        {/* Section: What is JWT */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">🔰 What is JWT?</h2>
          <p className="mb-4">
            JWT (JSON Web Token) is a secure way of transmitting information
            between a client and server as a JSON object. It’s signed (so it
            can’t be tampered with) and contains payload data like user ID.
          </p>
          <p className="mb-4 text-xl font-medium">👉 Structure of a JWT:</p>
          <SyntaxHighlighter
            language={"json"}
            style={vscDarkPlus}
            className="rounded-2xl shadow-md p-4"
          >
            {`
            {
              header: {
                  "typ": "JWT",
                  "alg": "HS256"
                  },
                payload: {
                  "sub": "1234567890",
                  "name": "John Doe",
                  "admin": true
                  },
                  signature: "signature"
             }`}
          </SyntaxHighlighter>

          <div className="mt-4 flex justify-center">
            <div className="w-1/2 bg-gray-200 flex items-center justify-center rounded-lg shadow">
              <img
                src="https://supertokens.com/static/b0172cabbcd583dd4ed222bdb83fc51a/f058b/jwt-structure.png"
                alt="jwt structure"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Section: Backend Setup */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            ⚙️ Step 1: Set Up the Backend (Node.js + Express + MongoDB)
          </h2>
          <CodeBlock
            code={`mern-auth
cd mern-auth
npm init -y
npm install express mongoose bcryptjs jsonwebtoken cors dotenv`}
            language="bash"
            index={0}
          />
          <CodeBlock
            code={`const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));`}
            language="javascript"
            index={1}
          />
        </section>

        {/* Section: User Model */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            👤 Step 2: Create the User Model
          </h2>
          <CodeBlock
            code={`const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model("User", userSchema);`}
            language="javascript"
            index={2}
          />
        </section>

        {/* Section: Register */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            🔑 Step 3: User Registration (Signup)
          </h2>
          <CodeBlock
            code={`router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).send("Server error");
  }
});`}
            language="javascript"
            index={3}
          />
        </section>

        {/* Section: Login */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            🔓 Step 4: User Login + JWT Token
          </h2>
          <CodeBlock
            code={`router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).send("Server error");
  }
});`}
            language="javascript"
            index={4}
          />
        </section>

        {/* Section: Middleware */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            🛡️ Step 5: Middleware to Protect Routes
          </h2>
          <CodeBlock
            code={`function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}`}
            language="javascript"
            index={5}
          />
        </section>

        {/* Section: React Frontend */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            🎨 Step 6: Frontend (React) Integration
          </h2>
          <CodeBlock
            code={`import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 p-4 bg-white shadow rounded-lg">
      <input className="border rounded px-3 py-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input className="border rounded px-3 py-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit" className="bg-blue-600 text-white rounded py-2 hover:bg-blue-700">Login</button>
    </form>
  );
}

export default Login;`}
            language="javascript"
            index={6}
          />
        </section>

        {/* Section: Conclusion */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🎯 Conclusion</h2>
          <p className="mb-4">
            We set up authentication in MERN using JWT. Registration → Login →
            JWT Token → Protected Route. Frontend stores the token and uses it
            for API calls.
          </p>
          <p>
            JWT is lightweight, stateless, and widely used in modern apps. Now
            you can use this setup as a base for building secure applications
            like social media apps, dashboards, and e-commerce platforms.
          </p>
        </section>
      </div>
      <div className="px-4 ">
        <Contact />
        <Footor />
      </div>
    </div>
  );
};

export default MernJwtAuth;
