import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductStyles/ProductStyle.css';

const ShortsDetails = () => {
  const { id } = useParams();  // Get product ID from URL
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  const ShortsDetailsData = [
    {
      id: 1,
      image: "/src/assets/images/women/short1.webp",
      title: "Kalini Trendy Shorts For Women ",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Cotton",
      work: "Thread Work",
      pattern: "Casual, Daily wear",
      includes: "Shorts Only",
      reviews: {
        rating: "4.3 ★",
        totalReviews: 112,
        fit: "True to size",
        quality: "Good",
        comfort: "Comfortable",
      },
      similarProducts: [
        "/src/assets/images/women/short3.webp",
        "/src/assets/images/women/short4.webp",
        "/src/assets/images/women/short5.webp",
        "/src/assets/images/women/short7.webp",
      ],
    },
    {
      id: 2,
      image: "/src/assets/images/women/short2.webp",
      title: "Kalini Trendy Shorts For Women ",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Cotton",
      work: "Thread Work",
      pattern: "Casual, Daily wear",
      includes: "Shorts Only",
      reviews: {
        rating: "4.3 ★",
        totalReviews: 112,
        fit: "True to size",
        quality: "Good",
        comfort: "Comfortable",
      },
      similarProducts: [
        "/src/assets/images/women/short3.webp",
        "/src/assets/images/women/short4.webp",
        "/src/assets/images/women/short5.webp",
        "/src/assets/images/women/short7.webp",
      ],
    },
    {
        id: 3,
        image: "/src/assets/images/women/short3.webp",
        title: "Kalini Trendy Shorts For Women ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Casual, Daily wear",
        includes: "Shorts Only",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/women/short3.webp",
          "/src/assets/images/women/short4.webp",
          "/src/assets/images/women/short5.webp",
          "/src/assets/images/women/short7.webp",
        ],
      },
      {
        id: 4,
        image: "/src/assets/images/women/short4.webp",
        title: "Kalini Trendy Shorts For Women ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Casual, Daily wear",
        includes: "Shorts Only",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/women/short3.webp",
          "/src/assets/images/women/short4.webp",
          "/src/assets/images/women/short5.webp",
          "/src/assets/images/women/short7.webp",
        ],
      },
      {
        id: 5,
        image: "/src/assets/images/women/short5.webp",
        title: "Kalini Trendy Shorts For Women ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Casual, Daily wear",
        includes: "Shorts Only",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/women/short3.webp",
          "/src/assets/images/women/short4.webp",
          "/src/assets/images/women/short5.webp",
          "/src/assets/images/women/short7.webp",
        ],
      },
      {
        id: 6,
        image: "/src/assets/images/women/short6.webp",
        title: "Kalini Trendy Shorts For Women ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Casual, Daily wear",
        includes: "Shorts Only",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/women/short3.webp",
          "/src/assets/images/women/short4.webp",
          "/src/assets/images/women/short5.webp",
          "/src/assets/images/women/short7.webp",
        ],
      },
      {
        id: 7,
        image: "/src/assets/images/women/short7.webp",
        title: "Kalini Trendy Shorts For Women ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Casual, Daily wear",
        includes: "Shorts Only",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/women/short3.webp",
          "/src/assets/images/women/short4.webp",
          "/src/assets/images/women/short5.webp",
          "/src/assets/images/women/short7.webp",
        ],
      },
      {
        id: 8,
        image: "/src/assets/images/women/short8.webp",
        title: "Kalini Trendy Shorts For Women ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Casual, Daily wear",
        includes: "Shorts Only",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/women/short3.webp",
          "/src/assets/images/women/short4.webp",
          "/src/assets/images/women/short5.webp",
          "/src/assets/images/women/short7.webp",
        ],
      },
      {
        id: 9,
        image: "/src/assets/images/women/short1.webp",
        title: "Kalini Trendy Shorts For Women ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Casual, Daily wear",
        includes: "Shorts Only",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/women/short3.webp",
          "/src/assets/images/women/short4.webp",
          "/src/assets/images/women/short5.webp",
          "/src/assets/images/women/short7.webp",
        ],
      },
      {
        id: 10,
        image: "/src/assets/images/women/short2.webp",
        title: "Kalini Trendy Shorts For Women ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Casual, Daily wear",
        includes: "Shorts Only",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/women/short3.webp",
          "/src/assets/images/women/short4.webp",
          "/src/assets/images/women/short5.webp",
          "/src/assets/images/women/short7.webp",
        ],
      },
  ];

  // Find the selected product based on the ID from the URL
  const shorts = ShortsDetailsData.find((item) => item.id === parseInt(id));

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
      {shorts ? (
        <>
          <div className="product-gallery">
            <img src={shorts.image} alt={shorts.title} className="main-image" />
          </div>
          <div className="product-details">
            <h1>{shorts.title}</h1>
            <div className="product-price">
              <span className="price">{shorts.price}</span>
              <span className="discounted-price">{shorts.discountedPrice}</span>
              <span className="discount">{shorts.discount}</span>
            </div>

            <div className="size-options">
              <label>Size:</label>
              <select>
                {shorts.sizes.map((size, index) => (
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
                <li><strong>Fabric:</strong> {shorts.fabric}</li>
                <li><strong>Work:</strong> {shorts.work}</li>
                <li><strong>Pattern:</strong> {shorts.pattern}</li>
                <li><strong>Includes:</strong> {shorts.includes}</li>
              </ul>
            </div>

            <div className="product-reviews">
              <h3>Customer Ratings and Reviews :</h3>
              <p>{shorts.reviews.rating} ({shorts.reviews.totalReviews} reviews)</p>
              <ul>
                <li><strong>Fit:</strong> {shorts.reviews.fit}</li>
                <li><strong>Quality:</strong> {shorts.reviews.quality}</li>
                <li><strong>Comfort:</strong> {shorts.reviews.comfort}</li>
              </ul>
            </div>

            <div className="similar-products">
              <h3>Similar Products :</h3>
              <div className="product-grid">
                {shorts.similarProducts.map((similarProduct, index) => (
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

export default ShortsDetails;
