import { createSlice } from "@reduxjs/toolkit";

const Theme = createSlice({
  name: "Theme",
  initialState: {
    isDarkTheme: JSON.parse(localStorage.getItem("Theme")) || false,
  },
  reducers: {
    toggleTheme: (state, action) => {
      state.isDarkTheme = !state.isDarkTheme;
      localStorage.setItem("Theme", JSON.stringify(state.isDarkTheme));
    },
  },
});

export const { toggleTheme } = Theme.actions;
export default Theme.reducer;
