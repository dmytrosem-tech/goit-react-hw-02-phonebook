import { Component } from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/CotnactList";

export default class App extends Component {
  state = {
    contacts: [],
  };

  addNewContact = (obj) => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, obj],
      };
    });
  };

  render() {
    console.log(this.state.contacts);
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addNewContact={this.addNewContact} />
        <h2>Contacts</h2>
        {/* <Filter />
        <ContactList /> */}
      </div>
    );
  }
}
