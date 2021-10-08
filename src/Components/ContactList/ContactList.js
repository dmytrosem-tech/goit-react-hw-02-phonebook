import React from "react";

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className="contacts">
      {contacts.map(({ name, number, id }) => (
        <li key={id} className="contact__item">
          <p className="contact__name">{name}</p>
          <p className="contact__number">{number}</p>
          <button onClick={() => deleteContact(id)} className="contact__btn">
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
