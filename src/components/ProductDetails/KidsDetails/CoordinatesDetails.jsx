import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductStyles/ProductStyle.css';

const CoordinatesDetails = () => {
  const { id } = useParams();  // Get product ID from URL
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  const CoordinatesDetailsData = [
    {
      id: 1,
      image: "/src/assets/images/kids/Co-ord1.webp",
      title: "Kalini Co-Ordinates Sets For Kids ",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Cotton",
      work: "Thread Work",
      pattern: "Casual",
      reviews: {
        rating: "4.3 ★",
        totalReviews: 112,
        fit: "True to size",
        quality: "Good",
        comfort: "Comfortable",
      },
      similarProducts: [
        "/src/assets/images/kids/Co-ord3.webp",
        "/src/assets/images/kids/Co-ord4.webp",
        "/src/assets/images/kids/Co-ord1.webp",
        "/src/assets/images/kids/Co-ord2.webp",
      ],
    },
    {
      id: 2,
      image: "/src/assets/images/kids/Co-ord2.webp",
      title: "Kalini Co-Ordinates Sets For Kids ",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Cotton",
      work: "Thread Work",
      pattern: "Casual",
      reviews: {
        rating: "4.3 ★",
        totalReviews: 112,
        fit: "True to size",
        quality: "Good",
        comfort: "Comfortable",
      },
      similarProducts: [
        "/src/assets/images/kids/Co-ord3.webp",
        "/src/assets/images/kids/Co-ord4.webp",
        "/src/assets/images/kids/Co-ord1.webp",
        "/src/assets/images/kids/Co-ord2.webp",
      ],
    },
    {
        id: 3,
        image: "/src/assets/images/kids/Co-ord3.webp",
        title: "Kalini Co-Ordinates Sets For Kids ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Casual",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/kids/Co-ord3.webp",
          "/src/assets/images/kids/Co-ord4.webp",
          "/src/assets/images/kids/Co-ord1.webp",
          "/src/assets/images/kids/Co-ord2.webp",
        ],
      },
      {
        id: 4,
        image: "/src/assets/images/kids/Co-ord4.webp",
        title: "Kalini Co-Ordinates Sets For Kids ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Casual",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/kids/Co-ord3.webp",
          "/src/assets/images/kids/Co-ord4.webp",
          "/src/assets/images/kids/Co-ord1.webp",
          "/src/assets/images/kids/Co-ord2.webp",
        ],
      },
      {
        id: 5,
        image: "/src/assets/images/kids/Co-ord5.webp",
        title: "Kalini Co-Ordinates Sets For Kids ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Casual",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/kids/Co-ord3.webp",
          "/src/assets/images/kids/Co-ord4.webp",
          "/src/assets/images/kids/Co-ord1.webp",
          "/src/assets/images/kids/Co-ord2.webp",
        ],
      },
      {
        id: 6,
        image: "/src/assets/images/kids/Co-ord1.webp",
        title: "Kalini Co-Ordinates Sets For Kids ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Casual",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/kids/Co-ord3.webp",
          "/src/assets/images/kids/Co-ord4.webp",
          "/src/assets/images/kids/Co-ord1.webp",
          "/src/assets/images/kids/Co-ord2.webp",
        ],
      },
      {
        id: 7,
        image: "/src/assets/images/kids/Co-ord2.webp",
        title: "Kalini Co-Ordinates Sets For Kids ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Casual",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/kids/Co-ord3.webp",
          "/src/assets/images/kids/Co-ord4.webp",
          "/src/assets/images/kids/Co-ord1.webp",
          "/src/assets/images/kids/Co-ord2.webp",
        ],
      },
      {
        id: 8,
        image: "/src/assets/images/kids/Co-ord3.webp",
        title: "Kalini Co-Ordinates Sets For Kids ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Casual",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/kids/Co-ord3.webp",
          "/src/assets/images/kids/Co-ord4.webp",
          "/src/assets/images/kids/Co-ord1.webp",
          "/src/assets/images/kids/Co-ord2.webp",
        ],
      },
  ];

  // Find the selected product based on the ID from the URL
  const coordinates = CoordinatesDetailsData.find((item) => item.id === parseInt(id));

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
      {coordinates ? (
        <>
          <div className="product-gallery">
            <img src={coordinates.image} alt={coordinates.title} className="main-image" />
          </div>
          <div className="product-details">
            <h1>{coordinates.title}</h1>
            <div className="product-price">
              <span className="price">{coordinates.price}</span>
              <span className="discounted-price">{coordinates.discountedPrice}</span>
              <span className="discount">{coordinates.discount}</span>
            </div>

            <div className="size-options">
              <label>Size:</label>
              <select>
                {coordinates.sizes.map((size, index) => (
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
                <li><strong>Fabric:</strong> {coordinates.fabric}</li>
                <li><strong>Work:</strong> {coordinates.work}</li>
                <li><strong>Pattern:</strong> {coordinates.pattern}</li>
              </ul>
            </div>

            <div className="product-reviews">
              <h3>Customer Ratings and Reviews :</h3>
              <p>{coordinates.reviews.rating} ({coordinates.reviews.totalReviews} reviews)</p>
              <ul>
                <li><strong>Fit:</strong> {coordinates.reviews.fit}</li>
                <li><strong>Quality:</strong> {coordinates.reviews.quality}</li>
                <li><strong>Comfort:</strong> {coordinates.reviews.comfort}</li>
              </ul>
            </div>

            <div className="similar-products">
              <h3>Similar Products :</h3>
              <div className="product-grid">
                {coordinates.similarProducts.map((similarProduct, index) => (
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

export default CoordinatesDetails;
