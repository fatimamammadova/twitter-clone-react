import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Explore } from "../pages/Explore";
import { Notifications } from "../pages/Notifications";
import { NotFound } from "../pages/NotFound";
import { MainLayout } from "../layouts/main";
import { Profile } from "../pages/profile";
import { Lists } from "../pages/Lists";
import { Messages } from "../pages/Messages";
import { Communities } from "../pages/Communities";
import { Bookmarks } from "../pages/Bookmarks";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "communities",
        element: <Communities />,
      },
      {
        path: ":username",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
