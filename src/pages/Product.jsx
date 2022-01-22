// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

const Product = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    const productFilter = products.find((item) => item.id === id);
    setProduct(productFilter);
  }, [id]);

  if (!product) {
    return <div>No result</div>;
  }

  return (
    <>
      <div className="banner">
        <div className="inner-banner">
          <div className="container fluid">
            <h1 className="main-headline">{product?.title}</h1>
            <div className="image">
              <img src={product?.src} alt="Product-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
