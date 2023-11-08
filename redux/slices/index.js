import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 // Tu estado inicial aquí
};

const slice = createSlice({
 name: 'miSlice',
 initialState,
 reducers: {
    // Tus reductores aquí
 },
});

export const { /* Tus acciones aquí */ } = slice.actions;

export default slice.reducer;