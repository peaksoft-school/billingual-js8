import React from "react";
import { useRoutes } from "react-router-dom";
import Admin from "../../components/Admin";
import Test from "./Test";

const AdminRoute = () => {
  const routes = useRoutes([
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/admin/:id",
      element: <Test />,
    },
  ]);

  return routes;
};

export default AdminRoute;
