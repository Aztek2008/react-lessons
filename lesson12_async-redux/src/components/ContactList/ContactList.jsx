import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

import ContactItem from "../ContactItem/ContactItem";

import AppearStyles from "./AppearStyles.module.css";
import s from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <>
      <TransitionGroup component="ul" className={s.ContactList}>
        {contacts.length > 0 &&
          contacts.map((contact) => (
            <CSSTransition
              timeout={200}
              key={contact.id}
              classNames={AppearStyles}
            >
              <ContactItem key={contact.id} id={contact.id} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </>
  );
};

const mapStateToProps = (state) => {
  const { contacts, filter } = state.contacts;
  const filterToLowerCase = filter.toLowerCase();
  const visibleContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filterToLowerCase) ||
      contact.number.toLowerCase().includes(filterToLowerCase)
  );
  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(ContactList);

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onRemoveContact: PropTypes.object,
// };

// NOTE: ГЛЮК ????
//  Warning: Failed prop type: Invalid prop `onRemoveContact` of type `function` supplied to `ContactList`, expected `object`.
//     in ContactList (created by ConnectFunction)
