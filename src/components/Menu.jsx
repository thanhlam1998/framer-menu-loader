// @ts-nocheck
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Close } from "../icons/icons";
import { products } from "../data/products";

// Transition
const transition = { duration: 0.8, ease: [0.6, 0, 0.01, 0.9] };

// Variants
const parent = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
};

const titleSlideUp = {
  initial: {
    y: 200,
  },
  animate: {
    y: 0,
  },
};

const maskAnimation = {
  initial: { width: "100%" },
  animate: { width: 0 },
};

const Menu = ({ menuState, setMenuState }) => {
  return (
    <AnimatePresence>
      {menuState && (
        <>
          <motion.div
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible", transition: { delay: 1 } }}
            exit={{ visibility: "hidden", transition: { delay: 1 } }}
            className="products">
            <div className="menu-title">Products</div>
            <div onClick={() => setMenuState(false)} className="close">
              <Close />
            </div>
            <div className="menu">
              <div className="container">
                <div className="menu-inner">
                  <motion.ul variants={parent} initial="initial" animate="animate" exit="exit">
                    {products.map((list, index) => (
                      <List
                        key={index}
                        id={list.id}
                        title={list.title}
                        src={list.src}
                        leftLineFlex={list.leftLineFlex}
                        rightLineFlex={list.rightLineFlex}
                        thumbnailPosition={list.thumbnailPosition}
                      />
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>
          </motion.div>
          <Panels />
        </>
      )}
    </AnimatePresence>
  );
};

const List = ({ id, title, src, leftLineFlex, rightLineFlex, thumbnailPosition }) => {
  return (
    <li>
      <Link to={`/product/${id}`}>
        <div className="wrapper">
          <div className={`line left flex-${leftLineFlex}`}>
            <motion.div variants={maskAnimation} transition={{ ...transition, duration: 1 }} className="mask"></motion.div>
          </div>
          <div className="title">
            <h2>
              <motion.div variants={titleSlideUp} transition={transition} className="text">
                {title}
              </motion.div>
            </h2>
          </div>
          <div className="thumbnail" style={{ left: thumbnailPosition }}>
            <img src={src} alt={title} />
            <motion.div variants={maskAnimation} transition={{ ...transition, duration: 1 }} className="mask"></motion.div>
          </div>
          <div className="floating-image">
            <img src={src} alt={title} />
          </div>
          <div className={`line right flex-${rightLineFlex}`}>
            <motion.div variants={maskAnimation} transition={{ ...transition, duration: 1 }} className="mask right"></motion.div>
          </div>
        </div>
      </Link>
    </li>
  );
};

const Panels = () => {
  const [panelComplete, setPanelComplete] = useState(false);

  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
        exit={{ height: [0, window.innerHeight, 0], top: [null, 0, 0] }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className="left-panel-background"
        style={{ background: panelComplete ? "#e7e7de" : "#e7dee7" }}
      />
      <motion.div
        style={{ background: panelComplete ? "#e7e7de" : "#e7dee7" }}
        initial={{ height: 0 }}
        animate={{ height: [0, window.innerHeight, 0], bottom: [0, 0, window.innerHeight] }}
        exit={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className="right-panel-background"
        onAnimationComplete={() => {
          setPanelComplete(!panelComplete);
        }}
      />
    </>
  );
};

export default Menu;
