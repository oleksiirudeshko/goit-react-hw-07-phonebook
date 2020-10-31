import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;

const getFilter = (state) => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const getContactById = (state, contactId) => {
  const contacts = getContacts(state);
  return contacts.find((item) => item.id === contactId);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getVisibleContacts, getFilter, getContacts, getContactById };
