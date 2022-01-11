import { cartTypes } from "./cartTypes";

export const addItemToCart = (item) => ({
  type: cartTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: cartTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});
