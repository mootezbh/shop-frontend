import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import cartReducer from "./cartSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const root = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
const persist_reducer = persistReducer(persistConfig, root);

export const store = configureStore({
  reducer: persist_reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
