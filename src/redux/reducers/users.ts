import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthError, User as FirebaseUser } from "firebase/auth";

interface InitialState {
  loading: boolean;
  currentUser: FirebaseUser;
  error: AuthError;
}

const initialState: InitialState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerUserStart: (state, action: PayloadAction) => {
      state.loading = true;
    },
    loginUserStart: (state) => {
      state.loading = true;
    },
    loginUserSuccess: (state, action: PayloadAction<FirebaseUser>) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    loginUserError: (state, action: PayloadAction<AuthError>) => {
      state.error = action.payload;
      state.loading = false;
    },
    logOutUser: (state) => {
      state.currentUser = null;
    },
    logOutError: (state, action: PayloadAction<AuthError>) => {
      state.error = action.payload;
    },
  },
});

export const {
  loginUserError,
  logOutError,
  registerUserStart,
  logOutUser,
  loginUserStart,
  loginUserSuccess,
} = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
