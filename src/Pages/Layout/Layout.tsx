import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const Layout: React.FC = () => {
  return (
    <main className="px-16 max-md:px-6">
      <Header />
      <div className="py-8">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
