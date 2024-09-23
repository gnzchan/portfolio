import { createBrowserRouter } from "react-router-dom";

import { routes } from "@/lib/constants";

import { Layout } from "@/components/Layout.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes.map((route) => ({
      path: route.href,
      element: route.element,
    })),
  },
]);
