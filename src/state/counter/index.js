import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  value: 1,
  description: '',
};

const countSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    resetState: () => initialState,
    setAddCount: (state, action) => {
      state.count = state.count + state.value;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setDiscription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { resetState, setAddCount, setValue, setDiscription } = countSlice.actions;
export default countSlice.reducer;
