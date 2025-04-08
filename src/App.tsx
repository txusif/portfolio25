import { RouterProvider } from "react-router";
import AppContext from "./context/AppContext";
import { router } from "./router";

export default function App() {
  return (
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  );
}
