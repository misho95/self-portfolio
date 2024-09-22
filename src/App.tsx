import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import AboutPage from "./pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: "home",
      },
      {
        path: "/about",
        element: <AboutPage />,
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
