import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";

const Layout = ({ children }) => {
  const [menuState, setMenuState] = useState(false);

  return (
    <div className="app">
      <Header setMenuState={setMenuState} />
      <Menu menuState={menuState} setMenuState={setMenuState} />
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
