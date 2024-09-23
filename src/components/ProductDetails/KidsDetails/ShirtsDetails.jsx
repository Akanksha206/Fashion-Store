import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductStyles/ProductStyle.css';

const ShirtDetails = () => {
  const { id } = useParams();  // Get product ID from URL
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  const ShirtDetailsData = [
    {
      id: 1,
      image: "/src/assets/images/kids/shirt1.webp",
      title: "Kalini Shirts Collections For Kids ",
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
        "/src/assets/images/kids/shirt3.webp",
        "/src/assets/images/kids/shirt4.webp",
        "/src/assets/images/kids/shirt1.webp",
        "/src/assets/images/kids/shirt2.webp",
      ],
    },
    {
      id: 2,
      image: "/src/assets/images/kids/shirt2.webp",
      title: "Kalini Shirts Collections For Kids ",
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
        "/src/assets/images/kids/shirt3.webp",
        "/src/assets/images/kids/shirt4.webp",
        "/src/assets/images/kids/shirt1.webp",
        "/src/assets/images/kids/shirt2.webp",
      ],
    },
    {
        id: 3,
        image: "/src/assets/images/kids/shirt3.webp",
        title: "Kalini Shirts Collections For Kids ",
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
          "/src/assets/images/kids/shirt3.webp",
          "/src/assets/images/kids/shirt4.webp",
          "/src/assets/images/kids/shirt1.webp",
          "/src/assets/images/kids/shirt2.webp",
        ],
      },
      {
        id: 4,
        image: "/src/assets/images/kids/shirt4.webp",
        title: "Kalini Shirts Collections For Kids ",
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
          "/src/assets/images/kids/shirt3.webp",
          "/src/assets/images/kids/shirt4.webp",
          "/src/assets/images/kids/shirt1.webp",
          "/src/assets/images/kids/shirt2.webp",
        ],
      },
      {
        id: 5,
        image: "/src/assets/images/kids/shirt1.webp",
        title: "Kalini Shirts Collections For Kids ",
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
          "/src/assets/images/kids/shirt3.webp",
          "/src/assets/images/kids/shirt4.webp",
          "/src/assets/images/kids/shirt1.webp",
          "/src/assets/images/kids/shirt2.webp",
        ],
      },
      {
        id: 6,
        image: "/src/assets/images/kids/shirt2.webp",
        title: "Kalini Shirts Collections For Kids ",
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
          "/src/assets/images/kids/shirt3.webp",
          "/src/assets/images/kids/shirt4.webp",
          "/src/assets/images/kids/shirt1.webp",
          "/src/assets/images/kids/shirt2.webp",
        ],
      },
      {
        id: 7,
        image: "/src/assets/images/kids/shirt3.webp",
        title: "Kalini Shirts Collections For Kids ",
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
          "/src/assets/images/kids/shirt3.webp",
          "/src/assets/images/kids/shirt4.webp",
          "/src/assets/images/kids/shirt1.webp",
          "/src/assets/images/kids/shirt2.webp",
        ],
      },
      {
        id: 8,
        image: "/src/assets/images/kids/shirt4.webp",
        title: "Kalini Shirts Collections For Kids ",
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
          "/src/assets/images/kids/shirt3.webp",
          "/src/assets/images/kids/shirt4.webp",
          "/src/assets/images/kids/shirt1.webp",
          "/src/assets/images/kids/shirt2.webp",
        ],
      },
  ];

  // Find the selected product based on the ID from the URL
  const shirt = ShirtDetailsData.find((item) => item.id === parseInt(id));

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
      {shirt ? (
        <>
          <div className="product-gallery">
            <img src={shirt.image} alt={shirt.title} className="main-image" />
          </div>
          <div className="product-details">
            <h1>{shirt.title}</h1>
            <div className="product-price">
              <span className="price">{shirt.price}</span>
              <span className="discounted-price">{shirt.discountedPrice}</span>
              <span className="discount">{shirt.discount}</span>
            </div>

            <div className="size-options">
              <label>Size:</label>
              <select>
                {shirt.sizes.map((size, index) => (
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
                <li><strong>Fabric:</strong> {shirt.fabric}</li>
                <li><strong>Work:</strong> {shirt.work}</li>
                <li><strong>Pattern:</strong> {shirt.pattern}</li>
                {/* <li><strong>Includes:</strong> {shirt.includes}</li> */}
              </ul>
            </div>

            <div className="product-reviews">
              <h3>Customer Ratings and Reviews :</h3>
              <p>{shirt.reviews.rating} ({shirt.reviews.totalReviews} reviews)</p>
              <ul>
                <li><strong>Fit:</strong> {shirt.reviews.fit}</li>
                <li><strong>Quality:</strong> {shirt.reviews.quality}</li>
                <li><strong>Comfort:</strong> {shirt.reviews.comfort}</li>
              </ul>
            </div>

            <div className="similar-products">
              <h3>Similar Products :</h3>
              <div className="product-grid">
                {shirt.similarProducts.map((similarProduct, index) => (
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

export default ShirtDetails;
