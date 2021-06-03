import { Component } from 'react';
import './App.css';
import ContactForm from './ContactForm'
import ContactList from './ContactList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      counter: 0,
    }
    this.addContact = this.addContact.bind(this);
  }

  addContact(contact) {
    contact.id = this.state.counter;
    const contacts = [ ...this.state.contacts ];
    contacts.push(contact);
    this.setState((state) => ({contacts, counter: state.counter + 1}))
  }





  render() {
    return(
      <>
        <h1>Contacts</h1>,
        <ContactForm addContact={this.addContact}/>
        <ContactList contacts={this.state.contacts}/>
      </>
    )
  }
}



export default App;
