"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlices";
import options from "./slices/optionSlices";
//import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

const createNoobStorage = () => {
  return {
    getItem: (_key) => {
      return Promise.resolve(null);
    },
    setItem: (_key, value) => {
      return Promise.resolve(value);
    },
    removeItem: (_key) => {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoobStorage();

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth,
  options,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
