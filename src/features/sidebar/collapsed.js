import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    collapsed: false,
  },
  reducers: {
    toggleCollapsed: (state) => {
      state.collapsed = !state.collapsed;
    },
  },
});

export const { toggleCollapsed } = sidebarSlice.actions;

export default sidebarSlice.reducer;
