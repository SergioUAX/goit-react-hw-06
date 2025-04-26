import styles from './SearchBox.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';

const SearchBox = () => {    
    const searchId = nanoid();
    const dispatch = useDispatch();
    const filterValue = useSelector(state => state.filter.filters.name);

    const handleSearch = (e) => { 
        dispatch({type: 'changeFilter', payload: e.target.value});
    };
    
    return (
        <div className={styles.searchBox}>
            <label htmlFor={searchId}>Find contacs by name</label>
            <input
                type='text'                
                id={searchId}
                value={filterValue}
                onChange={handleSearch} />
        </div>
    );
};

export default SearchBox;
