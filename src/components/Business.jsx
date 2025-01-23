import styles from '../css/Business.module.css';

const defaultBusiness = {
  imageSrc: '/src/assets/restaurant_default.jpg',
  name: 'Sample Restaurant',
  address: '123 Main Street',
  city: 'New York',
  state: 'NY',
  zipCode: '10001',
  category: 'American',
  rating: 4.0,
  reviewCount: 100
};

const Business = ({ business }) => {
  // Use default business only if business prop is undefined, null, or empty object
  const businessData = Object.keys(business || {}).length === 0 ? defaultBusiness : business;
  return (
    <div className={styles.business}>
      <img 
        src={businessData.imageSrc} 
        alt={businessData.name}
        className={styles.image}
      />
      <div className={styles.info}>
        <h2 className={styles.name}>{businessData.name}</h2>
        <div className={styles.address}>
          <p>{businessData.address}</p>
          <p>{businessData.city}</p>
          <p>{businessData.state} {businessData.zipCode}</p>
        </div>
        <p className={styles.category}>{businessData.category}</p>
        <div className={styles.ratingReviews}>
          <span className={styles.rating}>{businessData.rating} stars</span>
          <span className={styles.reviews}>{businessData.reviewCount} reviews</span>
        </div>
      </div>
    </div>
  );
};

export default Business;