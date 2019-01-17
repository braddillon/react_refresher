import React, { Component } from "react";
import "./App.css";

import Contact from "./Contact.js";
import ContactDetails from "./ContactDetails";
import AddContactForm from "./AddContactForm";

class App extends Component {
  state = {
    contacts: [],
    activeContactId: 0
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        // BAD -- don't do this -- this.state.contacts = json;

        let objGroup = json.reduce((obj, item) => {
          obj[item.id] = item;
          return obj;
        }, {});

        this.setState({ contacts: objGroup });
      });
  }

  setActiveContactId = id => {
    // BAD -- don't do this -- this.state.activeContactId = id;
    this.setState({ activeContactId: id });
  };

  addContact = (name, phone, email) => {
    this.setState(prevState => {
      // let lastId = prevState.contacts.reduce((a, b) =>
      //   a.id > b.id ? a.id : b.id
      // );
      let lastId = Object.keys(prevState.contacts).reduce((a, b) =>
        this.state.contacts[a].id > this.state.contacts[b].id ? this.state.contacts[a].id : this.state.contacts[b].id
      );
      return {
        contacts: {
          ...prevState.contacts,
          [lastId+1]: { id: lastId + 1, name: name, email: email, phone: phone }
        }
      };
    });
  };

  resetActiveContactId = () => {
    this.setState({ activeContactId: 0 });
  };

  render() {
    let cDetails = null;

    if (this.state.activeContactId !== 0) {
      // let myObj = this.state.contacts.find(
      //   item => item.id === this.state.activeContactId
      // );
      let myObj = this.state.contacts[this.state.activeContactId]
      cDetails = (
        <ContactDetails {...myObj} onReset={this.resetActiveContactId} />
      );
      // cDetails = <ContactDetails name={myObj.name} phone={myObj.phone} email={myObj.email} />
    }

    return (
      <div>
        {this.state.activeContactId !== 0 ? (
          cDetails
        ) : (
          <div>
            <h1>My Phonebook</h1>
            <AddContactForm onAdd={this.addContact} />
            <ul className="list-group">
              {Object.keys(this.state.contacts).map(key => (
                <Contact
                  key={key}
                  name={this.state.contacts[key].name}
                  phone={this.state.contacts[key].phone}
                  onClick={() => this.setActiveContactId(key)}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;
