// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";

import { Close } from "../icons/icons";
import { products } from "../data/products";

const Menu = ({ menuState, setMenuState }) => {
  return (
    <>
      {menuState && (
        <div className="products">
          <div className="menu-title">Products</div>
          <div onClick={() => setMenuState(false)} className="close">
            <Close />
          </div>
          <div className="menu">
            <div className="container">
              <div className="menu-inner">
                <ul>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const List = ({ id, title, src, leftLineFlex, rightLineFlex, thumbnailPosition }) => {
  return (
    <li>
      <Link to={`/product/${id}`}>
        <div className="wrapper">
          <div className={`line left flex-${leftLineFlex}`}>{/* <div className="mask"></div> */}</div>
          <div className="title">
            <h2>
              <div className="text">{title}</div>
            </h2>
          </div>
          <div className="thumbnail" style={{ left: thumbnailPosition }}>
            <img src={src} alt={title} />
            {/* <div className="mask"></div> */}
          </div>
          <div className="floating-image">
            <img src={src} alt={title} />
          </div>
          <div className={`line right flex-${rightLineFlex}`}>{/* <div className="mask"></div> */}</div>
        </div>
      </Link>
    </li>
  );
};

export default Menu;
