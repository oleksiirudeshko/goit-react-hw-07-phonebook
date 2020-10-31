import React, { Component } from "react";
import { connect } from "react-redux";

import phoneOperations from "../redux/phone/phoneOperations";

const NotUnicName = (allContacts, newName) => {
  const findName = allContacts.find((contact) => contact.name === newName);
  return findName;
};

class ContactEditor extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    const find = NotUnicName(this.props.items, value);
    if (find) {
      alert(`${value} is already in contacts!!!`);
    } else
      this.setState({
        [name]: value,
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state);
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <br />
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
            />
          </label>
          <label htmlFor="number">
            Number
            <br />
            <input
              type="text"
              value={number}
              onChange={this.handleChange}
              name="number"
            />
          </label>
          <button type="submit" className="add_contact">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return state.contacts;
};

const mapDispatchToProps = {
  onAddContact: phoneOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactEditor);
