import { eventTypes } from "./eventTypes";

export const fetchUserEventsStart = (uid) => ({
  type: eventTypes.FETCH_USER_EVENTS_START,
  payload: uid,
});

export const fetchUserEventsSuccess = (events) => ({
  type: eventTypes.FETCH_USER_EVENTS_SUCCESS,
  payload: events,
});

export const fetchUserEventsFailure = (error) => ({
  type: eventTypes.FETCH_USER_EVENTS_FAILURE,
  payload: error,
});

export const fetchEventsStart = (uid) => ({
  type: eventTypes.FETCH_EVENTS_START,
  payload: uid,
});

export const fetchEventsSuccess = (events) => ({
  type: eventTypes.FETCH_EVENTS_SUCCESS,
  payload: events,
});

export const fetchEventsFailure = (error) => ({
  type: eventTypes.FETCH_EVENTS_FAILURE,
  payload: error,
});
