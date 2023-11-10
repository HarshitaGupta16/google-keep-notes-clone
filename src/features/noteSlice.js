import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  notes: [{ id: 1, title: "Note 1", description: "This is the first note" }],
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

    // editNote: (state, action) => {
    //   state.notes.map((note) => {
    //     if (note.id === action.payload) {
    //     }
    //   });
    // },
  },
});

export const { createNote, deleteNote } = noteSlice.actions;

export default noteSlice.reducer;
