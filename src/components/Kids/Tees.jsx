import React, { useState } from 'react';
import '../Women/WomenStyle/style.css';
import SortBy from '../Icons/SortBy';
import { Link } from 'react-router-dom';

const teesData = [
    {
        id: 1,
        image: '/src/assets/images/kids/tees1.webp',
        title: 'Product 1',
        price: '₹499',
        originalPrice: '₹999',
        discount: '50% off',
    },
    {
        id: 2,
        image: '/src/assets/images/kids/tees2.jpg',
        title: 'Product 2',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 3,
        image: '/src/assets/images/kids/tees3.webp',
        title: 'Product 3',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 4,
        image: '/src/assets/images/kids/tees4.jpg',
        title: 'Product 4',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 5,
        image: '/src/assets/images/kids/tees5.jpg',
        title: 'Product 5',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 6,
        image: '/src/assets/images/kids/tees6.webp',
        title: 'Product 6',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 7,
        image: '/src/assets/images/kids/tees3.webp',
        title: 'Product 7',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 8,
        image: '/src/assets/images/kids/tees4.jpg',
        title: 'Product 8',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 9,
        image: '/src/assets/images/kids/tees5.jpg',
        title: 'Product 9',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 10,
        image: '/src/assets/images/kids/tees6.webp',
        title: 'Product 10',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
];

const Tees = () => {
    const [products, setProducts] = useState(teesData);

    const handleSortChange = (option) => {
        let sortedProducts = [...teesData]; // Use teesData to avoid mutation

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
                sortedProducts = sortedProducts.filter(tees =>tees.bestSeller);
                break;
            case 'Featured':
                sortedProducts = sortedProducts.filter(tees => tees.featured);
                break;
            default:
                sortedProducts = teesData;
        }

        setProducts(sortedProducts);
    };

    return (
        <div>
            <SortBy onSortChange={handleSortChange} /> {/* SortBy component */}

            <div className="product-grid">
                {products.map(tees => (
                    <div key={tees.id} className="product-card">
                        {/* Link to the details page */}
                        <Link to={`/teees-details/${tees.id}`}>
                            <img src={tees.image} alt={tees.title} className="product-image" />
                        </Link>
                        <div className="product-info">
                            <h3>{tees.title}</h3>
                            <div className="price-section">
                                <span className="original-price">{tees.originalPrice}</span>
                                <span className="discounted-price">{tees.price}</span>
                                <span className="discount">{tees.discount}</span>
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
export default Tees;
