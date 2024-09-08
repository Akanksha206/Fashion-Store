import React from 'react';
import { Link } from 'react-router-dom';

const ProfileIcon = () => {
  return (
    <Link to="/login" className="icon-link">
      {/* <i className="fas fa-user profile-icon"></i> */}
    </Link>
  );
};

export default ProfileIcon;
