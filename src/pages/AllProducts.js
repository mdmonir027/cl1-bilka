import React from "react";
import "./style/AllProducts.scss";
import AllProductsList from "../Components/allProduct/AllProductsList";

const AllProducts = () => {
  return (
    <div className="allProducts">
      <h2>Products</h2>
      <div className="allProducts__mainProducts">
        <AllProductsList />
      </div>
    </div>
  );
};

export default AllProducts;
