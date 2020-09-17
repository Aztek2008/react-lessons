import axios from "axios";
import contactsActions from "./contactsActions";

//==========================================================================
//         === ADDING ===
//==========================================================================

const addContact = (contact) => (dispatch) => {
  console.log("contact in ops", contact);
  dispatch(contactsActions.addContactRequest());

  axios
    .post("http://localhost:2000/contacts", { contact })
    .then((response) => {
      dispatch(contactsActions.addContactSuccess(response.data));
    })
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

//==========================================================================
//         === FETCHING ===
//==========================================================================

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get("http://localhost:2000/contacts")
    .then((response) => {
      dispatch(contactsActions.fetchContactsSuccess(response.data));
    })
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};

export default {
  addContact,
  fetchContacts,
};
