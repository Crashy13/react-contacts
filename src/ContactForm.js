import { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      phoneNumber: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
   }

   handleInput(event) {
     this.setState({ [event.target.name]: event.target.value })
   }

  handleSubmit(event) {
    event.preventDefault();
  }





  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.firstName} onChange={this.handleInput} type="text" name="firstName" placeholder="First Name"/>
        <input value={this.state.lastName} onChange={this.handleInput} type="text" name="lastName" placeholder="Last Name"/>
        <input value={this.state.address} onChange={this.handleInput} type="text" name="address" placeholder="Address"/>
        <input value={this.state.phoneNumber} onChange={this.handleInput} type="text" name="phoneNumber" placeholder="Phone Number"/>
        <button type="button">Submit</button>
      </form>
    )
  }
}

export default ContactForm
