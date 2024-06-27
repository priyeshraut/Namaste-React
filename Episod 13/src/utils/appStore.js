import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
})

export default appStore;


// this reducer is basically responsible to modify the app store and this reducer is basically a combination of different small store

// so, this reducer is basically our apps big reducer and it consists of small reducer from different slices each slice wll have it's own reducer. so this a big reducer for our whole app suppose if we has multiple slices suppose if we has a user slice also so we would have we would have added our userReducer store (user: userReducer)