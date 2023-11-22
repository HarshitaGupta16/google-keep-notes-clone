import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  labels:
    localStorage.getItem("labels") !== null
      ? JSON.parse(localStorage.getItem("labels"))
      : [],
};

const labelSlice = createSlice({
  name: "label",
  initialState,
  reducers: {
    createLabel: (state, action) => {
      const label = {
        id: nanoid(),
        name: action.payload.name,
      };
      state.labels.push(label);
    },
    deleteLabel: (state, action) => {
      state.labels = state.labels.filter(
        (label) => label.id !== action.payload.id
      );
    },
    editLabel: (state, action) => {
      state.labels.forEach((label) => {
        if (label.id === action.payload.id) {
          label.name = action.payload.editedLabel;
        }
      });
    },
  },
});

export const { createLabel, deleteLabel, editLabel } = labelSlice.actions;

export default labelSlice.reducer;
