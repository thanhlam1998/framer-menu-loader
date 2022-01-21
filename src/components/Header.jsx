import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container fluid">
        <div className="header-inner">
          <Link to="/">Pocket.</Link>
          <div className="hamburger-menu">
            <span />
            <span />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
