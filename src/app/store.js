import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../features/noteSlice";
import labelReducer from "../features/labelSlice";

const reducer = {
  notes: noteReducer,
  labels: labelReducer,
};

export const store = configureStore({
  reducer,
});
