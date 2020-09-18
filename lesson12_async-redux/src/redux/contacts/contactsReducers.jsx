import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const addContact = (state, action) => {
  console.log("state", state);
  return state
    .map((contact) => contact.name)
    .includes(action.payload.contact.name) ||
    // =============================================
    // PREVENT SAVING SAME CONTACT OR IF EMPTY FIELD
    // =============================================
    action.payload.contact.name === "" ||
    action.payload.contact.number === ""
    ? state
    : [...state, action.payload.contact];
};

const removeContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};

// =============================================
// ======      CONTACTS REDUCER    ============
// =============================================
const contactReducer = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.removeContactSuccess]: removeContact,
});

// =============================================
// ======      FILTER REDUCER    ============
// =============================================
const filterReducer = createReducer("", {
  [contactsActions.changeFilter]: (_, action) => action.payload,
});

// =============================================
// ======      LOADING REDUCER    ============
// =============================================
const loadingReducer = createReducer(false, {
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.removeContactRequest]: () => true,

  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.removeContactSuccess]: () => false,

  [contactsActions.addContactError]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.removeContactError]: () => false,
});

export default combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  loading: loadingReducer,
});
