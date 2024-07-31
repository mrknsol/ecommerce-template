import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);
      if (itemIndex >= 0 && quantity > 0) {
        state.items[itemIndex].quantity = quantity;
      }
    },
  },
  selectors: {
    totalItems: (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0),
  }
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export const selectTotalItems = (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0);
export default cartSlice.reducer;