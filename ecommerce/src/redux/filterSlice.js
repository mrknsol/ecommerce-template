import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    searchQuery: '',
    priceFrom: '',
    priceTo: '',
    rating: '',
    status: ''
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setPriceFrom: (state, action) => {
      state.priceFrom = action.payload;
    },
    setPriceTo: (state, action) => {
      state.priceTo = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    resetFilters: (state) => {
      state.searchQuery = '';
      state.priceFrom = '';
      state.priceTo = '';
      state.rating = '';
      state.status = '';
    }
  }
});

export const {
  setSearchQuery,
  setPriceFrom,
  setPriceTo,
  setRating,
  setStatus,
  resetFilters
} = filterSlice.actions;

export default filterSlice.reducer;