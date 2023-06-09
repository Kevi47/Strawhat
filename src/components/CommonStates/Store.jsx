import { configureStore } from "@reduxjs/toolkit";
import animeSlice from "./CommonState";
export const store = configureStore({
  reducer: {
    animeData: animeSlice,
  },
});
