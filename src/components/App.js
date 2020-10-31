import React, { Component } from "react";
import { connect } from "react-redux";

import ContactEditor from "./ContactEditor";
import ContactList from "./ContactList";
import Filter from "./Filter";
import Section from "./Section";
import phoneOperations from "../redux/phone/phoneOperations";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <Section>
        <ContactEditor />
        <h2>Contact</h2>
        <Filter />
        <ContactList />
      </Section>
    );
  }
}

const mapDispatchToProps = {
  onFetchContacts: phoneOperations.fetchContacts,
};
export default connect(null, mapDispatchToProps)(App);
