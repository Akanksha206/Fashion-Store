import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductStyles/ProductStyle.css';

const JewelleryDetails = () => {
  const { id } = useParams();  // Get product ID from URL
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  const JewelleryDetailsData = [
    {
      id: 1,
      image: "/src/assets/images/accessories/jewellery1.webp",
      title: "Kalini Fashion Jewellery Sets ",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      work: "Fine Art",
      pattern: "Everyday Use",
      reviews: {
        rating: "4.3 ★",
        totalReviews: 112,
        fit: "True to size",
        quality: "Good",
        comfort: "Comfortable",
      },
      similarProducts: [
        "/src/assets/images/accessories/jewellery4.webp",
        "/src/assets/images/accessories/jewellery5.webp",
        "/src/assets/images/accessories/jewellery6.webp",
        "/src/assets/images/accessories/jewellery7.webp",
      ],
    },
    {
      id: 2,
      image: "/src/assets/images/accessories/jewellery2.webp",
      title: "Kalini Fashion Jewellery Sets ",
      price: "₹3,999",
      discountedPrice: "₹2,499",
      discount: "(37% OFF)",
      sizes: ["S", "M", "L", "XL", "XXL"],
      work: "Fine Art",
      pattern: "Everyday Use",
      reviews: {
        rating: "4.3 ★",
        totalReviews: 112,
        fit: "True to size",
        quality: "Good",
        comfort: "Comfortable",
      },
      similarProducts: [
        "/src/assets/images/accessories/jewellery4.webp",
        "/src/assets/images/accessories/jewellery5.webp",
        "/src/assets/images/accessories/jewellery6.webp",
        "/src/assets/images/accessories/jewellery7.webp",
      ],
    },
    {
        id: 3,
        image: "/src/assets/images/accessories/jewellery3.webp",
        title: "Kalini Fashion Jewellery Sets ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        work: "Fine Art",
        pattern: "Everyday Use",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/accessories/jewellery5.webp",
          "/src/assets/images/accessories/jewellery4.webp",
          "/src/assets/images/accessories/jewellery2.webp",
          "/src/assets/images/accessories/jewellery6.webp",
        ],
      },
      {
        id: 4,
        image: "/src/assets/images/accessories/jewellery4.webp",
        title: "Kalini Fashion Jewellery Sets ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        work: "Fine Art",
        pattern: "Everyday Use",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/accessories/jewellery2.webp",
          "/src/assets/images/accessories/jewellery4.webp",
          "/src/assets/images/accessories/jewellery1.webp",
          "/src/assets/images/accessories/jewellery7.webp",
        ],
      },
      {
        id: 5,
        image: "/src/assets/images/accessories/jewellery5.webp",
        title: "Kalini Fashion Jewellery Sets ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        work: "Fine Art",
        pattern: "Everyday Use",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/accessories/jewellery6.webp",
          "/src/assets/images/accessories/jewellery2.webp",
          "/src/assets/images/accessories/jewellery8.webp",
          "/src/assets/images/accessories/jewellery5.webp",
        ],
      },     
      {
        id: 6,
        image: "/src/assets/images/accessories/jewellery6.webp",
        title: "Kalini Fashion Jewellery Sets ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        work: "Fine Art",
        pattern: "Everyday Use",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/accessories/jewellery6.webp",
          "/src/assets/images/accessories/jewellery2.webp",
          "/src/assets/images/accessories/jewellery8.webp",
          "/src/assets/images/accessories/jewellery5.webp",
        ],
      },  
      {
        id: 7,
        image: "/src/assets/images/accessories/jewellery7.webp",
        title: "Kalini Fashion Jewellery Sets ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        work: "Fine Art",
        pattern: "Everyday Use",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/accessories/jewellery6.webp",
          "/src/assets/images/accessories/jewellery2.webp",
          "/src/assets/images/accessories/jewellery8.webp",
          "/src/assets/images/accessories/jewellery5.webp",
        ],
      },  
      {
        id: 8,
        image: "/src/assets/images/accessories/jewellery8.webp",
        title: "Kalini Fashion Jewellery Sets ",
        price: "₹3,999",
        discountedPrice: "₹2,499",
        discount: "(37% OFF)",
        sizes: ["S", "M", "L", "XL", "XXL"],
        work: "Fine Art",
        pattern: "Everyday Use",
        reviews: {
          rating: "4.3 ★",
          totalReviews: 112,
          fit: "True to size",
          quality: "Good",
          comfort: "Comfortable",
        },
        similarProducts: [
          "/src/assets/images/accessories/jewellery6.webp",
          "/src/assets/images/accessories/jewellery2.webp",
          "/src/assets/images/accessories/jewellery8.webp",
          "/src/assets/images/accessories/jewellery5.webp",
        ],
      },  
  ];

  // Find the selected product based on the ID from the URL
  const jewellery = JewelleryDetailsData .find((item) => item.id === parseInt(id));

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
      {jewellery ? (
        <>
          <div className="product-gallery">
            <img src={jewellery.image} alt={jewellery.title} className="main-image" />
          </div>
          <div className="product-details">
            <h1>{jewellery.title}</h1>
            <div className="product-price">
              <span className="price">{jewellery.price}</span>
              <span className="discounted-price">{jewellery.discountedPrice}</span>
              <span className="discount">{jewellery.discount}</span>
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
                
                <li><strong>Work:</strong> {jewellery.work}</li>
                <li><strong>Pattern:</strong> {jewellery.pattern}</li>
  
              </ul>
            </div>

            <div className="product-reviews">
              <h3>Customer Ratings and Reviews :</h3>
              <p>{jewellery.reviews.rating} ({jewellery.reviews.totalReviews} reviews)</p>
              <ul>
                <li><strong>Fit:</strong> {jewellery.reviews.fit}</li>
                <li><strong>Quality:</strong> {jewellery.reviews.quality}</li>
                <li><strong>Comfort:</strong> {jewellery.reviews.comfort}</li>
              </ul>
            </div>

            <div className="similar-products">
              <h3>Similar Products :</h3>
              <div className="product-grid">
                {jewellery.similarProducts.map((similarProduct, index) => (
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

export default JewelleryDetails;
