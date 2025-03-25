import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  },
  reducers: {
    setUser(state, action) {
      const user = action.payload;
      state.user = user;
      state.isAuthenticated = true;

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('isAuthzenticated', 'true');
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;

      localStorage.removeItem('user');
      localStorage.removeItem('isAuthenticated');
    },
    loadUserFromStorage(state) {
      try {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
          state.user = storedUser;
          state.isAuthenticated = true;
        }
      } catch (error) {
        console.error('Error loading user from storage:', error);
      }
    },
  },
});

export const { setUser, logout, loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;


















// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   users: JSON.parse(localStorage.getItem('users')) || [],
//   currentUser: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginUser: (state, action) => {
//       const user = action.payload;
//       state.users.push(user);
//       state.currentUser = user;
//       localStorage.setItem('users', JSON.stringify(state.users));
//     },
//   },
// });

// export const { loginUser } = authSlice.actions;
// export default authSlice.reducer;
