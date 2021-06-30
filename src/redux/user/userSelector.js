import { createSelector } from "reselect";

export const selectUser = (state) => state.user;

export const selectLoginLoading = createSelector(
  [selectUser],
  (user) => user.loading
);

export const selectRegisterLoading = createSelector(
  [selectUser],
  (user) => user.loadingRegister
);

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
