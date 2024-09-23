import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductStyles/ProductStyle.css';

const RompersDetails = () => {
  const { id } = useParams();  // Get product ID from URL
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  const RompersDetailsData = [
    {
      id: 1,
      image: "/src/assets/images/kids/rompers1.webp",
      title: "Kalini Rompers Collections For Kids ",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Cotton",
      work: "Thread Work",
      pattern: "Floral",
      reviews: {
        rating: "4.3 ★",
        totalReviews: 112,
        fit: "True to size",
        quality: "Good",
        comfort: "Comfortable",
      },
      similarProducts: [
        "/src/assets/images/kids/rompers3.webp",
        "/src/assets/images/kids/rompers4.webp",
        "/src/assets/images/kids/rompers1.webp",
        "/src/assets/images/kids/rompers2.webp",
      ],
    },
    {
      id: 2,
      image: "/src/assets/images/kids/rompers2.webp",
      title: "Kalini Rompers Collections For Kids ",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Cotton",
      work: "Thread Work",
      pattern: "Floral",
      reviews: {
        rating: "4.3 ★",
        totalReviews: 112,
        fit: "True to size",
        quality: "Good",
        comfort: "Comfortable",
      },
      similarProducts: [
        "/src/assets/images/kids/rompers3.webp",
        "/src/assets/images/kids/rompers4.webp",
        "/src/assets/images/kids/rompers1.webp",
        "/src/assets/images/kids/rompers2.webp",
      ],
    },
    {
        id: 3,
        image: "/src/assets/images/kids/rompers3.webp",
        title: "Kalini Rompers Collections For Kids ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Floral",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/kids/rompers3.webp",
          "/src/assets/images/kids/rompers4.webp",
          "/src/assets/images/kids/rompers1.webp",
          "/src/assets/images/kids/rompers2.webp",
        ],
      },
      {
        id: 4,
        image: "/src/assets/images/kids/rompers4.webp",
        title: "Kalini Rompers Collections For Kids ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Floral",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/kids/rompers3.webp",
          "/src/assets/images/kids/rompers4.webp",
          "/src/assets/images/kids/rompers1.webp",
          "/src/assets/images/kids/rompers2.webp",
        ],
      },
      {
        id: 5,
        image: "/src/assets/images/kids/rompers1.webp",
        title: "Kalini Rompers Collections For Kids ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Floral",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/kids/rompers3.webp",
          "/src/assets/images/kids/rompers4.webp",
          "/src/assets/images/kids/rompers1.webp",
          "/src/assets/images/kids/rompers2.webp",
        ],
      },
      {
        id: 6,
        image: "/src/assets/images/kids/rompers2.webp",
        title: "Kalini Rompers Collections For Kids ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Floral",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/kids/rompers3.webp",
          "/src/assets/images/kids/rompers4.webp",
          "/src/assets/images/kids/rompers1.webp",
          "/src/assets/images/kids/rompers2.webp",
        ],
      },
      {
        id: 7,
        image: "/src/assets/images/kids/rompers3.webp",
        title: "Kalini Rompers Collections For Kids ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Floral",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/kids/rompers3.webp",
          "/src/assets/images/kids/rompers4.webp",
          "/src/assets/images/kids/rompers1.webp",
          "/src/assets/images/kids/rompers2.webp",
        ],
      },
     
  ];

  // Find the selected product based on the ID from the URL
  const rompers = RompersDetailsData.find((item) => item.id === parseInt(id));

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
      {rompers ? (
        <>
          <div className="product-gallery">
            <img src={rompers.image} alt={rompers.title} className="main-image" />
          </div>
          <div className="product-details">
            <h1>{rompers.title}</h1>
            <div className="product-price">
              <span className="price">{rompers.price}</span>
              <span className="discounted-price">{rompers.discountedPrice}</span>
              <span className="discount">{rompers.discount}</span>
            </div>

            <div className="size-options">
              <label>Size:</label>
              <select>
                {rompers.sizes.map((size, index) => (
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
                <li><strong>Fabric:</strong> {rompers.fabric}</li>
                <li><strong>Work:</strong> {rompers.work}</li>
                <li><strong>Pattern:</strong> {rompers.pattern}</li>
                {/* <li><strong>Includes:</strong> {rompers.includes}</li> */}
              </ul>
            </div>

            <div className="product-reviews">
              <h3>Customer Ratings and Reviews :</h3>
              <p>{rompers.reviews.rating} ({rompers.reviews.totalReviews} reviews)</p>
              <ul>
                <li><strong>Fit:</strong> {rompers.reviews.fit}</li>
                <li><strong>Quality:</strong> {rompers.reviews.quality}</li>
                <li><strong>Comfort:</strong> {rompers.reviews.comfort}</li>
              </ul>
            </div>

            <div className="similar-products">
              <h3>Similar Products :</h3>
              <div className="product-grid">
                {rompers.similarProducts.map((similarProduct, index) => (
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

export default RompersDetails;
