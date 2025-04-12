import { RouterProvider } from "react-router";
import AppContext from "./context/AppContext";
import { router } from "./router";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <AppContext>
      <RouterProvider router={router} />
      <Analytics />
    </AppContext>
  );
}
