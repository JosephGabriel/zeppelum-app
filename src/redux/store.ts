import { Tuple, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import createSagaMiddleware from "redux-saga";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { rootReducer } from "./reducers";

import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => new Tuple(sagaMiddleware),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
