import { eventTypes } from "./eventTypes";

const initialState = {
  events: [],
  userEvents: [],
  favorites: [],
  error: null,
  loading: false,
  userLoading: false,
};

const eventReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case eventTypes.FETCH_USER_EVENTS_START:
      return {
        ...state,
        userLoading: true,
        error: null,
      };
    case eventTypes.FETCH_USER_EVENTS_SUCCESS:
      return {
        ...state,
        userEvents: payload,
        error: null,
        userLoading: false,
      };
    case eventTypes.FETCH_USER_EVENTS_FAILURE:
      return {
        ...state,
        userEvents: [],
        error: payload,
        userLoading: false,
      };
    case eventTypes.FETCH_EVENTS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case eventTypes.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        events: payload,
        error: null,
        loading: false,
      };
    case eventTypes.FETCH_EVENTS_FAILURE:
      return {
        ...state,
        events: [],
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default eventReducer;
