"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serviceAgents: [],
  technicians: [],
  finalClients: [],
  companys: [],
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    serviceAgents: (state, action) => {
      state.serviceAgents = action.payload;
    },
    technicians: (state, action) => {
      state.technicians = action.payload;
    },
    finalClients: (state, action) => {
      state.finalClients = action.payload;
    },
    companys: (state, action) => {
      state.companys = action.payload;
    },
  },
});

export const { serviceAgents, technicians, finalClients, companys } =
  optionsSlice.actions;

export default optionsSlice.reducer;
