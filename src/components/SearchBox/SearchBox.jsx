import styles from './SearchBox.module.css';
import { nanoid } from 'nanoid';

const SearchBox = ({ value, onSearch }) => {    
    const searchId = nanoid();
    return (
        <div className={styles.searchBox}>
            <label htmlFor={searchId}>Find contacs by name</label>
            <input
                type='text'                
                id={searchId}
                value={value}
                onChange={(e) => onSearch(e.target.value)} />
        </div>
    );
};

export default SearchBox;
