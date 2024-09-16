import React, { useState } from 'react';
import '../Women/WomenStyle/style.css';
import SortBy from '../Icons/SortBy';
import { Link } from 'react-router-dom';

const coordSetsData = [
    {
        id: 1,
        image: '/src/assets/images/women/summer7.webp',
        title: 'Product 1',
        price: '₹499',
        originalPrice: '₹999',
        discount: '50% off',
        featured: false, 
        bestSeller: false,
    },
    {
        id: 2,
        image: '/src/assets/images/women/summer6.webp',
        title: 'Product 2',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: false,
    },
    {
        id: 3,
        image: '/src/assets/images/women/summer10.webp',
        title: 'Product 3',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: true,
    },
    {
        id: 4,
        image: '/src/assets/images/women/summer9.webp',
        title: 'Product 4',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: true, 
        bestSeller: false,
    },
    {
        id: 5,
        image: '/src/assets/images/women/summer5.webp',
        title: 'Product 5',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: true,
    },
    {
        id: 6,
        image: '/src/assets/images/women/summer6.webp',
        title: 'Product 6',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: false,
    },
    {
        id: 7,
        image: '/src/assets/images/women/summer7.webp',
        title: 'Product 7',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: true, 
        bestSeller: false,
    },
    {
        id: 8,
        image: '/src/assets/images/women/summer8.webp',
        title: 'Product 8',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: false,
    },
    {
        id: 9,
        image: '/src/assets/images/women/summer9.webp',
        title: 'Product 9',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: false,
    },
    {
        id: 10,
        image: '/src/assets/images/women/summer10.webp',
        title: 'Product 10',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: true, 
        bestSeller: false,
    },
];

const CoordSets = () => {
    const [products, setProducts] = useState(coordSetsData);

    const handleSortChange = (option) => {
        let sortedProducts = [...coordSetsData]; // Use coordSetsData to avoid mutation

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
                sortedProducts = sortedProducts.filter(coordSet => coordSet.bestSeller);
                break;
            case 'Featured':
                sortedProducts = sortedProducts.filter(coordSet => coordSet.featured);
                break;
            default:
                sortedProducts = coordSetsData;
        }

        setProducts(sortedProducts);
    };

    return (
        <div>
            <SortBy onSortChange={handleSortChange} /> {/* SortBy component */}

            <div className="product-grid">
                {products.map(coordSet => (
                    <div key={coordSet.id} className="product-card">
                        {/* Link to the details page */}
                        <Link to={`/coordSet-details/${coordSet.id}`}>
                            <img src={coordSet.image} alt={coordSet.title} className="product-image" />
                        </Link>
                        <div className="product-info">
                            <h3>{coordSet.title}</h3>
                            <div className="price-section">
                                <span className="original-price">{coordSet.originalPrice}</span>
                                <span className="discounted-price">{coordSet.price}</span>
                                <span className="discount">{coordSet.discount}</span>
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
export default CoordSets;
