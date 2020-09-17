import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
// import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";

// import PropTypes from "prop-types";

import Notification from "../Notification/Notification";
import contactsOperations from "../../redux/contacts/contactsOperations";

import s from "./ContactForm.module.css";
import AppearStyles from "./AppearStyles.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    existedContact: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const existedContacts = this.props.contacts.map((cont) => cont.name);
    const newName = this.state.name;
    // ====================================
    // SHOW ERR MSG IF SAVING SAME CONTACT
    // ====================================
    existedContacts.includes(newName) && this.showNotification();

    this.props.onAddContact({
      // id: uuidv4(), //TODO:WHAT TO DO WITH THIS ID
      name: name,
      number: number,
    });

    this.setState({
      name: "",
      number: "",
    });
  };

  showNotification = () => {
    this.setState({ existedContact: true });
    setTimeout(() => this.setState({ existedContact: false }), 3000);
  };

  render() {
    const { name, number, existedContact } = this.state;

    return (
      <>
        <CSSTransition
          in={existedContact}
          classNames={AppearStyles}
          unmountOnExit
          timeout={1000}
        >
          <Notification />
        </CSSTransition>
        <form className={s.ContactForm} onSubmit={this.handleSubmit}>
          <label>
            <p>Name</p>
            <input
              onChange={this.handleChange}
              placeholder="Name..."
              value={name}
              type="text"
              name="name"
              autoFocus
            />
          </label>

          <label>
            <p>Number</p>
            <NumberFormat
              format="(###) ###-####"
              onChange={this.handleChange}
              placeholder="Phone Number..."
              value={number}
              name="number"
              mask=""
            />
          </label>

          <button className={s.Button} type="submit">
            Add Contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts,
});

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

// ContactForm.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
//   existedContact: PropTypes.bool,
// };

// THROW ERROR MESSAGE AND DESCRIBES WRONG INFO
