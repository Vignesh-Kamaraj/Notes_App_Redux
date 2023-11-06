import { createSlice } from "@reduxjs/toolkit";
export const notesSlice = createSlice({
  name: "notes",
  initialState: [
    {
      title: "vicky",
      note: "vk@gmail.com",
    },
  ],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    deleteNote: (state, action) => {
      const { i } = action.payload;
      state.splice(i, 1);
    },
    editNote: (state, action) => {
      const { id, title, note } = action.payload;
      state.splice(id, 1, { title, note });
    },
  },
});
export const { addNote, deleteNote, editNote } = notesSlice.actions;
export default notesSlice.reducer;
