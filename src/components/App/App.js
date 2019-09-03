import React, { Component } from 'react';
import ContactList from '../ContactList/ContactList';
import NewContact from '../NewContact/NewContact';
import './App.css';

export class App extends Component {
  
  render() {
    return (     
      <div>
        <ContactList/>
        <NewContact/>
      </div>
    )
  }
}

export default App
