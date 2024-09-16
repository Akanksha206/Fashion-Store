import React, { useState } from 'react';
import '../Women/WomenStyle/style.css';
import SortBy from '../Icons/SortBy';
import { Link } from 'react-router-dom';

const TeesData = [
    {
        id: 1,
        image: '/src/assets/images/women/tees1.webp',
        title: 'Product 1',
        price: '₹499',
        originalPrice: '₹999',
        discount: '50% off',
        featured: true,
        bestSeller: false,
    },
    {
        id: 2,
        image: '/src/assets/images/women/tees2.webp',
        title: 'Product 2',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false,
        bestSeller: false,
    },
    {
        id: 3,
        image: '/src/assets/images/women/tees3.webp',
        title: 'Product 3',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false,
        bestSeller: false,
    },
    {
        id: 4,
        image: '/src/assets/images/women/tees4.webp',
        title: 'Product 4',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false,
        bestSeller: true,
    },
    {
        id: 5,
        image: '/src/assets/images/women/tees5.webp',
        title: 'Product 5',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false,
        bestSeller: false,
    },
    {
        id: 6,
        image: '/src/assets/images/women/tees1.webp',
        title: 'Product 6',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: true,
        bestSeller: false,
    },
    {
        id: 7,
        image: '/src/assets/images/women/tees7.webp',
        title: 'Product 7',
        price: '₹599',
        originalPrice: '₹999',
        featured: false,
        bestSeller: false,
        discount: '40% off',
    },
    {
        id: 8,
        image: '/src/assets/images/women/tees8.webp',
        title: 'Product 8',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false,
        bestSeller: true,
    },
    {
        id: 9,
        image: '/src/assets/images/women/tees9.webp',
        title: 'Product 9',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false,
        bestSeller: false,
    },
    {
        id: 10,
        image: '/src/assets/images/women/tees1.webp',
        title: 'Product 10',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false,
        bestSeller: false,
    },
];

const TeesandCrops = () => {
    const [products, setProducts] = useState(TeesData);

    const handleSortChange = (option) => {
        let sortedProducts = [...TeesData]; // Use TeesData to avoid mutation

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
                sortedProducts = sortedProducts.filter(Tees => Tees.bestSeller);
                break;
            case 'Featured':
                sortedProducts = sortedProducts.filter(Tees => Tees.featured);
                break;
            default:
                sortedProducts = TeesData;
        }

        setProducts(sortedProducts);
    };

    return (
        <div>
            <SortBy onSortChange={handleSortChange} /> {/* SortBy component */}

            <div className="product-grid">
                {products.map(Tees=> (
                    <div key={Tees.id} className="product-card">
                        {/* Link to the details page */}
                        <Link to={`/Tees-details/${Tees.id}`}>
                            <img src={Tees.image} alt={Tees.title} className="product-image" />
                        </Link>
                        <div className="product-info">
                            <h3>{Tees.title}</h3>
                            <div className="price-section">
                                <span className="original-price">{Tees.originalPrice}</span>
                                <span className="discounted-price">{Tees.price}</span>
                                <span className="discount">{Tees.discount}</span>
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
export default TeesandCrops;
