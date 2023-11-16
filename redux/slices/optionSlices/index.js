"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serviceAgent: {},
  technician: {},
  finalClient: {},
  company: {},
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    serviceAgentDetails: (state, action) => {
      state.serviceAgent = action.payload;
    },
    technicianDetails: (state, action) => {
      state.technician = action.payload;
    },
    finalClientDetails: (state, action) => {
      state.finalClient = action.payload;
    },
    companyDetails: (state, action) => {
      state.company = action.payload;
    },
  },
});

export const { serviceAgentDetails, technicianDetails, finalClientDetails, companyDetails } = optionsSlice.actions;

export default optionsSlice.reducer;
