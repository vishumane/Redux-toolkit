import { configureStore } from '@reduxjs/toolkit';
import calcReducer from '../slices/calSlice';

export const store = configureStore({
  reducer: {
    calc: calcReducer,
  },
});

// here we are configuring the store with reducer

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
