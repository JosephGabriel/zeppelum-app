import { Tuple, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import createSagaMiddleware from "redux-saga";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { rootReducer } from "./reducers";

import { rootSaga } from "./sagas";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

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

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
