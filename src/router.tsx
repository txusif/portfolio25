import { createBrowserRouter } from "react-router";
import { AppLayout } from "./ui/AppLayout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Qualification } from "./pages/Qualification";

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
