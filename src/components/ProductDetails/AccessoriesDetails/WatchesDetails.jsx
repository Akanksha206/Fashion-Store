import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductStyles/ProductStyle.css';

const WatchesDetails = () => {
  const { id } = useParams();  // Get product ID from URL
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  const WatchDetailsData = [
    {
      id: 1,
      image: "/src/assets/images/accessories/watch1.webp",
      title: "Fastrack Watches for Male/Female ",
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
        "/src/assets/images/accessories/watch4.webp",
        "/src/assets/images/accessories/watch5.webp",
        "/src/assets/images/accessories/watch6.webp",
        "/src/assets/images/accessories/watch7.webp",
      ],
    },
    {
      id: 2,
      image: "/src/assets/images/accessories/watch2.webp",
      title: "Fastrack Watches for Male/Female ",
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
        "/src/assets/images/accessories/watch4.webp",
        "/src/assets/images/accessories/watch5.webp",
        "/src/assets/images/accessories/watch6.webp",
        "/src/assets/images/accessories/watch7.webp",
      ],
    },
    {
        id: 3,
        image: "/src/assets/images/accessories/watch3.webp",
        title: "Fastrack Watches for Male/Female ",
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
          "/src/assets/images/accessories/watch5.webp",
          "/src/assets/images/accessories/watch4.webp",
          "/src/assets/images/accessories/watch2.webp",
          "/src/assets/images/accessories/watch6.webp",
        ],
      },
      {
        id: 4,
        image: "/src/assets/images/accessories/watch4.webp",
        title: "Fastrack Watches for Male/Female ",
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
          "/src/assets/images/accessories/watch2.webp",
          "/src/assets/images/accessories/watch4.webp",
          "/src/assets/images/accessories/watch1.webp",
          "/src/assets/images/accessories/watch7.webp",
        ],
      },
      {
        id: 5,
        image: "/src/assets/images/accessories/watch5.webp",
        title: "Fastrack Watches for Male/Female ",
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
          "/src/assets/images/accessories/watch6.webp",
          "/src/assets/images/accessories/watch2.webp",
          "/src/assets/images/accessories/watch4.webp",
          "/src/assets/images/accessories/watch5.webp",
        ],
      },     
      {
        id: 6,
        image: "/src/assets/images/accessories/watch6.webp",
        title: "Fastrack Watches for Male/Female ",
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
          "/src/assets/images/accessories/watch6.webp",
          "/src/assets/images/accessories/watch2.webp",
          "/src/assets/images/accessories/watch4.webp",
          "/src/assets/images/accessories/watch5.webp",
        ],
      },  
      {
        id: 7,
        image: "/src/assets/images/accessories/watch7.webp",
        title: "Fastrack Watches for Male/Female ",
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
          "/src/assets/images/accessories/watch6.webp",
          "/src/assets/images/accessories/watch2.webp",
          "/src/assets/images/accessories/watch7.webp",
          "/src/assets/images/accessories/watch5.webp",
        ],
      },  
  ];

  // Find the selected product based on the ID from the URL
  const watch = WatchDetailsData .find((item) => item.id === parseInt(id));

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
      {watch ? (
        <>
          <div className="product-gallery">
            <img src={watch.image} alt={watch.title} className="main-image" />
          </div>
          <div className="product-details">
            <h1>{watch.title}</h1>
            <div className="product-price">
              <span className="price">{watch.price}</span>
              <span className="discounted-price">{watch.discountedPrice}</span>
              <span className="discount">{watch.discount}</span>
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
                <li><strong>Size:</strong> {watch.sizes}</li>
                <li><strong>Belt:</strong> {watch.Belt}</li>
                <li><strong>Pattern:</strong> {watch.pattern}</li>
              </ul>
            </div>

            <div className="product-reviews">
              <h3>Customer Ratings and Reviews :</h3>
              <p>{watch.reviews.rating} ({watch.reviews.totalReviews} reviews)</p>
              <ul>
                <li><strong>Fit:</strong> {watch.reviews.fit}</li>
                <li><strong>Quality:</strong> {watch.reviews.quality}</li>
                <li><strong>Comfort:</strong> {watch.reviews.comfort}</li>
              </ul>
            </div>

            <div className="similar-products">
              <h3>Similar Products :</h3>
              <div className="product-grid">
                {watch.similarProducts.map((similarProduct, index) => (
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

export default WatchesDetails;
