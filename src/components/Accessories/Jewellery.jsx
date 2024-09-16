import React, { useState } from 'react';
import '../Women/WomenStyle/style.css';
import SortBy from '../Icons/SortBy';
import { Link } from 'react-router-dom';

const jewelleryData = [
    {
        id: 1,
        image: '/src/assets/images/accessories/jewellery1.webp',
        title: 'Product 1',
        price: '₹499',
        originalPrice: '₹999',
        discount: '50% off',
    },
    {
        id: 2,
        image: '/src/assets/images/accessories/jewellery2.webp',
        title: 'Product 2',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 3,
        image: '/src/assets/images/accessories/jewellery3.webp',
        title: 'Product 3',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 4,
        image: '/src/assets/images/accessories/jewellery4.webp',
        title: 'Product 4',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 5,
        image: '/src/assets/images/accessories/jewellery5.webp',
        title: 'Product 5',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 6,
        image: '/src/assets/images/accessories/jewellery6.webp',
        title: 'Product 6',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 7,
        image: '/src/assets/images/accessories/jewellery7.webp',
        title: 'Product 7',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 8,
        image: '/src/assets/images/accessories/jewellery8.webp',
        title: 'Product 8',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
   
];

const jewellery = () => {
    const [products, setProducts] = useState(jewelleryData);

    const handleSortChange = (option) => {
        let sortedProducts = [...jewelleryData]; // Use jewelleryData to avoid mutation

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
                sortedProducts = sortedProducts.filter(jewellery => jewellery.bestSeller);
                break;
            case 'Featured':
                sortedProducts = sortedProducts.filter(jewellery => jewellery.featured);
                break;
            default:
                sortedProducts = jewelleryData;
        }

        setProducts(sortedProducts);
    };

    return (
        <div>
            <SortBy onSortChange={handleSortChange} /> {/* SortBy component */}

            <div className="product-grid">
                {products.map(jewellery => (
                    <div key={jewellery.id} className="product-card">
                        {/* Link to the details page */}
                        <Link to={`/jewellery-details/${jewellery.id}`}>
                            <img src={jewellery.image} alt={jewellery.title} className="product-image" />
                        </Link>
                        <div className="product-info">
                            <h3>{jewellery.title}</h3>
                            <div className="price-section">
                                <span className="original-price">{jewellery.originalPrice}</span>
                                <span className="discounted-price">{jewellery.price}</span>
                                <span className="discount">{jewellery.discount}</span>
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
export default jewellery;
