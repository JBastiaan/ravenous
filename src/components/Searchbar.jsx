import { useState } from 'react';
import styles from './Searchbar.module.css';

const sortingOptions = [
  { id: 'best_match', name: 'Best Match' },
  { id: 'rating', name: 'Highest Rated' },
  { id: 'review_count', name: 'Most Reviewed' }
];

const Searchbar = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ term, location, sortBy });
  };

  return (
    <div className={styles.searchbar}>
      <div className={styles.sortingOptions}>
        {sortingOptions.map(option => (
          <button
            key={option.id}
            className={`${styles.sortButton} ${sortBy === option.id ? styles.active : ''}`}
            onClick={() => setSortBy(option.id)}
          >
            {option.name}
          </button>
        ))}
      </div>
      
      <form onSubmit={handleSearch}>
        <div className={styles.searchInputs}>
          <input
            type="text"
            placeholder="Search Restaurants"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Where?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
