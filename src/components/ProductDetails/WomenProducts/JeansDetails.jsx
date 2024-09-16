import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductStyles/ProductStyle.css'

const jeansDetailsData = [
    {
        id: 1,
        image: '/src/assets/images/women/jeans1.webp',
        title: 'Product 1',
        price: '₹399',
        originalPrice: '₹899',
        discount: '50% off',
        fabric: 'Georgette',
        availability: 'In Stock',
        similarProducts: [
            {  image: '/src/assets/images/women/jeans4.webp'},
            {  image: '/src/assets/images/women/jeans5.webp' },
        ],
        shop: 'Shop A',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 2,
        image: '/src/assets/images/women/jeans2.webp',
        title: 'Product 2',
        price: '₹349',
        originalPrice: '₹999',
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            {  image: '/src/assets/images/women/jeans7.webp'},
            {  image: '/src/assets/images/women/jeans6.webp' },
        ],
        shop: 'Shop B',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 3,
        image: '/src/assets/images/women/jeans3.webp',
        title: 'Product 3',
        price: '₹599',
        originalPrice: '₹1999',
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            {  image: '/src/assets/images/women/jeans8.webp'},
            {  image: '/src/assets/images/women/jeans5.webp' },
        ],
        shop: 'Shop A',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 4,
        image: '/src/assets/images/women/jeans4.webp',
        title: 'Product 4',
        price: '₹799',
        originalPrice: '₹999',
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            {  image: '/src/assets/images/women/jeans2.webp'},
            { image: '/src/assets/images/women/jeans1.webp' },
        ],
        shop: 'Shop B',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 5,
        image: '/src/assets/images/women/jeans5.webp',
        title: 'Product 5',
        price: '₹299',
        originalPrice: '₹899',
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            {  image: '/src/assets/images/women/jeans7.webp'},
            {  image: '/src/assets/images/women/jeans8.webp' },
        ],
        shop: 'Shop A',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 6,
        image: '/src/assets/images/women/jeans6.webp',
        title: 'Product 6',
        price: '₹699',
        originalPrice: '₹999',
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            { image: '/src/assets/images/women/jeans1.webp'},
            {  image: '/src/assets/images/women/jeans3.webp' },
        ],
        shop: 'Shop B',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 7,
        image: '/src/assets/images/women/jeans7.webp',
        title: 'Product 7',
        price: '₹549',
        originalPrice: '₹999',
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            { image: '/src/assets/images/women/jeans2.webp'},
            { image: '/src/assets/images/women/jeans4.webp' },
        ],
        shop: 'Shop A',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 8,
        image: '/src/assets/images/women/jeans8.webp',
        title: 'Product 8',
        price: '₹649',
        originalPrice: '₹999',
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            {  image: '/src/assets/images/women/jeans6.webp'},
            { image: '/src/assets/images/women/jeans5.webp' },
        ],
        shop: 'Shop B',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 9,
        image: '/src/assets/images/women/jeans1.webp',
        title: 'Product 9',
        price: '₹199',
        originalPrice: '₹599',
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            {  image: '/src/assets/images/women/jeans6.webp'},
            { image: '/src/assets/images/women/jeans7.webp' },
        ],
        shop: 'Shop A',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
    {
        id: 10,
        image: '/src/assets/images/women/jeans2.webp',
        title: 'Product 10',
        price: '₹99', 
        originalPrice: '₹299', 
        discount: '40% off',
        fabric: 'Cotton',
        availability: 'In Stock',
        similarProducts: [
            {  image: '/src/assets/images/women/jeans4.webp'},
            { image: '/src/assets/images/women/jeans5.webp' },
        ],
        shop: 'Shop B',
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great product!' },
        ],
        ratings: 4.5,
    },
];

const JeansDetails = () => {
    const { id } = useParams();
    const jeans = jeansDetailsData.find(p => p.id === parseInt(id));
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

        {jeans ? (
            <div>

               <img src={jeans.image} alt={`jeans ${jeans.id}`} className="products-image" />
               

                <h2>Fabric: {jeans.fabric}</h2>
                <p className='products-avail'>Availability: {jeans.availability}</p>

                <h4 className='products-shop'>Shop Information :</h4>
                <p className='shop-name'>{jeans.shop}</p>

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
        {jeans && (
            <div>
                <h4>Customer Reviews :</h4>
                <div className="reviews-section">
                    {jeans.reviews.map((review, index) => (
                        <div key={index} className="review">
                            <p><strong >{review.user}</strong>: {review.comment}</p>
                            <p className='rating'>Rating: {review.rating}/5</p>
                        </div>
                    ))}
                </div>

                <h4 className='overall-rating'>Overall Rating: {jeans.ratings}/5</h4>
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
            {jeans.similarProducts.map((similar, index) => (
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

export default JeansDetails;