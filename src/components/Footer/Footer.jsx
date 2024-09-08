import React from "react";

const Footer = () => {
    return (
        <footer class="footer">
        <div class="container">
            <div class="logo">
                Fashion Store
            </div>
            <div class="social-icons">
                <a href="#" aria-label="Facebook" class="fab fa-facebook"></a>
                <a href="#" aria-label="Twitter" class="fab fa-twitter"></a>
                <a href="#" aria-label="Instagram" class="fab fa-instagram"></a>
                <a href="#" aria-label="LinkedIn" class="fab fa-linkedin"></a>
            </div>
            <div class="links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Us</a>
            </div>
            <div class="copy">
                &copy; 2024 Fashion-Store. All rights reserved.
            </div>
        </div>
    </footer>
    );
};

export default Footer;
