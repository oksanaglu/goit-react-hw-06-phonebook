import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        filter: ""
    },
    reducers: {
        addContacts(state, action) {
            state.contacts.push(action.payload);
        },
        deleteContacts(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
        filterContacts(state, action) {
            state.filter = action.payload;
        },
    },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const contactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContacts, deleteContacts, filterContacts } = contactSlice.actions

export default contactSlice.reducer

