import React, { useState } from 'react';
import '../Women/WomenStyle/style.css';
import SortBy from '../Icons/SortBy';
import { Link } from 'react-router-dom';

const sareesData = [
    {
        id: 1,
        image: '/src/assets/images/women/saree1.webp',
        title: 'Product 1',
        price: '₹499',
        originalPrice: '₹999',
        discount: '50% off',
        featured: false, 
        bestSeller: false,
    },
    {
        id: 2,
        image: '/src/assets/images/women/saree2.webp',
        title: 'Product 2',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: false,
    },
    {
        id: 3,
        image: '/src/assets/images/women/saree3.webp',
        title: 'Product 3',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: true, 
        bestSeller: false,
    },
    {
        id: 4,
        image: '/src/assets/images/women/saree4.webp',
        title: 'Product 4',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: false,
    },
    {
        id: 5,
        image: '/src/assets/images/women/saree5.webp',
        title: 'Product 5',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: true,
    },
    {
        id: 6,
        image: '/src/assets/images/women/saree6.webp',
        title: 'Product 6',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: true, 
        bestSeller: false,
    },
    {
        id: 7,
        image: '/src/assets/images/women/saree7.webp',
        title: 'Product 7',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: false,
    },
    {
        id: 8,
        image: '/src/assets/images/women/saree8.webp',
        title: 'Product 8',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: true,
    },
    {
        id: 9,
        image: '/src/assets/images/women/saree9.webp',
        title: 'Product 9',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: false,
    },
    {
        id: 10,
        image: '/src/assets/images/women/saree10.webp',
        title: 'Product 10',
        price: '₹599',
        originalPrice: '₹999',
        discount: '40% off',
        featured: false, 
        bestSeller: true,
    },
];

const Sarees = () => {
    const [products, setProducts] = useState(sareesData);

    const handleSortChange = (option) => {
        let sortedProducts = [...sareesData]; // Use sareesData to avoid mutation

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
                sortedProducts = sortedProducts.filter(sarees => sarees.bestSeller);
                break;
            case 'Featured':
                sortedProducts = sortedProducts.filter(sarees =>sarees.featured);
                break;
            default:
                sortedProducts = sareesData;
        }

        setProducts(sortedProducts);
    };

    return (
        <div>
            <SortBy onSortChange={handleSortChange} /> {/* SortBy component */}

            <div className="product-grid">
                {products.map(sarees => (
                    <div key={sarees.id} className="product-card">
                        {/* Link to the details page */}
                        <Link to={`/sarees-details/${sarees.id}`}>
                            <img src={sarees.image} alt={sarees.title} className="product-image" />
                        </Link>
                        <div className="product-info">
                            <h3>{sarees.title}</h3>
                            <div className="price-section">
                                <span className="original-price">{sarees.originalPrice}</span>
                                <span className="discounted-price">{sarees.price}</span>
                                <span className="discount">{sarees.discount}</span>
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
export default Sarees;
