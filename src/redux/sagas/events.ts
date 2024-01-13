import { takeLatest, put, all, call } from "redux-saga/effects";
import { collection, getDocs } from "firebase/firestore";

import { firestore } from "../../firebase";

import {
  fetchEventsStart,
  fetchEventsSuccess,
  fetchEventsFailure,
} from "../reducers/events";

export function* fetchEventsAsync() {
  try {
    const eventsCollection = collection(firestore, "events");

    const eventsDocs = yield getDocs(eventsCollection);

    const events = eventsDocs.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    put(fetchEventsSuccess(events));
  } catch (error) {
    console.log(error);
    put(fetchEventsFailure(error));
  }
}

export function* onFetchEventsStart() {
  yield takeLatest(fetchEventsStart.name, fetchEventsAsync);
}

export function* eventSagas() {
  yield all([call(onFetchEventsStart)]);
}
