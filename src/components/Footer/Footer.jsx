import React from "react";

const Footer = () => {
    return (
        <footer class="footer">
        <div class="container">
            <div class="logo">
                My Website
            </div>
            <div class="social-icons">
                <a href="#" aria-label="Facebook" class="fa fa-facebook"></a>
                <a href="#" aria-label="Twitter" class="fa fa-twitter"></a>
                <a href="#" aria-label="Instagram" class="fa fa-instagram"></a>
                <a href="#" aria-label="LinkedIn" class="fa fa-linkedin"></a>
            </div>
            <div class="links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Us</a>
            </div>
            <div class="copy">
                &copy; 2024 My Website. All rights reserved.
            </div>
        </div>
    </footer>
    );
};

export default Footer;
