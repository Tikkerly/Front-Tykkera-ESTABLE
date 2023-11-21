"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },
    userDetails: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, userDetails } = authSlice.actions;

export default authSlice.reducer;
