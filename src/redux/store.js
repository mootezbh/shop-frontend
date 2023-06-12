import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
  }

const user = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: user,
});

export const persistor = persistStore(store);
