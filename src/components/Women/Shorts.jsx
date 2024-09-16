import React, { useState } from 'react';
import '../Women/WomenStyle/style.css';
import SortBy from '../Icons/SortBy';
import { Link } from 'react-router-dom';

const shortsData = [
    {
        id: 1,
        image: '/src/assets/images/women/short1.webp',
        title: 'Product 1',
        price: '₹499',
        originalPrice: '₹999',
        discount: '50% off',
        featured: true, 
        bestSeller: false,
    },
    {
        id: 2,
        image: '/src/assets/images/women/short2.webp',
        title: 'Product 2',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: true, 
        bestSeller: false,
    },
    {
        id: 3,
        image: '/src/assets/images/women/short3.webp',
        title: 'Product 3',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: false,
    },
    {
        id: 4,
        image: '/src/assets/images/women/short4.webp',
        title: 'Product 4',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: false,
    },
    {
        id: 5,
        image: '/src/assets/images/women/short5.webp',
        title: 'Product 5',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: false,
    },
    {
        id: 6,
        image: '/src/assets/images/women/short6.webp',
        title: 'Product 6',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: false,
    },
    {
        id: 7,
        image: '/src/assets/images/women/short7.webp',
        title: 'Product 7',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: true,
    },
    {
        id: 8,
        image: '/src/assets/images/women/short8.webp',
        title: 'Product 8',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: false,
    },
    {
        id: 9,
        image: '/src/assets/images/women/short1.webp',
        title: 'Product 9',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: true,
    },
    {
        id: 10,
        image: '/src/assets/images/women/short2.webp',
        title: 'Product 10',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: false,
    },
];

const Shorts = () => {
    const [products, setProducts] = useState(shortsData);

    const handleSortChange = (option) => {
        let sortedProducts = [...shortsData]; // Use shortsData to avoid mutation

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
                sortedProducts = sortedProducts.filter(shorts => shorts.bestSeller);
                break;
            case 'Featured':
                sortedProducts = sortedProducts.filter(shorts => shorts.featured);
                break;
            default:
                sortedProducts = shortsData;
        }

        setProducts(sortedProducts);
    };

    return (
        <div>
            <SortBy onSortChange={handleSortChange} /> {/* SortBy component */}

            <div className="product-grid">
                {products.map(shorts => (
                    <div key={shorts.id} className="product-card">
                        {/* Link to ShortsDetails page */}
                        <Link to={`/shorts-details/${shorts.id}`}>
                            <img src={shorts.image} alt={shorts.title} className="product-image" />
                        </Link>
                        <div className="product-info">
                            <h3>{shorts.title}</h3>
                            <div className="price-section">
                                <span className="original-price">{shorts.originalPrice}</span>
                                <span className="discounted-price">{shorts.price}</span>
                                <span className="discount">{shorts.discount}</span>
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

export default Shorts;
