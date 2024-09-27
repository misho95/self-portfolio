import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import LandingPage from "./pages/landing-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/projects",
        element: "projects",
      },
      {
        path: "/contact",
        element: "contact",
      },
    ],
  },
  {
    path: "*",
    element: "error 404",
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
