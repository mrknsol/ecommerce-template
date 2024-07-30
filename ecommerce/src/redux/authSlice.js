import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: JSON.parse(localStorage.getItem('user')) || [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
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
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        state.error = 'Invalid email or password';
      }
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.error = null;
      localStorage.removeItem('currentUser'); // Remove current user from localStorage
    },
    registerUser: (state, action) => {
      const newUser = action.payload;

      if (!state.user.find(user => user.Email === newUser.Email)) {
        if (newUser.Password === newUser.ConfirmPassword) {
          state.user.push({
            UserName: newUser.UserName,
            Email: newUser.Email,
            Password: newUser.Password
          });
          state.isAuthenticated = true;
          state.error = null;
          localStorage.setItem('user', JSON.stringify(state.user));
          localStorage.setItem('currentUser', JSON.stringify(state.user[state.user.length - 1])); // Store newly registered user
        } else {
          state.error = 'Password does not match';
        }
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