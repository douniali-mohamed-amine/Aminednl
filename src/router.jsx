import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Dossier from "./pages/Dossier";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dossiers",
        element: <Dossier />,
      },
      {
        path: "/employés",
        element: <Dossier />,
      },
      {
        path: "/reporting",
        element: <Dossier />,
      },
      {
        path: "/calendrier",
        element: <Dossier />,
      },
      {
        path: "/performance",
        element: <Dossier />,
      },
    ],
  },
]);
