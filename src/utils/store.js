import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import getApiDataSlice from "./getApiDataSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    data: getApiDataSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
