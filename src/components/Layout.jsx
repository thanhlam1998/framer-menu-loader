import React from "react";
import Header from "./Header";
import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <Menu />
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
