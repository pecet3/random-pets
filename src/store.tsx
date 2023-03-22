import { configureStore } from "@reduxjs/toolkit";
import dogs from "./features/Dogs/dogsSlice";
const store = configureStore({
  reducer: {
    dogs: dogs,
  },
  middleware: [],
});

export default store;
