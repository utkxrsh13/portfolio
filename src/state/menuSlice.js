import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const menuReducer = menuSlice.reducer;
export const { toggleMenu } = menuSlice.actions;
