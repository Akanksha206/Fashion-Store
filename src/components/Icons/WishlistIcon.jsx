import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const WishlistIcon = () => {
  return (
    <Link to="/wishlist" className="icon-link">
      <i className="fas fa-heart wishlist-icon"></i>
    </Link>
  );
};

export default WishlistIcon;
