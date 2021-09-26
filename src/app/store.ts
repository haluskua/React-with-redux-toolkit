import { configureStore } from "@reduxjs/toolkit";
import { StringDecoder } from "string_decoder";

export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
