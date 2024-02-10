import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import Theme from "./Theme";
import categorySlice from "./categorySlice";

const Store = configureStore({
  reducer: {
    sideBar: sideBarSlice,
    Theme: Theme,
    videoCategory: categorySlice,
  },
});

export default Store;
