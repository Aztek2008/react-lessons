import axios from "axios";
import contactActions from "./contactsActions";

const addContact = (contact) => (dispatch) => {
  console.log("contact in ops", contact);
  dispatch(contactActions.addContact());

  axios
    .post("http://localhost:2000/contacts", { contact })
    .then((response) => {
      console.log("response", response);
      dispatch(contactActions.addContactSuccess());
    })
    .catch((error) => dispatch(contactActions.addContactError(error)));
};

export default {
  addContact,
};
