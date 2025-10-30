import React from "react";

export const BASE_URL = "https://akhilkumar.online";

const previewImage = React.lazy(() => import("../assets/preview.webp"));

export const defaultSEO = {
  title: "Akhil Kumar — Full Stack Developer",
  description:
    "Akhil Kumar is a Full Stack Developer specializing in MERN stack, building SaaS products, open-source tools, and sharing coding blogs.",
  keywords:
    "Akhil Kumar, Full Stack Developer, MERN Developer, SaaS Developer, Portfolio, JavaScript, React, Node, Web Development",
  image: previewImage,
  type: "website",
  author: "Akhil Kumar",
  twitterUsername: "@AkhilKumar_39",
};

export const pageSEO = {
  home: {
    title: "Akhil Kumar — Developer Portfolio",
    description:
      "Building SaaS products and web apps with React, Node, and MongoDB. Explore my work and blog for real-world full-stack projects.",
  },
  blogs: {
    title: "Blogs — Akhil Kumar",
    description:
      "Read technical blogs about MERN stack, authentication, and real-time web apps by Akhil Kumar.",
  },
  projects: {
    title: "Projects — Akhil Kumar",
    description:
      "A collection of full-stack projects and SaaS tools built by Akhil Kumar using MERN, Tailwind, and modern web tech.",
  },
  components: {
    title: "Components — Akhil Kumar",
    description:
      "A collection of reusable UI components built by Akhil Kumar using React, Tailwind, and modern web tech.",
    },
};

// Add SEO metadata for individual blog posts
export const blogSEO = [
  {
    slug: "real-time-chat-app-using-socket-io",
    title: "Real-Time Chat App using MERN & Socket.IO — Akhil Kumar",
    description:
      "Learn how to build a real-time chat application using MERN Stack and Socket.IO with live communication, authentication, and notifications.",
  },
  {
    slug: "mern-jwt-authentication",
    title: "MERN JWT Authentication — Secure Login Tutorial by Akhil Kumar",
    description:
      "A step-by-step guide to implementing secure JWT authentication in MERN stack applications. Includes backend setup and token verification.",
  },
];
