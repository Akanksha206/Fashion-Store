import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductStyles/ProductStyle.css';

const TeesDetails = () => {
  const { id } = useParams();  // Get product ID from URL
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  const TeesDetailsData = [
    {
      id: 1,
      image: "/src/assets/images/kids/tees1.webp",
      title: "Kalini T-Shirts Collections For Kids ",
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
        "/src/assets/images/kids/tees3.webp",
        "/src/assets/images/kids/tees6.webp",
        "/src/assets/images/kids/tees1.webp",
        "/src/assets/images/kids/tees2.jpg",
      ],
    },
    {
      id: 2,
      image: "/src/assets/images/kids/tees2.jpg",
      title: "Kalini T-Shirts Collections For Kids ",
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
        "/src/assets/images/kids/tees3.webp",
        "/src/assets/images/kids/tees6.webp",
        "/src/assets/images/kids/tees1.webp",
        "/src/assets/images/kids/tees4.jpg",
      ],
    },
    {
        id: 3,
        image: "/src/assets/images/kids/tees3.webp",
        title: "Kalini T-Shirts Collections For Kids ",
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
          "/src/assets/images/kids/tees3.webp",
          "/src/assets/images/kids/tees6.webp",
          "/src/assets/images/kids/tees1.webp",
          "/src/assets/images/kids/tees2.jpg",
        ],
      },
      {
        id: 4,
        image: "/src/assets/images/kids/tees4.jpg",
        title: "Kalini T-Shirts Collections For Kids ",
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
          "/src/assets/images/kids/tees3.webp",
          "/src/assets/images/kids/tees6.webp",
          "/src/assets/images/kids/tees1.webp",
          "/src/assets/images/kids/tees2.jpg",
        ],
      },
      {
        id: 5,
        image: "/src/assets/images/kids/tees5.jpg",
        title: "Kalini T-Shirts Collections For Kids ",
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
          "/src/assets/images/kids/tees3.webp",
          "/src/assets/images/kids/tees6.webp",
          "/src/assets/images/kids/tees1.webp",
          "/src/assets/images/kids/tees2.jpg",
        ],
      },
      {
        id: 6,
        image: "/src/assets/images/kids/tees6.webp",
        title: "Kalini T-Shirts Collections For Kids ",
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
          "/src/assets/images/kids/tees3.webp",
          "/src/assets/images/kids/tees6.webp",
          "/src/assets/images/kids/tees1.webp",
          "/src/assets/images/kids/tees2.jpg",
        ],
      },
      {
        id: 7,
        image: "/src/assets/images/kids/tees3.webp",
        title: "Kalini T-Shirts Collections For Kids ",
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
          "/src/assets/images/kids/tees3.webp",
          "/src/assets/images/kids/tees6.webp",
          "/src/assets/images/kids/tees1.webp",
          "/src/assets/images/kids/tees2.jpg",
        ],
      },
      {
        id: 8,
        image: "/src/assets/images/kids/tees4.jpg",
        title: "Kalini T-Shirts Collections For Kids ",
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
          "/src/assets/images/kids/tees3.webp",
          "/src/assets/images/kids/tees6.webp",
          "/src/assets/images/kids/tees1.webp",
          "/src/assets/images/kids/tees2.jpg",
        ],
      },
      {
        id: 9,
        image: "/src/assets/images/kids/tees5.jpg",
        title: "Kalini T-Shirts Collections For Kids ",
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
          "/src/assets/images/kids/tees3.webp",
          "/src/assets/images/kids/tees6.webp",
          "/src/assets/images/kids/tees1.webp",
          "/src/assets/images/kids/tees2.jpg",
        ],
      },
      {
        id: 10,
        image: "/src/assets/images/kids/tees6.webp",
        title: "Kalini T-Shirts Collections For Kids ",
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
          "/src/assets/images/kids/tees3.webp",
          "/src/assets/images/kids/tees6.webp",
          "/src/assets/images/kids/tees1.webp",
          "/src/assets/images/kids/tees2.jpg",
        ],
      },
  ];

  // Find the selected product based on the ID from the URL
  const tees = TeesDetailsData.find((item) => item.id === parseInt(id));

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
      {tees ? (
        <>
          <div className="product-gallery">
            <img src={tees.image} alt={tees.title} className="main-image" />
          </div>
          <div className="product-details">
            <h1>{tees.title}</h1>
            <div className="product-price">
              <span className="price">{tees.price}</span>
              <span className="discounted-price">{tees.discountedPrice}</span>
              <span className="discount">{tees.discount}</span>
            </div>

            <div className="size-options">
              <label>Size:</label>
              <select>
                {tees.sizes.map((size, index) => (
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
                <li><strong>Fabric:</strong> {tees.fabric}</li>
                <li><strong>Work:</strong> {tees.work}</li>
                <li><strong>Pattern:</strong> {tees.pattern}</li>
                {/* <li><strong>Includes:</strong> {tees.includes}</li> */}
              </ul>
            </div>

            <div className="product-reviews">
              <h3>Customer Ratings and Reviews :</h3>
              <p>{tees.reviews.rating} ({tees.reviews.totalReviews} reviews)</p>
              <ul>
                <li><strong>Fit:</strong> {tees.reviews.fit}</li>
                <li><strong>Quality:</strong> {tees.reviews.quality}</li>
                <li><strong>Comfort:</strong> {tees.reviews.comfort}</li>
              </ul>
            </div>

            <div className="similar-products">
              <h3>Similar Products :</h3>
              <div className="product-grid">
                {tees.similarProducts.map((similarProduct, index) => (
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

export default TeesDetails;
