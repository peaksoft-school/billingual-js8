import React from "react";
import { Link, Outlet } from "react-router-dom";
import AdminRoute from "./AdminRoute";

const AdminLayout = () => {
  return (
    <div>
      <Link to="test">test</Link>
      <Link to="submit">submit</Link>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
