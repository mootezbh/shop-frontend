import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart_items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item_cart = state.cart_items.find(
        (item) => item.product._id === action.payload._id
      );
      if (item_cart) {
        item_cart.quantity = item_cart.quantity + 1;
        item_cart.total = parseInt(
          item_cart.product.price * item_cart.quantity
        );
      } else {
        state.cart_items.push({
          product: action.payload,
          quantity: 1,
          total: parseInt(action.payload.price),
        });
      }
    },
    incrementItem: (state, action) => {
      const item_cart = state.cart_items.find(
        (item) => item.product._id === action.payload._id
      );
      if (item_cart.quantity < action.payload.quantity) {
        item_cart.quantity += 1;
        item_cart.total += parseInt(action.payload.price);
      } else {
        //Swal.fire("");
        alert("max quantity reached");
      }
    },
    decrementItem: (state, action) => {
      const item_cart = state.cart_items.find(
        (item) => item.product._id === action.payload._id
      );
      if (item_cart.quantity <= 1) {
        state.cart_items = state.cart_items.filter(
          (item) => item.product._id !== action.payload._id
        );
      } else {
        item_cart.quantity -= 1;
        item_cart.total -= parseInt(action.payload.price);
      }
    },
    removeItem: (state, action) => {
      state.cart_items = state.cart_items.filter(
        (itemm) => itemm.product._id !== action.payload._id
      );
    },
  },
});

export const { addToCart, incrementItem, decrementItem, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
