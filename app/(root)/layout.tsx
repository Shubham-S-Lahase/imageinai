import MobileNav from "@/components/shared/mobileNav";
import Sidebar from "@/components/shared/sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <div className="root-container">
        <Sidebar/>
        <MobileNav/>
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
