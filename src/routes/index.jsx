import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Explore } from "../pages/Explore";
import { Notification } from "../pages/Notification";
import { NotFound } from "../pages/NotFound";
import { MainLayout } from "../layouts/main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
          path: "/explore",
          element: <Explore />,
        },
        {
          path: "/notification",
          element: <Notification />,
        }
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
