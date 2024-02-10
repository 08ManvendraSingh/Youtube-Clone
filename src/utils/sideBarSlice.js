import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    isMenuOpen: true,
    isSideBarOpen:false,
  },
  reducers: {
    toggleSideBar: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleWatchSideBar: (state, action) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});

export const { toggleSideBar,toggleWatchSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
