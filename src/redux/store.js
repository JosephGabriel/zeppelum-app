import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import createSagaMiddleware from "redux-saga";
import AsyncStorage from "@react-native-async-storage/async-storage";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
