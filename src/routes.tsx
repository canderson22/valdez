import { createBrowserRouter } from "react-router-dom";
// Entry point
import App from "./App";
// Main Layouts
import { AdminLayout } from "./admin/Layout";
import { ConsumerLayout } from "./consumer/Layout";
// Pages
import { Home } from "./consumer/pages/Home";
import { ShopPage } from "./consumer/pages/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "admin",
        element: <AdminLayout />,
        children: [],
      },
      {
        path: "/",
        element: <ConsumerLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "shop", element: <ShopPage /> },
        ],
      },
    ],
  },
]);
