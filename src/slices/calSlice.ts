import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CalcState {
  userValue: number;
  total?: number;
}

export const initialState: CalcState = {
  userValue: 0,
  total: 0,
};

// *****create slices*****
// A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

export const calcSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    GST_Cal: (state, action: PayloadAction<CalcState>) => {
      let value = action.payload.userValue * 1;
      state.total = value + value * 0.18;
    },
  },
});

export const { GST_Cal } = calcSlice.actions;

export default calcSlice.reducer;
