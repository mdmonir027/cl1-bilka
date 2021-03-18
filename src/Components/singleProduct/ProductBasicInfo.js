import React from "react";

const ProductBasicInfo = ({ product }) => {
  return (
    <div className="productBasicInfo">
      <h2 className="title">{product.title}</h2>
      <h6 className="subTitle">{product.subTitle}</h6>
      <p className="descriptions">{product.descriptions}</p>
    </div>
  );
};

export default ProductBasicInfo;
