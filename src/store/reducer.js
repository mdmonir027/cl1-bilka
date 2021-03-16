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
    case actions.ADD_TO_CART:
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      return {
        ...state,
        cart: [...state.cart, product],
      };
    default:
      return state;
  }
};

export default reducer;
