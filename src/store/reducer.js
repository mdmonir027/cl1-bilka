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
      const cart = [...state.cart];
      const cartProduct = cart.find(
        (product) => product.id === parseInt(action.payload.id)
      );

      if (cartProduct && Object.keys(cartProduct).length !== 0) {
        cartProduct.quantity += 1;
        return {
          ...state,
          cart,
        };
      }

      const product = state.products.find(
        (product) => product.id === parseInt(action.payload.id)
      );
      product.quantity = action.payload.quantity;
      product.totalPrice = product.price;

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
    case actions.UPDATE_CART_PRODUCT_QUANTITY: {
      const cart = [...state.cart];
      const product = cart.find((product) => product.id === action.payload.id);
      product.quantity = action.payload.quantity;
      product.totalPrice = product.price * action.payload.quantity;
      return { ...state, cart };
    }
    case actions.SET_USER: {
      const user = action.payload.user;

      const auth = {
        user,
        isLoggedIn: Object.keys(user).length !== 0,
      };

      return {
        ...state,
        auth,
      };
    }
    case actions.CHECKOUT_PRODUCTS: {
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
};

export default reducer;
