import React, { FunctionComponent } from "react";
import Navbar from "@/app/components/Navbar";

interface LayoutProps {
  readonly children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
