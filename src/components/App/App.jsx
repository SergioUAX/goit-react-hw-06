import styles from './App.module.css';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';

function App() { 
  return (
    <>
      <div className={styles.appContainer}>
        <h1>Phonebook</h1>
        <ContactForm/>
        <SearchBox/>        
        <ContactList />
      </div>      
    </>
  )
}

export default App;
