import { createSlice } from '@reduxjs/toolkit';

const infoSlice = createSlice({
  name: 'modal',
  initialState: [],
  reducers: {
    addInfo: (state, { payload }) => {
      state.push(payload);
    },
    deleteItem: (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    },
  },
});

export const { addInfo, deleteItem } = infoSlice.actions;
export default {
  userInfo: infoSlice.reducer,
};
