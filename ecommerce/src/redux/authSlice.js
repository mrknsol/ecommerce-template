import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: JSON.parse(localStorage.getItem('user')) || [],
    currentUser: null,
    error: null,
  },
  reducers: {
    loginUser: (state, action) => {
      const userData = action.payload;
      const user = state.user.find(user => user.Email === userData.Email && user.Password === userData.Password);
      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = 'Invalid email or password';
      }
    },
    logoutUser: (state) => {
      state.user = [];
      state.error = null;
      state.isAuthenticated = false;
      state.currentUser = null;
      localStorage.removeItem('user');
    },
    registerUser: (state, action) => {
      const newUser = action.payload;

      if (!Array.isArray(state.user)) {
        state.user = [];
      }

      if (!state.user.find(user => user.Email === newUser.Email)) {
        if(newUser.Password === newUser.ConfirmPassword) {
        state.user.push({
          UserName: newUser.UserName,
          Email: newUser.Email,
          Password: newUser.Password
        });
        } else {
          state.error = 'Password do not match'
        }

        localStorage.setItem('user', JSON.stringify(state.user));
        state.error = null;
      } else {
        state.error = 'User already exists';
        console.log(state.user);
        console.log(localStorage.getItem('user'));
      }
    },
  },
});

export const { loginUser, logoutUser, registerUser } = authSlice.actions;
export default authSlice.reducer;