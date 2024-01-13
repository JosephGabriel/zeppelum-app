import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  events: unknown[];
  userEvents: unknown[];
  favorites: unknown[];
  fetchingUserEventsError: Error | null;
  fetchingEventsError: Error | null;
  isFetchingEvents: boolean;
  isFetchingUserEvents: boolean;
}

const initialState: InitialState = {
  events: [],
  userEvents: [],
  favorites: [],
  fetchingUserEventsError: null,
  isFetchingEvents: false,
  fetchingEventsError: null,
  isFetchingUserEvents: false,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    fetchEventsStart: (state, action) => {
      state.isFetchingEvents = true;
    },
    fetchEventsSuccess: (state, action: PayloadAction<unknown[]>) => {
      state.isFetchingEvents = false;
      state.fetchingEventsError = null;
      state.events = action.payload;
    },
    fetchEventsFailure: (state, action) => {
      state.isFetchingEvents = false;
      state.fetchingEventsError = action.payload;
    },

    fetchUserEventsStart: (state, action) => {
      state.isFetchingUserEvents = true;
    },
    fetchUserEventsSuccess: (state, action: PayloadAction<unknown[]>) => {
      state.isFetchingUserEvents = false;
      state.fetchingUserEventsError = null;
      state.userEvents = action.payload;
    },
    fetchUserEventsFailure: (state, action) => {
      state.isFetchingUserEvents = false;
      state.fetchingUserEventsError = action.payload;
    },
  },
});

export const {
  fetchEventsFailure,
  fetchEventsStart,
  fetchEventsSuccess,
  fetchUserEventsFailure,
  fetchUserEventsStart,
  fetchUserEventsSuccess,
} = eventsSlice.actions;

export const eventsReducer = eventsSlice.reducer;
