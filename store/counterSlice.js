import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increament: (state) => {
      state.count = state.count + 1;
    },
  },
});

export const { increament } = counterSlice.actions;
export default counterSlice.reducer;
