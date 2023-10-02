import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import getApiDataSlice from "./getApiDataSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    data: getApiDataSlice,
    search: searchSlice,
  },
});

export default store;
