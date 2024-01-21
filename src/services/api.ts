import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { AuthPayload, LoginUserApiArgs, SignupUser } from "./api.types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://zeppelum-rest-api-production.up.railway.app",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<AuthPayload, LoginUserApiArgs>({
      query: ({ email, password }) => ({
        url: "/auth/signin",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
    }),
    signupUser: builder.mutation<AuthPayload, SignupUser>({
      query: ({ email, lastname, name, password, passwordConfirm }) => ({
        url: "/auth/signup",
        method: "POST",
        body: {
          email,
          lastname,
          name,
          password,
          passwordConfirm,
        },
      }),
    }),
  }),
});
