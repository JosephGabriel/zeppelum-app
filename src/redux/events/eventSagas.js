import { takeLatest, put, all, call } from "redux-saga/effects";

import { firestore } from "../../firebase";
import { eventTypes } from "./eventTypes";

import {
  fetchUserEventsSuccess,
  fetchUserEventsFailure,
  fetchEventsSuccess,
  fetchEventsFailure,
} from "./eventActions";

export function* fetchEventsAsync() {
  let events = [];
  yield firestore
    .collection("events")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        events.push({ id: doc.id, ...doc.data() });
      });
      put(fetchEventsSuccess(events));
    })

    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

export function* onFetchEventsStart() {
  yield takeLatest(eventTypes.FETCH_EVENTS_START, fetchEventsAsync);
}

export function* eventSagas() {
  yield all([call(onFetchEventsStart)]);
}
