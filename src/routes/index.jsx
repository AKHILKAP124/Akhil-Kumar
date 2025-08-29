import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Projects from "../Pages/Projects";
import Blogs from "../Pages/Blogs";
import Components from "../Pages/Components";
import Resources from "../Pages/Resources";
import MernJwtAuth from "../Pages/Blog/MernJwtAuth";
import ChatAppUsingSocketio from "../Pages/Blog/ChatAppUsingSocketio";



export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blog",
    children: [
      {
        path: "/blog/mern-jwt-authentication",
        element: <MernJwtAuth />,
      },
      {
        path: "/blog/real-time-chat-app-using-socket-io",
        element: <ChatAppUsingSocketio />,
      },
    ],
  },
  {
    path: "/components",
    element: <Components />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
]);