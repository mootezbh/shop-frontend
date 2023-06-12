import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    shop_cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item_cart = state.shop_cart.find(
        (item) => item.product._id === action.payload._id
      );
      if (item_cart) {
        item_cart.quantity = item_cart.quantity + 1;
      } else {
        state.shop_cart.push({ product: action.payload, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
