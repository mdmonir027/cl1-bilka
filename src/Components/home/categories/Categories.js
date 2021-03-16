import React, { useState, useEffect } from "react";
import Category from "../../categories/Category";
import { useDataLayer } from "./../../../store/dataLayer";
import * as actions from "../../../store/actions";
import categories from "../../../fakeData/categories";

const Categories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [state, dispatch] = useDataLayer();
  useEffect(() => {
    dispatch({
      type: actions.FETCH_CATERGORY_DATA,
      payload: { categories },
    });
    setAllCategories(state.categories);
  }, [dispatch, state.categories]);

  return (
    <div className="home__categories">
      <h6 className="home__categoriesTitle">Categories</h6>
      <h1 className="home__categoriesSubTittle">EXPLORE 45,000+ ITEMS</h1>
      <div className="home__categoriesAll">
        {allCategories.map((category) => (
          <Category
            key={category.id}
            image={category.image}
            url={category.name.toLowerCase().replace(" ", "-")}
            name={category.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
