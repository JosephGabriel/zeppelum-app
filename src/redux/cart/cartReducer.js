import { cartTypes } from "./cartTypes";

const initialState = {
  cartItems: [],
  cartItemsCount: null,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: [...cartItems, payload],
      };
    case cartTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: cartItems.filter((c) => c.id !== payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
