import styles from '../css/BusinessList.module.css';
import Business from './Business';

const BusinessList = ({ businesses = [] }) => {
  return (
    <div className={styles.businessList}>
      {businesses.length > 0 ? (
        businesses.map((business) => (
          <Business key={business.id} business={business} />
        ))
      ) : (
        <p className={styles.noResults}>No businesses found</p>
      )}
    </div>
  );
};

export default BusinessList;