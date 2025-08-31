// sitemap-generator.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

// Your website base URL
const hostname = "https://akhilkumar-in.vercel.app";

// List of routes in your React app
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/projects", changefreq: "weekly", priority: 0.8 },
  { url: "/blogs", changefreq: "weekly", priority: 0.8 },
  { url: "/components", changefreq: "weekly", priority: 0.8 },
  { url: "/resources", changefreq: "weekly", priority: 0.8 },
  {
    url: "/blog/mern-jwt-authentication",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/blog/real-time-chat-app-using-socket-io",
    changefreq: "weekly",
    priority: 0.8,
  },
];

// Generate sitemap
const stream = new SitemapStream({ hostname });

links.forEach((link) => stream.write(link));
stream.end();

streamToPromise(stream).then((sm) =>
  createWriteStream("./public/sitemap.xml").write(sm.toString())
);
