import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const CartIcon = () => {
  return (
    <Link to="/cart" className="icon-link">
      <i className="fas fa-shopping-cart cart-icon"></i>
    </Link>
  );
};

export default CartIcon;
