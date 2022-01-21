import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
