import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductStyles/ProductStyle.css';

const SareesDetails = () => {
  const { id } = useParams();  // Get product ID from URL
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  const SareesDetailsData = [
    {
      id: 1,
      image: "/src/assets/images/women/saree1.webp",
      title: "Kalini Designer Saree Collection For Women",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Cotton",
      work: "Thread Work",
      pattern: "Party Wear, Traditional",
      includes: "Designer Blouse",
      reviews: {
        rating: "4.3 ★",
        totalReviews: 112,
        fit: "True to size",
        quality: "Good",
        comfort: "Comfortable",
      },
      similarProducts: [
        "/src/assets/images/women/saree7.webp",
        "/src/assets/images/women/saree6.webp",
        "/src/assets/images/women/saree10.webp",
        "/src/assets/images/women/saree9.webp",
      ],
    },
    {
      id: 2,
      image: "/src/assets/images/women/saree2.webp",
      title: "Kalini Designer Saree Collection For Women",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      fabric: "Cotton",
      work: "Thread Work",
      pattern: "Party Wear, Traditional",
      includes: "Designer Blouse",
      reviews: {
        rating: "4.3 ★",
        totalReviews: 112,
        fit: "True to size",
        quality: "Good",
        comfort: "Comfortable",
      },
      similarProducts: [
        "/src/assets/images/women/saree7.webp",
        "/src/assets/images/women/saree6.webp",
        "/src/assets/images/women/saree10.webp",
        "/src/assets/images/women/saree9.webp",
      ],
    },
    {
        id: 3,
        image: "/src/assets/images/women/saree3.webp",
        title: "Kalini Designer Saree Collection For Women",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Party Wear, Traditional",
        includes: "Designer Blouse",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
            "/src/assets/images/women/saree7.webp",
            "/src/assets/images/women/saree6.webp",
            "/src/assets/images/women/saree10.webp",
            "/src/assets/images/women/saree9.webp",
        ],
      },
      {
        id: 4,
        image: "/src/assets/images/women/saree4.webp",
        title: "Kalini Designer Saree Collection For Women",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Party Wear, Traditional",
        includes: "Designer Blouse",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
            "/src/assets/images/women/saree7.webp",
            "/src/assets/images/women/saree6.webp",
            "/src/assets/images/women/saree10.webp",
            "/src/assets/images/women/saree9.webp",
        ],
      },
      {
        id: 5,
        image: "/src/assets/images/women/saree5.webp",
        title: "Kalini Designer Saree Collection For Women",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Party Wear, Traditional",
        includes: "Designer Blouse",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
            "/src/assets/images/women/saree7.webp",
            "/src/assets/images/women/saree6.webp",
            "/src/assets/images/women/saree10.webp",
            "/src/assets/images/women/saree9.webp",
        ],
      },
      {
        id: 6,
        image: "/src/assets/images/women/saree6.webp",
        title: "Kalini Designer Saree Collection For Women",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Party Wear, Traditional",
        includes: "Designer Blouse",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
            "/src/assets/images/women/saree7.webp",
            "/src/assets/images/women/saree6.webp",
            "/src/assets/images/women/saree10.webp",
            "/src/assets/images/women/saree9.webp",
        ],
      },
      {
        id: 7,
        image: "/src/assets/images/women/saree7.webp",
        title: "Kalini Designer Saree Collection For Women",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Party Wear, Traditional",
        includes: "Designer Blouse",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
            "/src/assets/images/women/saree7.webp",
            "/src/assets/images/women/saree6.webp",
            "/src/assets/images/women/saree10.webp",
            "/src/assets/images/women/saree9.webp",
        ],
      },
      {
        id: 8,
        image: "/src/assets/images/women/saree8.webp",
        title: "Kalini Designer Saree Collection For Women",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Party Wear, Traditional",
        includes: "Designer Blouse",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
            "/src/assets/images/women/saree7.webp",
            "/src/assets/images/women/saree6.webp",
            "/src/assets/images/women/saree10.webp",
            "/src/assets/images/women/saree9.webp",
        ],
      },
      {
        id: 9,
        image: "/src/assets/images/women/saree9.webp",
        title: "Kalini Designer Saree Collection For Women",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Party Wear, Traditional",
        includes: "Designer Blouse",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
            "/src/assets/images/women/saree7.webp",
            "/src/assets/images/women/saree6.webp",
            "/src/assets/images/women/saree10.webp",
            "/src/assets/images/women/saree9.webp",
        ],
      },
      {
        id: 10,
        image: "/src/assets/images/women/saree10.webp",
        title: "Kalini Designer Saree Collection For Women",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "Cotton",
        work: "Thread Work",
        pattern: "Party Wear, Traditional",
        includes: "Designer Blouse",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
            "/src/assets/images/women/saree7.webp",
            "/src/assets/images/women/saree6.webp",
            "/src/assets/images/women/saree10.webp",
            "/src/assets/images/women/saree9.webp",
        ],
      },
  ];

  // Find the selected product based on the ID from the URL
  const sarees = SareesDetailsData.find((item) => item.id === parseInt(id));

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
      {sarees? (
        <>
          <div className="product-gallery">
            <img src={sarees.image} alt={sarees.title} className="main-image" />
          </div>
          <div className="product-details">
            <h1>{sarees.title}</h1>
            <div className="product-price">
              <span className="price">{sarees.price}</span>
              <span className="discounted-price">{sarees.discountedPrice}</span>
              <span className="discount">{sarees.discount}</span>
            </div>

            <div className="size-options">
              <label>Size:</label>
              <select>
                {sarees.sizes.map((size, index) => (
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
                <li><strong>Fabric:</strong> {sarees.fabric}</li>
                <li><strong>Work:</strong> {sarees.work}</li>
                <li><strong>Pattern:</strong> {sarees.pattern}</li>
                <li><strong>Includes:</strong> {sarees.includes}</li>
              </ul>
            </div>

            <div className="product-reviews">
              <h3>Customer Ratings and Reviews :</h3>
              <p>{sarees.reviews.rating} ({sarees.reviews.totalReviews} reviews)</p>
              <ul>
                <li><strong>Fit:</strong> {sarees.reviews.fit}</li>
                <li><strong>Quality:</strong> {sarees.reviews.quality}</li>
                <li><strong>Comfort:</strong> {sarees.reviews.comfort}</li>
              </ul>
            </div>

            <div className="similar-products">
              <h3>Similar Products :</h3>
              <div className="product-grid">
                {sarees.similarProducts.map((similarProduct, index) => (
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

export default SareesDetails;
