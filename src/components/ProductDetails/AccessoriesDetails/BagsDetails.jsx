import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductStyles/ProductStyle.css';

const BagsDetails = () => {
  const { id } = useParams();  // Get product ID from URL
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  const BagsDetailsData = [
    {
      id: 1,
      image: "/src/assets/images/accessories/bag4.webp",
      title: "Avastha Bags Collections For Women",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Leather",
      work: "Leather Work",
      pattern: "Party Wear",
      reviews: {
        rating: "4.3 ★",
        totalReviews: 112,
        fit: "True to size",
        quality: "Good",
        comfort: "Comfortable",
      },
      similarProducts: [
        "/src/assets/images/accessories/bag4.webp",
        "/src/assets/images/accessories/bag2.webp",
        "/src/assets/images/accessories/bag4.webp",
        "/src/assets/images/accessories/bag2.webp",
      ],
    },
    {
      id: 2,
      image: "/src/assets/images/accessories/bag2.webp",
      title: "Avastha Bags Collections For Women",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Leather",
      work: "Leather Work",
      pattern: "Party Wear",
      reviews: {
        rating: "4.3 ★",
        totalReviews: 112,
        fit: "True to size",
        quality: "Good",
        comfort: "Comfortable",
      },
      similarProducts: [
        "/src/assets/images/accessories/bag4.webp",
        "/src/assets/images/accessories/bag2.webp",
        "/src/assets/images/accessories/bag4.webp",
        "/src/assets/images/accessories/bag2.webp",
      ],
    },
    {
        id: 3,
        image: "/src/assets/images/accessories/bag2.webp",
        title: "Avastha Bags Collections For Women",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Leather",
        work: "Leather Work",
        pattern: "Party Wear",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/accessories/bag2.webp",
          "/src/assets/images/accessories/bag4.webp",
          "/src/assets/images/accessories/bag2.webp",
          "/src/assets/images/accessories/bag4.webp",
        ],
      },
      {
        id: 4,
        image: "/src/assets/images/accessories/bag4.webp",
        title: "Avastha Bags Collections For Women",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Leather",
        work: "Leather Work",
        pattern: "Party Wear",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/accessories/bag2.webp",
          "/src/assets/images/accessories/bag4.webp",
          "/src/assets/images/accessories/bag2.webp",
          "/src/assets/images/accessories/bag4.webp",
        ],
      },
      {
        id: 5,
        image: "/src/assets/images/accessories/bag2.webp",
        title: "Avastha Bags Collections For Women",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Leather",
        work: "Leather Work",
        pattern: "Party Wear",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/accessories/bag4.webp",
          "/src/assets/images/accessories/bag2.webp",
          "/src/assets/images/accessories/bag4.webp",
          "/src/assets/images/accessories/bag2.webp",
        ],
      },     
  ];

  // Find the selected product based on the ID from the URL
  const bags = BagsDetailsData.find((item) => item.id === parseInt(id));

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  const checkDelivery = () => {
    if (pincode === "123456") {
      setDeliveryStatus("Available for delivery");
    } else {
      setDeliveryStatus("Not available in your area");
    }
  };

  return (
    <div className="product-page">
      {bags ? (
        <>
          <div className="product-gallery">
            <img src={bags.image} alt={bags.title} className="main-image" />
          </div>
          <div className="product-details">
            <h1>{bags.title}</h1>
            <div className="product-price">
              <span className="price">{bags.price}</span>
              <span className="discounted-price">{bags.discountedPrice}</span>
              <span className="discount">{bags.discount}</span>
            </div>

            <div className="size-options">
              <label>Size:</label>
              <select>
                {bags.sizes.map((size, index) => (
                  <option key={index}>{size}</option>
                ))}
              </select>
            </div>

            <div className="actions">
              <button className="add-to-cart">Add to Cart</button>
              <button className="buy-now">Buy Now</button>
            </div>

            <div className="pincode-check">
              <input 
                type="text" 
                placeholder="Enter Pincode" 
                value={pincode} 
                onChange={handlePincodeChange} 
              />
              <button onClick={checkDelivery}>Check</button>
              {deliveryStatus && <p>{deliveryStatus}</p>}
            </div>

            <div className="product-specifications">
              <h3>Product Details :</h3>
              <ul>
                <li><strong>Fabric:</strong> {bags.fabric}</li>
                <li><strong>Work:</strong> {bags.work}</li>
                <li><strong>Pattern:</strong> {bags.pattern}</li>
                <li><strong>Includes:</strong> {bags.includes}</li>
              </ul>
            </div>

            <div className="product-reviews">
              <h3>Customer Ratings and Reviews :</h3>
              <p>{bags.reviews.rating} ({bags.reviews.totalReviews} reviews)</p>
              <ul>
                <li><strong>Fit:</strong> {bags.reviews.fit}</li>
                <li><strong>Quality:</strong> {bags.reviews.quality}</li>
                <li><strong>Comfort:</strong> {bags.reviews.comfort}</li>
              </ul>
            </div>

            <div className="similar-products">
              <h3>Similar Products :</h3>
              <div className="product-grid">
                {bags.similarProducts.map((similarProduct, index) => (
                  <img key={index} src={similarProduct} alt="Similar Kurta" />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default BagsDetails;
