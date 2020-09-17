import React, { Component } from "react";
import { connect } from "react-redux";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Section from "./Section/Section";
import Filter from "./Filter/Filter";

import contactsOperations from "../redux/contacts/contactsOperations";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        {this.props.isLoadingContact && <h1>Loading...</h1>}
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContact: state.contacts.loading,
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
