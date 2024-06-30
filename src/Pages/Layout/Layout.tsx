import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const Layout: React.FC = () => {
  return (
      <main className="container max-auto">
        <Header />
        <Outlet />
      </main>
  );
};

export default Layout;
