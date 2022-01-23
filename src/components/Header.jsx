import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ setMenuState, setCursorHovered }) => {
  const location = useLocation();

  useEffect(() => {
    setMenuState(false);
  }, [location]);

  return (
    <header>
      <div className="container fluid">
        <div className="header-inner">
          <Link to="/">Pocket.</Link>
          <div
            onClick={() => setMenuState((prev) => !prev)}
            className="hamburger-menu"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}>
            <span />
            <span />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
