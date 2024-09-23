import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductStyles/ProductStyle.css';

const OversizedDetails = () => {
  const { id } = useParams();  // Get product ID from URL
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  const OversizedDetailsData = [
    {
      id: 1,
      image: "/src/assets/images/men/tees1.webp",
      title: "Kalini Oversized T-Shirts Collections For Men",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Cotton",
      work: "Thread Work",
      pattern: "Floral",
      includes: "Trousers",
      reviews: {
        rating: "4.3 ★",
        totalReviews: 112,
        fit: "True to size",
        quality: "Good",
        comfort: "Comfortable",
      },
      similarProducts: [
        "/src/assets/images/men/tees3.webp",
        "/src/assets/images/men/tees4.webp",
        "/src/assets/images/men/tees5.webp",
        "/src/assets/images/men/tees7.webp",
      ],
    },
    {
      id: 2,
      image: "/src/assets/images/men/tees2.webp",
      title: "Kalini Oversized T-Shirts Collections For Men",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Cotton",
      work: "Thread Work",
      pattern: "Floral",
      includes: "Trousers",
      reviews: {
        rating: "4.3 ★",
        totalReviews: 112,
        fit: "True to size",
        quality: "Good",
        comfort: "Comfortable",
      },
      similarProducts: [
        "/src/assets/images/men/tees3.webp",
        "/src/assets/images/men/tees4.webp",
        "/src/assets/images/men/tees5.webp",
        "/src/assets/images/men/tees7.webp",
      ],
    },
    {
        id: 3,
        image: "/src/assets/images/men/tees3.webp",
        title: "Kalini Oversized T-Shirts Collections For Men",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Cotton",
      work: "Thread Work",
      pattern: "Floral",
      includes: "Trousers",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/men/tees3.webp",
          "/src/assets/images/men/tees4.webp",
          "/src/assets/images/men/tees5.webp",
          "/src/assets/images/men/tees7.webp",
        ],
      },
      {
        id: 4,
        image: "/src/assets/images/men/tees4.webp",
        title: "Kalini Oversized T-Shirts Collections For Men",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Floral",
        includes: "Trousers",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/men/tees3.webp",
          "/src/assets/images/men/tees4.webp",
          "/src/assets/images/men/tees5.webp",
          "/src/assets/images/men/tees7.webp",
        ],
      },
      {
        id: 5,
        image: "/src/assets/images/men/tees5.webp",
        title: "Kalini Oversized T-Shirts Collections For Men",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Floral",
        includes: "Trousers",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/men/tees3.webp",
          "/src/assets/images/men/tees4.webp",
          "/src/assets/images/men/tees5.webp",
          "/src/assets/images/men/tees7.webp",
        ],
      },
      {
        id: 6,
        image: "/src/assets/images/men/tees6.webp",
        title: "Kalini Oversized T-Shirts Collections For Men",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Cotton",
      work: "Thread Work",
      pattern: "Floral",
      includes: "Trousers",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/men/tees3.webp",
          "/src/assets/images/men/tees4.webp",
          "/src/assets/images/men/tees5.webp",
          "/src/assets/images/men/tees7.webp",
        ],
      },
      {
        id: 7,
        image: "/src/assets/images/men/tees7.webp",
        title: "Kalini Oversized T-Shirts Collections For Men",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Cotton",
      work: "Thread Work",
      pattern: "Floral",
      includes: "Trousers",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/men/tees3.webp",
          "/src/assets/images/men/tees4.webp",
          "/src/assets/images/men/tees5.webp",
          "/src/assets/images/men/tees7.webp",
        ],
      },
      {
        id: 8,
        image: "/src/assets/images/men/tees8.webp",
        title: "Kalini Oversized T-Shirts Collections For Men",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Floral",
        includes: "Trousers",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/men/tees3.webp",
          "/src/assets/images/men/tees4.webp",
          "/src/assets/images/men/tees5.webp",
          "/src/assets/images/men/tees7.webp",
        ],
      },
      {
        id: 9,
        image: "/src/assets/images/men/tees9.webp",
        title: "Kalini Oversized T-Shirts Collections For Men",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Cotton",
      work: "Thread Work",
      pattern: "Floral",
      includes: "Trousers",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/men/tees3.webp",
          "/src/assets/images/men/tees4.webp",
          "/src/assets/images/men/tees5.webp",
          "/src/assets/images/men/tees7.webp",
        ],
      },
      {
        id: 10,
        image: "/src/assets/images/men/tees10.webp",
        title: "Kalini Oversized T-Shirts Collections For Men",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Cotton",
      work: "Thread Work",
      pattern: "Floral",
      includes: "Trousers",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/men/tees3.webp",
          "/src/assets/images/men/tees4.webp",
          "/src/assets/images/men/tees5.webp",
          "/src/assets/images/men/tees7.webp",
        ],
      },
  ];

  // Find the selected product based on the ID from the URL
  const oversized = OversizedDetailsData.find((item) => item.id === parseInt(id));

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
      {oversized ? (
        <>
          <div className="product-gallery">
            <img src={oversized.image} alt={oversized.title} className="main-image" />
          </div>
          <div className="product-details">
            <h1>{oversized.title}</h1>
            <div className="product-price">
              <span className="price">{oversized.price}</span>
              <span className="discounted-price">{oversized.discountedPrice}</span>
              <span className="discount">{oversized.discount}</span>
            </div>

            <div className="size-options">
              <label>Size:</label>
              <select>
                {oversized.sizes.map((size, index) => (
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
                <li><strong>Fabric:</strong> {oversized.fabric}</li>
                <li><strong>Work:</strong> {oversized.work}</li>
                <li><strong>Pattern:</strong> {oversized.pattern}</li>
                <li><strong>Includes:</strong> {oversized.includes}</li>
              </ul>
            </div>

            <div className="product-reviews">
              <h3>Customer Ratings and Reviews :</h3>
              <p>{oversized.reviews.rating} ({oversized.reviews.totalReviews} reviews)</p>
              <ul>
                <li><strong>Fit:</strong> {oversized.reviews.fit}</li>
                <li><strong>Quality:</strong> {oversized.reviews.quality}</li>
                <li><strong>Comfort:</strong> {oversized.reviews.comfort}</li>
              </ul>
            </div>

            <div className="similar-products">
              <h3>Similar Products :</h3>
              <div className="product-grid">
                {oversized.similarProducts.map((similarProduct, index) => (
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

export default OversizedDetails;
