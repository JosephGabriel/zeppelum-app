import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: string;
}

interface InitialState {
  items: CartItem[];
}

const initialState: InitialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemCart: (state, action: PayloadAction<CartItem>) => {
      state.items = [...state.items, action.payload];
    },
    removeItemCart: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter((c) => c.id !== action.payload.id);
    },
  },
});

export const cartReducer = cartSlice.reducer;
