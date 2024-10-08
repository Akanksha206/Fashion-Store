import React from "react";
import { NavLink } from "react-router-dom";
import '../GlobalStyles/style.css'

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            <div className="logo">
                Fashion Store
            </div>
            <div className="social-icons">
                <a href="#" aria-label="Facebook" class="fab fa-facebook"></a>
                <a href="#" aria-label="Twitter" class="fab fa-twitter"></a>
                <a href="#" aria-label="Instagram" class="fab fa-instagram"></a>
                <a href="#" aria-label="LinkedIn" class="fab fa-linkedin"></a>
            </div>
            <div className="links">
            <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
          <li><NavLink to="/terms">Terms of Service</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
            </div>
            <div className="copy">
                &copy; 2024 Fashion-Store. All rights reserved.
            </div>
        </div>
    </footer>
    );
};

export default Footer;
