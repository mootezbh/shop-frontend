import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [
      {
        product: null,
        price: 0,
        quantity: 0,
      },
    ],
    price_total: 0,
    quantity_total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
      const item_index = state.products.findIndex(
        (item) => item._id == action.payload._id
      );
      if (item_index > 0) {
        state.products[item_index].quantity += 1;
        state.products[item_index].price =
          state.products[item_index].quantity * action.payload.price;
        for (let index = 0; index < state.products.length; index++) {
          state.products.price_total += state.products[index].price;
          state.products.quantity_total += state.products[index].quantity;
        }
      }
    },
  },
});
