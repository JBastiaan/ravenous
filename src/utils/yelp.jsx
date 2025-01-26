import Business from '../components/Business';

const apiKey = import.meta.env.VITE_YELP_API_KEY;
const baseUrl = 'https://api.yelp.com/v3/businesses/search?';

const getBusinesses = async (searchTerm, location, sortBy) => {
    const url = `${baseUrl}term=${searchTerm}&location=${location}&sort_by=${sortBy}`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                accept: "application/json",
            }
        });
        
        const jsonResponse = await response.json();
        
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => ({
                id: business.id,
                name: business.name,
                imageSrc: business.image_url,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
            }));
        }
        return [];
    } catch (error) {
        console.error('Error fetching businesses:', error);
        return [];
    }
};

export default getBusinesses;
