import React from "react";

const ProductImage = ({ image, title }) => {
  return (
    <div className="singleProduct__image">
      <img src={image} alt={title} />
    </div>
  );
};

export default ProductImage;
