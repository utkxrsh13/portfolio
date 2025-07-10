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
    closeMenu: (state) => {
      state.menuOpen = false;
    },
    openMenu: (state) => {
      state.menuOpen = true;
    },
  },
});

export const menuReducer = menuSlice.reducer;
export const { toggleMenu, closeMenu, openMenu } = menuSlice.actions;
