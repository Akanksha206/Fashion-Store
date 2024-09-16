import React from 'react';
import '../GlobalStyles/style.css'; 

const LoginModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>X</button>
        <h2>Login</h2>
        <form>
          <label>Email ID / Contact Number :</label>
          <input type="email" placeholder="Enter your email" required />
          
          <label>Password :</label>
          <input type="password" placeholder="Enter your password" required />
          
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
