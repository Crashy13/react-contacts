import { Component } from 'react';

function ContactList(props) {

  const contacts = props.contacts.map((contact) => (
    <li key={contact.id}>
    <p>{contact.firstName} {contact.lastName}</p>
    <p>{contact.address}</p>
    <p>{contact.phoneNumber}</p>
    </li>
  ));
  return(
    <ul>{contacts}</ul>
  )
}




export default ContactList
