import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductStyles/ProductStyle.css';

const ShoesDetails = () => {
  const { id } = useParams();  // Get product ID from URL
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  const ShoesDetailsData = [
    {
      id: 1,
      image: "/src/assets/images/accessories/shoe1.jpeg",
      title: "Kalini Fashionable Shoes ",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: "Adjustable",
      Belt: "Leather",
      pattern: "Regular",
      reviews: {
        rating: "4.3 ★",
        totalReviews: 112,
        fit: "True to size",
        quality: "Good",
        comfort: "Comfortable",
      },
      similarProducts: [
        "/src/assets/images/accessories/shoe4.jpeg",
        "/src/assets/images/accessories/shoe5.jpeg",
        "/src/assets/images/accessories/shoe6.jpeg",
        "/src/assets/images/accessories/shoe7.jpeg",
      ],
    },
    {
      id: 2,
      image: "/src/assets/images/accessories/shoe2.jpeg",
      title: "Kalini Fashionable Shoes",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: "Adjustable",
      Belt: "Leather",
      pattern: "Regular",
      reviews: {
        rating: "4.3 ★",
        totalReviews: 112,
        fit: "True to size",
        quality: "Good",
        comfort: "Comfortable",
      },
      similarProducts: [
        "/src/assets/images/accessories/shoe4.jpeg",
        "/src/assets/images/accessories/shoe5.jpeg",
        "/src/assets/images/accessories/shoe6.jpeg",
        "/src/assets/images/accessories/shoe7.jpeg",
      ],
    },
    {
        id: 3,
        image: "/src/assets/images/accessories/shoe3.jpeg",
        title: "Kalini Fashionable Shoes",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: "Adjustable",
        Belt: "Leather",
        pattern: "Regular",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/accessories/shoe5.jpeg",
          "/src/assets/images/accessories/shoe4.jpeg",
          "/src/assets/images/accessories/shoe2.jpeg",
          "/src/assets/images/accessories/shoe6.jpeg",
        ],
      },
      {
        id: 4,
        image: "/src/assets/images/accessories/shoe4.jpeg",
        title: "Kalini Fashionable Shoes",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: "Adjustable",
        Belt: "Leather",
        pattern: "Regular",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/accessories/shoe2.jpeg",
          "/src/assets/images/accessories/shoe4.jpeg",
          "/src/assets/images/accessories/shoe1.jpeg",
          "/src/assets/images/accessories/shoe7.jpeg",
        ],
      },
      {
        id: 5,
        image: "/src/assets/images/accessories/shoe5.jpeg",
        title: "Kalini Fashionable Shoes",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: "Adjustable",
      Belt: "Leather",
      pattern: "Regular",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/accessories/shoe6.jpeg",
          "/src/assets/images/accessories/shoe2.jpeg",
          "/src/assets/images/accessories/shoe8.jpeg",
          "/src/assets/images/accessories/shoe5.jpeg",
        ],
      },     
      {
        id: 6,
        image: "/src/assets/images/accessories/shoe6.jpeg",
        title: "Kalini Fashionable Shoes",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: "Adjustable",
        Belt: "Leather",
        pattern: "Regular",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/accessories/shoe6.jpeg",
          "/src/assets/images/accessories/shoe2.jpeg",
          "/src/assets/images/accessories/shoe8.jpeg",
          "/src/assets/images/accessories/shoe5.jpeg",
        ],
      },  
      {
        id: 7,
        image: "/src/assets/images/accessories/shoe7.jpeg",
        title: "Kalini Fashionable Shoes",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: "Adjustable",
        Belt: "Leather",
        pattern: "Regular",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/accessories/shoe6.jpeg",
          "/src/assets/images/accessories/shoe2.jpeg",
          "/src/assets/images/accessories/shoe8.jpeg",
          "/src/assets/images/accessories/shoe5.jpeg",
        ],
      },  
      {
        id: 8,
        image: "/src/assets/images/accessories/shoe8.webp",
        title: "Kalini Fashionable Shoes",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: "Adjustable",
        Belt: "Leather",
        pattern: "Regular",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/accessories/shoe6.jpeg",
          "/src/assets/images/accessories/shoe2.jpeg",
          "/src/assets/images/accessories/shoe8.jpeg",
          "/src/assets/images/accessories/shoe5.jpeg",
        ],
      },  
      {
        id: 9,
        image: "/src/assets/images/accessories/shoe9.jpeg",
        title: "Kalini Fashionable Shoes",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: "Adjustable",
      Belt: "Leather",
      pattern: "Regular",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/accessories/shoe6.jpeg",
          "/src/assets/images/accessories/shoes2.jpeg",
          "/src/assets/images/accessories/shoes8.jpeg",
          "/src/assets/images/accessories/shoe5.jpeg",
        ],
      },  
  ];

  // Find the selected product based on the ID from the URL
  const shoes = ShoesDetailsData .find((item) => item.id === parseInt(id));

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
      {shoes ? (
        <>
          <div className="product-gallery">
            <img src={shoes.image} alt={shoes.title} className="main-image" />
          </div>
          <div className="product-details">
            <h1>{shoes.title}</h1>
            <div className="product-price">
              <span className="price">{shoes.price}</span>
              <span className="discounted-price">{shoes.discountedPrice}</span>
              <span className="discount">{shoes.discount}</span>
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
              <li><strong>Size:</strong> {shoes.sizes}</li>
                <li><strong>Belt:</strong> {shoes.Belt}</li>
                <li><strong>Pattern:</strong> {shoes.pattern}</li>
              </ul>
            </div>

            <div className="product-reviews">
              <h3>Customer Ratings and Reviews :</h3>
              <p>{shoes.reviews.rating} ({shoes.reviews.totalReviews} reviews)</p>
              <ul>
                <li><strong>Fit:</strong> {shoes.reviews.fit}</li>
                <li><strong>Quality:</strong> {shoes.reviews.quality}</li>
                <li><strong>Comfort:</strong> {shoes.reviews.comfort}</li>
              </ul>
            </div>

            <div className="similar-products">
              <h3>Similar Products :</h3>
              <div className="product-grid">
                {shoes.similarProducts.map((similarProduct, index) => (
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

export default ShoesDetails;
