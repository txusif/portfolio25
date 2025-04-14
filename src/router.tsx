import { createBrowserRouter } from "react-router";
import { AppLayout } from "./ui/AppLayout";
import {
  Home,
  Projects,
  Experience,
  Contact,
  About,
  Qualification,
} from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/qualification",
        element: <Qualification />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
