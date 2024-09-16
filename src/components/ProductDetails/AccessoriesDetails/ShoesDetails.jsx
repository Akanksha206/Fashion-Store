import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductStyles/ProductStyle.css'

const shoesDetailsData = [
    {
        id: 1,
        image: '/src/assets/images/accessories/shoe1.jpeg',
        title: 'Product 1',
        price: '₹399',
        originalPrice: '₹899',
        discount: '50% off',
        fabric: 'Georgette',
        availability: 'In Stock',
        similarProducts: [
            {  image: '/src/assets/images/accessories/shoe4.jpeg'},
            {  image: '/src/assets/images/accessories/shoe6.jpeg' },
        ],
        shop: 'Shop A',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 2,
        image: '/src/assets/images/accessories/shoe2.jpeg',
        title: 'Product 2',
        price: '₹349',
        originalPrice: '₹999',
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            {  image: '/src/assets/images/accessories/shoe6.jpeg'},
            {  image: '/src/assets/images/accessories/shoe7.jpeg' },
        ],
        shop: 'Shop B',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 3,
        image: '/src/assets/images/accessories/shoe3.jpeg',
        title: 'Product 3',
        price: '₹599',
        originalPrice: '₹1999',
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            {  image: '/src/assets/images/accessories/shoe6.jpeg'},
            {  image: '/src/assets/images/accessories/shoe7.jpeg' },
        ],
        shop: 'Shop A',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 4,
        image: '/src/assets/images/accessories/shoe4.jpeg',
        title: 'Product 4',
        price: '₹799',
        originalPrice: '₹999',
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            {  image: '/src/assets/images/accessories/shoe8.jpeg'},
            { image: '/src/assets/images/accessories/shoe9.jpeg' },
        ],
        shop: 'Shop B',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 5,
        image: '/src/assets/images/accessories/shoe5.jpeg',
        title: 'Product 5',
        price: '₹299',
        originalPrice: '₹899',
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            {  image: '/src/assets/images/accessories/shoe2.jpeg'},
            {  image: '/src/assets/images/accessories/shoe1.jpeg' },
        ],
        shop: 'Shop A',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 6,
        image: '/src/assets/images/accessories/shoe6.jpeg',
        title: 'Product 6',
        price: '₹699',
        originalPrice: '₹999',
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            { image: '/src/assets/images/accessories/shoe4.jpeg'},
            {  image: '/src/assets/images/accessories/shoe5.jpeg' },
        ],
        shop: 'Shop B',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 7,
        image: '/src/assets/images/accessories/shoe7.jpeg',
        title: 'Product 7',
        price: '₹549',
        originalPrice: '₹999',
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            { image: '/src/assets/images/accessories/shoe3.jpeg'},
            { image: '/src/assets/images/accessories/shoe1.jpeg' },
        ],
        shop: 'Shop A',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 8,
        image: '/src/assets/images/accessories/shoe8.jpeg',
        title: 'Product 8',
        price: '₹649',
        originalPrice: '₹999',
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            {  image: '/src/assets/images/accessories/shoe3.jpeg'},
            { image: '/src/assets/images/accessories/shoe4.jpeg' },
        ],
        shop: 'Shop B',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 9,
        image: '/src/assets/images/accessories/shoe9.jpeg',
        title: 'Product 9',
        price: '₹199',
        originalPrice: '₹599',
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            {  image: '/src/assets/images/accessories/shoe2.jpeg'},
            { image: '/src/assets/images/accessories/shoe1.jpeg' },
        ],
        shop: 'Shop A',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
];

const ShoesDetails = () => {
    const { id } = useParams();
    const shoes = shoesDetailsData.find(p => p.id === parseInt(id));
    const [pincode, setPincode] = useState('');
    const [deliveryStatus, setDeliveryStatus] = useState('');

    const handlePincodeCheck = () => {
        if (pincode === '123456') {
            setDeliveryStatus('Delivery Available');
        } else {
            setDeliveryStatus('Delivery Not Available');
        }
    };

    return (
        <div className="products-details-container">
    {/* Product Details */}
    <div className="products-details">
        <h1>Product Details :</h1>

        {shoes ? (
            <div>

               <img src={shoes.image} alt={`shoes ${shoes.id}`} className="products-image" />
               

                <h2>Fabric: {shoes.fabric}</h2>
                <p className='products-avail'>Availability: {shoes.availability}</p>

                <h4 className='products-shop'>Shop Information :</h4>
                <p className='shop-name'>{shoes.shop}</p>

                <div className="pincode-check">
                    <h4>Check Delivery :</h4>
                    <input
                        type="text"
                        placeholder="Enter Pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                    />
                    <button onClick={handlePincodeCheck}>Check</button>
                    <p>{deliveryStatus}</p>
                </div>

                {/* Products info */}
                <div className="products-info">
        {shoes && (
            <div>
                <h4>Customer Reviews :</h4>
                <div className="reviews-section">
                    {shoes.reviews.map((review, index) => (
                        <div key={index} className="review">
                            <p><strong >{review.user}</strong>: {review.comment}</p>
                            <p className='rating'>Rating: {review.rating}/5</p>
                        </div>
                    ))}
                </div>

                <h4 className='overall-rating'>Overall Rating: {shoes.ratings}/5</h4>
            </div>
        )}
    </div>
            </div>
        ) : (
            <h5>Product details not found.</h5>
        )}
        
    </div>
  

    {/* Similar Products Section */}
    <div className="similar-products-container">
        <h4>Similar Products :</h4>
        <div className="similar-products">
            {shoes.similarProducts.map((similar, index) => (
                 <div key={index}>
                 
                 <img src={similar.image} alt={`Similar Products ${index + 1}`} className="similar-img"/>
                 
                 <p>{similar.name}</p>
             <div className="similar-product-info">
                <div className='fabric'> <p><strong>Fabric :</strong> cotton</p></div>
                 <div className='shop'><p><strong>Shop :</strong> Cotton Hub</p></div>
                 <div className='price'><p><strong>Price : </strong>  Rs.259 /-{similar.price}</p></div>
                 <div className='Quality'><p><strong>Quality :</strong> Pure Cotton</p></div>
                 <div className='Avail'><p ><strong>Availability :</strong> In Stock</p></div>
             </div>
             </div>
            ))}
        </div>
    </div>
</div>

    );
};

export default ShoesDetails;