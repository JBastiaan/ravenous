import { useState } from 'react';
import Searchbar from './Searchbar';
import BusinessList from './BusinessList';
import styles from '../css/App.module.css';

const generateRandomBusinesses = (count) => {
  const cuisines = ['Italian', 'Japanese', 'Mexican', 'Indian', 'American', 'Thai', 'French', 'Chinese', 'Greek', 'Vietnamese'];
  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas'];
  const streets = ['Main St', 'Oak Ave', 'Maple Rd', 'Washington Blvd', 'Park Ave', 'Broadway', 'Market St', 'Lake St', 'River Rd'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    imageSrc: '/src/assets/restaurant_default.jpg',
    name: `${cuisines[Math.floor(Math.random() * cuisines.length)]} Delight ${i + 1}`,
    address: `${Math.floor(Math.random() * 1000) + 1} ${streets[Math.floor(Math.random() * streets.length)]}`,
    city: cities[Math.floor(Math.random() * cities.length)],
    state: 'NY',
    zipCode: String(10000 + Math.floor(Math.random() * 10000)),
    category: cuisines[Math.floor(Math.random() * cuisines.length)],
    rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3.0 and 5.0
    reviewCount: Math.floor(Math.random() * 500) + 50 // Random review count between 50 and 550
  }));
};

function App() {
  const [businesses, setBusinesses] = useState(generateRandomBusinesses(10));

  const handleSearch = ({ term, location, sortBy }) => {
    console.log('Searching...', { term, location, sortBy });
    // TODO: Implement actual search functionality
  };

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <Searchbar onSearch={handleSearch} />
        <BusinessList businesses={businesses} />
      </div>
    </div>
  );
}

export default App; 