import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  animeList: [],
};

const animeSlice = createSlice({
  name: "animeData",
  initialState,
  reducers: {
    animePush: (state, actions) => {
      state.animeList = actions.payload;
    },
  },
});

export const {animePush}=animeSlice.actions;
export default animeSlice.reducer;