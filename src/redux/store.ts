import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./features/language";

export const store = configureStore({
  reducer: {
    languageSlice: languageReducer,
  },
});

// Typing hooks
import { TypedUseSelectorHook, useSelector } from "react-redux";
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
