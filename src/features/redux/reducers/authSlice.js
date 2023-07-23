import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isLogin(state, action) {
      const { token, userData } = action.payload;
      state.token = token;
      state.user = userData;

      state.isAuthenticated = true;
    },
    isLogout(state) {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { isLogin, isLogout } = authSlice.actions;
export default authSlice.reducer;
