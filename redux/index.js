"use client";
import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlices";
import options from "./slices/optionSlices";

const store = configureStore({
  reducer: {
    auth,
    options,
  },
});

export default store;
