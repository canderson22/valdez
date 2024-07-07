import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      {/* admin navbar goes here */}
      <Outlet />
    </div>
  );
};

export { AdminLayout };
