import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const { addUsers } = createSlice.actions;
export default usersSlice.reducer;
