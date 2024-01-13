import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthError } from "firebase/auth";

interface User {
  id: string;
  avatar?: string;
  name: string;
  lastName: string;
  createdAt: string;
  type: "user";
}

interface InitialState {
  loading: boolean;
  currentUser: User;
  error: AuthError;
}

interface LoginStartPayload {
  email: string;
  password: string;
}

interface RegisterUserPayload {
  user: {
    name: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: number;
  };
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
    registerUserStart: (state, action: PayloadAction<RegisterUserPayload>) => {
      state.loading = true;
    },
    loginUserStart: (state, action: PayloadAction<LoginStartPayload>) => {
      state.loading = true;
    },
    loginUserSuccess: (state, action: PayloadAction<User>) => {
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
