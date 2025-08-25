// App.jsx
import React from "react";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#212121] text-gray-900 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-3xl mx-auto flex flex-col-reverse md:flex-row justify-between md:items-center py-12 px-6">
        <div className="space-y-4 max-w-xl">
          <h1 className="text-4xl font-bold">Akhil Kumar</h1>
          <p className="text-sm lg:text-lg">
            Building{" "}
            <span className="bg-gray-200 rounded px-2 py-0.5">Aceternity</span>,{" "}
            <span className="bg-gray-200 rounded px-2 py-0.5">Rogue</span> and
            other <span className="font-semibold">cool things</span>
          </p>
          <p className="text-gray-600">
            Senior Software Engineer building SaaS products and web apps. Find
            me on{" "}
            <a href="https://x.com/AkhilKumar_39" target="_blank" className="text-blue-600 hover:underline font-medium">
              twitter
            </a>{" "}
            for tech updates and memes.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            src="https://i.ibb.co/vvvNf99Q/IMG-20250702-174551-777.jpg"
            alt="Akhil Kumar"
            className="size-22 md:size-32 rounded-xl object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Recent Blogs</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 cursor-pointer">
            <p>
              Ace the Javascript Interview - Practical questions to help you
              clear your next interview
            </p>
            <span className="text-gray-500 text-sm">17,991 views</span>
          </div>
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 cursor-pointer">
            <p>Free portfolio website template that gets you hired in 2021</p>
            <span className="text-gray-500 text-sm">6,123 views</span>
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="text-gray-600 text-sm hover:underline">
            See All Blogs ▼
          </button>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">✏️</div>
            <h3 className="font-semibold text-lg">Moonbeam</h3>
            <p className="text-gray-600 text-sm mt-2">
              Never write from scratch again. Kickstart your next great writing
              piece with Moonbeam.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">{">"}</div>
            <h3 className="font-semibold text-lg">Aceternity</h3>
            <p className="text-gray-600 text-sm mt-2">
              Building modern applications that scale well and are easy to
              maintain. Cutting-edge web solutions for startups.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">{">"}</div>
            <h3 className="font-semibold text-lg">Aceternity</h3>
            <p className="text-gray-600 text-sm mt-2">
              Building modern applications that scale well and are easy to
              maintain. Cutting-edge web solutions for startups.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">{">"}</div>
            <h3 className="font-semibold text-lg">Aceternity</h3>
            <p className="text-gray-600 text-sm mt-2">
              Building modern applications that scale well and are easy to
              maintain. Cutting-edge web solutions for startups.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
