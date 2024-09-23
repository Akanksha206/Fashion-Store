import React, { useState } from 'react';
import '../Women/WomenStyle/style.css';
import SortBy from '../Icons/SortBy';
import { Link } from 'react-router-dom';

const kurtiData = [
    {
        id: 1,
        image: '/src/assets/images/women/kurti1.webp',
        title: 'Product 1',
        price: '₹399',
        originalPrice: '₹899',
        discount: '50% off',
        featured: true, 
        bestSeller: false,
    },
    {
        id: 2,
        image: '/src/assets/images/women/kurti5.webp',
        title: 'Product 2',
        price: '₹349',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false,
        bestSeller: true,
    },
    {
        id: 3,
        image: '/src/assets/images/women/kurti3.webp',
        title: 'Product 3',
        price: '₹599',
        originalPrice: '₹1999',
        discount: '40% off',
        featured: false,
        bestSeller: false,
    },
    {
        id: 4,
        image: '/src/assets/images/women/kurti4.webp',
        title: 'Product 4',
        price: '₹799',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false,
        bestSeller: false,
    },
    {
        id: 5,
        image: '/src/assets/images/women/kurti5.webp',
        title: 'Product 5',
        price: '₹299',
        originalPrice: '₹899',
        discount: '40% off',
        featured: false,
        bestSeller: false,
    },
    {
        id: 6,
        image: '/src/assets/images/women/kurti1.webp',
        title: 'Product 6',
        price: '₹699',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false,
        bestSeller: false,
    },
    {
        id: 7,
        image: '/src/assets/images/women/kurti7.webp',
        title: 'Product 7',
        price: '₹549',
        originalPrice: '₹999',
        discount: '40% off',
        featured: true, 
        bestSeller: false,
    },
    {
        id: 8,
        image: '/src/assets/images/women/kurti8.webp',
        title: 'Product 8',
        price: '₹649',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false,
        bestSeller: true,
    },
    {
        id: 9,
        image: '/src/assets/images/women/kurti9.webp',
        title: 'Product 9',
        price: '₹199',
        originalPrice: '₹599',
        discount: '40% off',
        featured: false,
        bestSeller: false,
    },
    {
        id: 10,
        image: '/src/assets/images/women/kurti10.webp',
        title: 'Product 10',
        price: '₹99', 
        originalPrice: '₹299', 
        discount: '40% off',
        featured: false,
        bestSeller: false,
    }
];

const ShortKurtis = () => {
    const [products, setProducts] = useState(kurtiData);

    const handleSortChange = (option) => {
        let sortedProducts = [...kurtiData]; // Use kurtiData to avoid mutation

        switch (option) {
            case 'Price: Low to High':
                sortedProducts.sort((a, b) => {
                    const priceA = parseInt(a.price.replace('₹', ''));
                    const priceB = parseInt(b.price.replace('₹', ''));
                    return priceA - priceB;
                });
                break;
            case 'Price: High to Low':
                sortedProducts.sort((a, b) => {
                    const priceA = parseInt(a.price.replace('₹', ''));
                    const priceB = parseInt(b.price.replace('₹', ''));
                    return priceB - priceA;
                });
                break;
            case 'Best Sellers':
                sortedProducts = sortedProducts.filter(kurti => kurti.bestSeller);
                break;
            case 'Featured':
                sortedProducts = sortedProducts.filter(kurti=> kurti.featured);
                break;
            default:
                sortedProducts = kurtiData;
        }

        setProducts(sortedProducts);
    };

    return (
        <div>
            <SortBy onSortChange={handleSortChange} /> {/* SortBy component */}

            <div className="product-grid">
                {products.map(kurti => (
                    <div key={kurti.id} className="product-card">
                        {/* Link to the details page */}
                        <Link to={`/kurti-details/${kurti.id}`}>
                            <img src={kurti.image} alt={kurti.title} className="product-image" />
                        </Link>
                        <div className="product-info">
                            <h3>{kurti.title}</h3>
                            <div className="price-section">
                                <span className="original-price">{kurti.originalPrice}</span>
                                <span className="discounted-price">{kurti.price}</span>
                                <span className="discount">{kurti.discount}</span>
                            </div>
                        </div>
                        <div className="product-actions">
                            <button className="add-to-cart-btn">Add to Cart</button>
                            <button className="buy-now-btn">Buy Now</button>
                        </div>
                        <div className="product-options">
                            <i className="fas fa-heart wishlist-icon"></i>
                            <i className="fas fa-share-alt share-icon"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ShortKurtis;
