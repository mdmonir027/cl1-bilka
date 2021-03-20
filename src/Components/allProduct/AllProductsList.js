import React, { useEffect, useState } from "react";
import { useDataLayer } from "../../store/dataLayer";
import Product from "./../home/product/Product";
import "./style/AllProductList.scss";
import "./style/Pagination.scss";
import paginate from "paginate-array";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const AllProductsList = () => {
  const [state] = useDataLayer();
  const [allProducts, setAllProducts] = useState([]);
  const [collection, setCollection] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);

  useEffect(() => setAllProducts(state.products), [state]);

  useEffect(() => setCollection(paginate(allProducts, currentPage, 15)), [
    allProducts,
    currentPage,
  ]);

  useEffect(() => {
    const array = [];
    for (let i = 1; i <= collection?.totalPages; i++) {
      array.push(i);
    }
    setPages(array);
  }, [collection]);

  return (
    <>
      <div className="allProducts__products">
        {collection?.data?.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            image={product.image}
            id={product.id}
            price={product.price}
            subTitle={product.subTitle}
          />
        ))}
      </div>
      <div className="allProducts__paginations">
        <div className="allProducts__paginationsList">
          <button
            className="allProducts__paginationsItem"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon />
          </button>
          {pages.map((page) => (
            <button
              className={`allProducts__paginationsItem ${
                page === currentPage ? "active" : ""
              }`}
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="allProducts__paginationsItem"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === collection?.totalPages}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default AllProductsList;
