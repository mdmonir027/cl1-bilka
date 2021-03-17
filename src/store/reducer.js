import * as actions from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.FETCH_CATERGORY_DATA: {
      return {
        ...state,
        categories: action.payload.categories,
      };
    }
    case actions.FETCH_PRODUCTS_DATA:
      return {
        ...state,
        products: action.payload.products,
      };
    case actions.ADD_TO_CART: {
      const cart = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (cart && Object.keys(cart).length !== 0) return state;

      const product = state.products.find(
        (product) => product.id === action.payload.id
      );

      return {
        ...state,
        cart: [...state.cart, product],
      };
    }
    case actions.REMOVE_FROM_CART: {
      const cart = [...state.cart];
      const newCart = cart.filter(
        (product) => product.id !== action.payload.id
      );
      return { ...state, cart: newCart };
    }
    default:
      return state;
  }
};

export default reducer;
