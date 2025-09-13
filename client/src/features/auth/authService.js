// src/redux/authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Use your production backend base (you used onrender.com in examples)
const API_BASE = "http://localhost:4400/api";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    generateOtp: builder.mutation({
      query: (data) => ({
        url: "/forget-password/generate-otp",
        method: "POST",
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "/forget-password/verify-otp",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/forget-password/reset-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGenerateOtpMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
} = authApi;
