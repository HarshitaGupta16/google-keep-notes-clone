import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  // notes: [{ id: 1, title: "Note 1", description: "This is the first note" }],
  notes:
    localStorage.getItem("notes") !== null
      ? JSON.parse(localStorage.getItem("notes"))
      : [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    createNote: (state, action) => {
      const note = {
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
      };
      state.notes.push(note);
    },

    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },

    editNote: (state, action) => {
      state.notes.forEach((note) => {
        if (note.id === action.payload.id) {
          note.title = action.payload.newTitle;
          note.description = action.payload.newDescription;
        }
      });
    },
  },
});

export const { createNote, deleteNote, editNote } = noteSlice.actions;

export default noteSlice.reducer;
