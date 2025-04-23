import styles from './App.module.css';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import { useState, useEffect } from 'react';

const initialData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() { 
  
  const [contacts, setContact] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));    
    return savedContacts ? savedContacts : initialData;
  });
  
  const [search, setSearch] = useState('');

  useEffect(() => {    
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContact((prevContacts) => {       
      return [...prevContacts, newContact];
    })
  };

  const deleteContact = (contactId) => {
    setContact((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    })
  };
  
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className={styles.appContainer}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={search} onSearch={setSearch} />        
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </div>      
    </>
  )
}

export default App;
