import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import style from './app.module.css'



class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

addContact = (addContact) => {   
const contacts = this.state.contacts
  if (!contacts.find(el => el.name.toLowerCase() === addContact.name.toLowerCase())) {   
    const newContacts = contacts.concat([addContact])   
this.setState({contacts:newContacts})
} else {alert(`${addContact.name} is already in contacts`)}
}

getFilteredContacts =  () => {
  const {filter, contacts} = this.state;
  if(!filter){
      return contacts;
  }
  const filterStr = filter.toLowerCase()
  const result = contacts.filter(contact => {
      const name = contact.name.toLowerCase();
      return name.includes(filterStr);
  });
  return result;
}

handleSearch = (e) => {
  const {name, value} = e.target;
  this.setState({
      [name]: value
  })
}

removeContact= (contactId) => {
  this.setState(prevState => {
    const {contacts} = prevState;
    const newContacts = contacts.filter(item => item.id !== contactId);    
    return {
        contacts: newContacts
    }
})
}

  render () {
    return (
      <div
        style={{
          //height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          textTransform: 'uppercase',
          color: '#010101',
          padding: '20px'
        }}
      >
       
  <h1 className={style.h1}>Phonebook</h1>
  <ContactForm  addContact={this.addContact}/>

  <h2 className={style.h2}>Contacts</h2>
  <Filter  filterContacts={this.handleSearch} filter = {this.state.filter}/>
  <ContactList contacts = {this.getFilteredContacts()} removeContact = {this.removeContact} />
      </div>
    );
  }
}

export default App;