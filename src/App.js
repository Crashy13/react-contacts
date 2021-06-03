import { Component } from 'react';
import './App.css';
import ContactForm from './ContactForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    }
    this.addContact = this.addContact.bind(this);
  }

  addContact(contact) {
    const contacts = [ ...this.state.contacts ];
    contacts.push(contact);
    this.setState({ contacts })
  }





  render() {
    return(
      <h1>Contacts</h1>,
      <ContactForm addContact={this.addContact}/>
    )
  }
}



export default App;
