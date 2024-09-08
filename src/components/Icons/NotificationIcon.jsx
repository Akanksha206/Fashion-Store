import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const NotificationsIcon = () => {
  return (
    <Link to="/notifications" className="icon-link">
      <i className="fas fa-bell notifications-icon"></i>
    </Link>
  );
};

export default NotificationsIcon;
