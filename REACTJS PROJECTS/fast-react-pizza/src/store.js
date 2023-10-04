import { configureStore } from "@reduxjs/toolkit";

// import all slice.reducer for accessing initialState
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/card/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
