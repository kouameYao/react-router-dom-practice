import { createBrowserRouter } from "react-router-dom";

import Wrapper from "../App";
import { Menu } from "../pages/Menu";
import { About } from "../pages/About";
import { Reservation } from "../pages/Reservation";
import { ContactUs } from "../pages/ContactUs";
import { Home } from "../pages/Home";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/a-propos",
        element: <About />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/contactez-nous",
        element: <ContactUs />,
      },
    ],
  },
]);
