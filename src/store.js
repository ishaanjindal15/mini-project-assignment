
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.subscribe(() => {
  try {
    localStorage.setItem(
      "mini-store-cart",
      JSON.stringify(store.getState().cart.items)
    );
  } catch (error) {
    console.error("Could not save cart:", error);
  }
});
