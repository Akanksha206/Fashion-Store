import React from 'react';
import '../styles/style.css';

const products = [
    {
        id: 1,
        image: '/src/assets/images/accessories/shoe1.jpeg',
        title: 'Product 1',
        price: '₹499',
        originalPrice: '₹999',
        discount: '50% off',
    },
    {
        id: 2,
        image: '/src/assets/images/accessories/shoe2.jpeg',
        title: 'Product 2',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 3,
        image: '/src/assets/images/accessories/shoe3.jpeg',
        title: 'Product 3',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 4,
        image: '/src/assets/images/accessories/shoe4.jpeg',
        title: 'Product 4',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 5,
        image: '/src/assets/images/accessories/shoe5.jpeg',
        title: 'Product 5',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 6,
        image: '/src/assets/images/accessories/shoe6.jpeg',
        title: 'Product 6',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 7,
        image: '/src/assets/images/accessories/shoe7.jpeg',
        title: 'Product 7',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 8,
        image: '/src/assets/images/accessories/shoe8.jpeg',
        title: 'Product 8',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 9,
        image: '/src/assets/images/accessories/shoe9.jpeg',
        title: 'Product 9',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    
];

const Shoes = () => {
    return (
        <div className="product-grid">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} className="product-image" />
                    <div className="product-info">
                        <h3>{product.title}</h3>
                        <div className="price-section">
                            <span className="original-price">{product.originalPrice}</span>
                            <span className="discounted-price">{product.price}</span>
                            <span className="discount">{product.discount}</span>
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
    );
};

export default Shoes;
