import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Projects from "../Pages/Projects";
import Blogs from "../Pages/Blogs";
import Components from "../Pages/Components";
import Resources from "../Pages/Resources";
import MernJwtAuth from "../Pages/Blog/MernJwtAuth";
import ChatAppUsingSocketio from "../Pages/Blog/ChatAppUsingSocketio";
import Accordion from "../Pages/ComponentPage/Accordion";
import AlertBlog from "../Pages/ComponentPage/Alert";
import AvatarBlog from "../Pages/ComponentPage/Avatar";



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
    path: "/component",
    children: [
      {
        path: "/component/accordion",
        element: <Accordion />,
      },
      {
        path: "/component/alert",
        element: <AlertBlog />,
      },
      {
        path: "/component/avatar",
        element: <AvatarBlog />,
      }
    ],
  },
  {
    path: "/resources",
    element: <Resources />,
  },
]);