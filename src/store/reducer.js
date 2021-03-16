import * as actions from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.FETCH_CATERGORY_DATA:
      return {
        ...state,
        categories: action.payload.categories,
      };
    case actions.FETCH_PRODUCTS_DATA:
      return {
        ...state,
        products: action.payload.products,
      };
    default:
      return state;
  }
};

export default reducer;
