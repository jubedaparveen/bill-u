// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  isOtpVerified: localStorage.getItem("isOtpVerified") === "true",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, isOtpVerified } = action.payload;
      state.user = user ?? state.user;
      state.token = token ?? state.token;
      state.isOtpVerified = typeof isOtpVerified === "boolean" ? isOtpVerified : state.isOtpVerified;

      if (user) localStorage.setItem("user", JSON.stringify(user));
      if (token) localStorage.setItem("token", token);
      localStorage.setItem("isOtpVerified", state.isOtpVerified);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isOtpVerified = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("isOtpVerified");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
