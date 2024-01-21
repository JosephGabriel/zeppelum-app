import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { api } from "../../services/api";

import { AuthPayload } from "../../services/api.types";
interface InitialState {
  token: AuthPayload["token"];
  currentUser: AuthPayload["user"];
}

const initialState: InitialState = {
  currentUser: null,
  token: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logOutUser: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.loginUser.matchFulfilled,
      (state, { payload }: PayloadAction<AuthPayload>) => {
        state.currentUser = payload.user;
        state.token = payload.token;
      }
    );
    builder.addMatcher(
      api.endpoints.loginUser.matchFulfilled,
      (state, { payload }: PayloadAction<AuthPayload>) => {
        state.currentUser = payload.user;
        state.token = payload.token;
      }
    );
  },
});

export const { logOutUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
