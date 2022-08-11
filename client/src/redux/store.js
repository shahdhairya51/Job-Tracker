import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "./listData";
const store = configureStore({
  reducer: {
    lists: listsReducer,
  },
});

export default store;
