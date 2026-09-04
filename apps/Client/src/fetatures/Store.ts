import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import { Apislice } from "./api/Api";

export const store = configureStore({
  reducer: {
    [Apislice.reducerPath]: Apislice.reducer,
    AppSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Apislice.middleware),
});