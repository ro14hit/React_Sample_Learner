import { configureStore } from "@reduxjs/toolkit";
import sampleSlice from "./Slices/slice.ts";

export const store = configureStore({
  reducer: {
    sample: sampleSlice,
  },
});
