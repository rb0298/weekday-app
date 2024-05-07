import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filter/filterslice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

export default store;
