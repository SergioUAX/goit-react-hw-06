import { createSlice } from '@reduxjs/toolkit';

const initialState = {  
    items: [
      { id: '1', name: 'John', number: '655663914' },
      { id: '2', name: 'Ben', number: '655642394' },
      { id: '3', name: 'Sam', number: '234234914' },
    ],  
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;