import axios from "axios";

import {
  addContactsError,
  addContactsSuccess,
  addContactsRequest,
  fetchContactsRequest,
  fetchContactsError,
  fetchContactsSuccess,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
} from "./phonebookActions";

axios.defaults.baseURL = "http://localhost:2000";

const addContact = ({ name, number }) => (dispatch) => {
  dispatch(addContactsRequest());
  axios
    .post("/contacts", {
      name: name,
      number: number,
    })
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch((error) => dispatch(addContactsError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch((error) => dispatch(fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(removeContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(removeContactsSuccess(id)))
    .catch((error) => dispatch(removeContactsError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, fetchContacts, removeContact };
