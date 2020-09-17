import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const fetchContactsRequest = createAction("contacts/fetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContactsError = createAction("contacts/fetchError");

const removeContact = createAction("contacts/remove");
const changeFilter = createAction("contacts/changeFilter");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,

  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,

  removeContact,
  changeFilter,
};
