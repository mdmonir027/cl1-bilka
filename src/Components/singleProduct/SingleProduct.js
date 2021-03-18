import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDataLayer } from "../../store/dataLayer";
import "./style/SingleProduct.scss";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProductImage from "./ProductImage";
import ProductInfos from "./ProductInfos";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [state] = useDataLayer();

  useEffect(() => {
    const allProducts = [...state.products];
    setProduct(allProducts.find((p) => p.id === parseInt(id)));
    setLoading(false);
  }, [state, id]);

  return (
    <div className="singleProduct">
      <div className="singleProduct__mainInfo">
        <ProductImage image={product?.image} title={product?.title} />
        <ProductInfos
          title={product?.title}
          subTitle={product?.subTitle}
          descriptions={product?.descriptions}
          price={product?.price}
          id={id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
