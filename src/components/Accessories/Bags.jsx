import React, { useState } from 'react';
import '../Women/WomenStyle/style.css';
import SortBy from '../Icons/SortBy';
import { Link } from 'react-router-dom';

const bagsData = [
    {
        id: 1,
        image: '/src/assets/images/accessories/bag4.webp',
        title: 'Product 1',
        price: '₹499',
        originalPrice: '₹999',
        discount: '50% off',
    },
    {
        id: 2,
        image: '/src/assets/images/accessories/bag2.webp',
        title: 'Product 2',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 3,
        image: '/src/assets/images/accessories/bag2.webp',
        title: 'Product 3',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 4,
        image: '/src/assets/images/accessories/bag4.webp',
        title: 'Product 4',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
    {
        id: 5,
        image: '/src/assets/images/accessories/bag2.webp',
        title: 'Product 5',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
    },
];

const Bags = () => {
    const [products, setProducts] = useState(bagsData);

    const handleSortChange = (option) => {
        let sortedProducts = [...bagsData]; // Use productsData to avoid mutation

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
                sortedProducts = sortedProducts.filter(bags => bags.bestSeller);
                break;
            case 'Featured':
                sortedProducts = sortedProducts.filter(bags => bags.featured);
                break;
            default:
                sortedProducts = bagsData;
        }

        setProducts(sortedProducts);
    };

    return (
        <div>
            <SortBy onSortChange={handleSortChange} /> {/* SortBy component */}

            <div className="product-grid">
                {products.map(bags => (
                    <div key={bags.id} className="product-card">
                        {/* Link to the details page */}
                        <Link to={`/bags-details/${bags.id}`}>
                            <img src={bags.image} alt={bags.title} className="product-image" />
                        </Link>
                        <div className="product-info">
                            <h3>{bags.title}</h3>
                            <div className="price-section">
                                <span className="original-price">{bags.originalPrice}</span>
                                <span className="discounted-price">{bags.price}</span>
                                <span className="discount">{bags.discount}</span>
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
export default Bags;
