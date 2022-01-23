import React, { useState } from "react";
import useMousePosition from "../hook/useMousePosition";
import Header from "./Header";
import Menu from "./Menu";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const [menuState, setMenuState] = useState(false);
  const [cursorHovered, setCursorHovered] = useState(false);
  const { x, y } = useMousePosition();

  return (
    <div className="app">
      <motion.div
        animate={{
          x: x - 16,
          y: y - 16,
          scale: cursorHovered ? 1.2 : 1,
          opacity: cursorHovered ? 0.8 : 0,
        }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        className="cursor"></motion.div>
      <Header setCursorHovered={setCursorHovered} setMenuState={setMenuState} />
      <Menu setCursorHovered={setCursorHovered} x={x} y={y} menuState={menuState} setMenuState={setMenuState} />
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
