import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./style/Products.scss";
import { useDataLayer } from "./../../../store/dataLayer";

const Products = () => {
  const [state] = useDataLayer();

  const [allProducts, setAllProducts] = useState([]);

  // useEffect
  useEffect(() => setAllProducts(state.products), [state.products]);

  return (
    <div className="home__products">
      <h6 className="title">Others have bought</h6>
      <h1 className="subTitle">POPULAR IN BILKA</h1>
      <div className="home__allProducts">
        {allProducts.slice(0, 5).map((product) => (
          <Product
            title={product.title}
            image={product.image}
            id={product.id}
            key={product.id}
            subTitle={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
