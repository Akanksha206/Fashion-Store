import React, { useState } from 'react';
import '../Women/WomenStyle/style.css';
import SortBy from '../Icons/SortBy';
import { Link } from 'react-router-dom';

const rompersData = [
    {
        id: 1,
        image: '/src/assets/images/kids/rompers1.webp',
        title: 'Product 1',
        price: '₹499',
        originalPrice: '₹999',
        discount: '50% off',
    },
    {
        id: 2,
        image: '/src/assets/images/kids/rompers2.webp',
        title: 'Product 2',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 3,
        image: '/src/assets/images/kids/rompers3.webp',
        title: 'Product 3',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 4,
        image: '/src/assets/images/kids/rompers4.webp',
        title: 'Product 4',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 5,
        image: '/src/assets/images/kids/rompers1.webp',
        title: 'Product 5',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 6,
        image: '/src/assets/images/kids/rompers2.webp',
        title: 'Product 6',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 7,
        image: '/src/assets/images/kids/rompers3.webp',
        title: 'Product 7',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
  
];

const Rompers = () => {
    const [products, setProducts] = useState(rompersData);

    const handleSortChange = (option) => {
        let sortedProducts = [...rompersData]; // Use productsData to avoid mutation

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
                sortedProducts = sortedProducts.filter(rompers => rompers.bestSeller);
                break;
            case 'Featured':
                sortedProducts = sortedProducts.filter(rompers => rompers.featured);
                break;
            default:
                sortedProducts = rompersData;
        }

        setProducts(sortedProducts);
    };

    return (
        <div>
            <SortBy onSortChange={handleSortChange} /> {/* SortBy component */}

            <div className="product-grid">
                {products.map(rompers => (
                    <div key={rompers.id} className="product-card">
                        {/* Link to the details page */}
                        <Link to={`/rompers-details/${rompers.id}`}>
                            <img src={rompers.image} alt={rompers.title} className="product-image" />
                        </Link>
                        <div className="product-info">
                            <h3>{rompers.title}</h3>
                            <div className="price-section">
                                <span className="original-price">{rompers.originalPrice}</span>
                                <span className="discounted-price">{rompers.price}</span>
                                <span className="discount">{rompers.discount}</span>
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
export default Rompers;
