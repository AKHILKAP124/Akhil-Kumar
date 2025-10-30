import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Blogs from "./Pages/Blogs";
import Components from "./Pages/Components";
import Resources from "./Pages/Resources";
import MernJwtAuth from "./Pages/Blog/MernJwtAuth";
import ChatAppUsingSocketio from "./Pages/Blog/ChatAppUsingSocketio";
import Accordion from "./Pages/ComponentPage/Accordion";
import AlertBlog from "./Pages/ComponentPage/Alert";
import AvatarBlog from "./Pages/ComponentPage/Avatar";

const Loader = React.lazy(() => import("./components/SkeletonLoader"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog">
              <Route path="mern-jwt-authentication" element={<MernJwtAuth />} />
              <Route
                path="real-time-chat-app-using-socket-io"
                element={<ChatAppUsingSocketio />}
              />
            </Route>
            <Route path="/components" element={<Components />} />
            <Route path="/component">
              <Route path="accordion" element={<Accordion />} />
              <Route path="alert" element={<AlertBlog />} />
              <Route path="avatar" element={<AvatarBlog />} />
            </Route>
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
