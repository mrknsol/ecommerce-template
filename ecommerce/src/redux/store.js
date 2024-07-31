import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import filterReducer from './filterSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReducer,
    cart: cartReducer
  },
});