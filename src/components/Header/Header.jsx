import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';


const Header = () => {
    return (
        <header>
        <div className="navbar">
        <div className="logo"><img src="/src/assets/images/download.png" alt="logo" /></div>
            <ul>
                <li className="nav-item">
                    <Link to="/feed" className='active'>FEED</Link>
                </li>
                <li className="nav-item">
                    <Link to="/women">WOMEN</Link>
                    <ul className="dropDown">
                        <li><Link to="/ShortKurtis">Short Kurtis</Link></li>
                        <li><Link to="/TeesandCrops">Tees and Crops</Link></li>
                        <li><Link to="/Sarees">Sarees</Link></li>
                        <li><Link to="/Jeans">Jeans</Link></li>
                        <li><Link to="/Shorts">Shorts</Link></li>
                        <li><Link to="/CoordSets">Co-ord Sets</Link></li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link to="/men">MEN</Link>
                    <ul className="dropDown">
                        <li><Link to="/Floral">Floral Shirts</Link></li>
                        <li><Link to="/Chequered">Chequered Shirts</Link></li>
                        <li><Link to="/Oversized">Oversized Tees</Link></li>
                        <li><Link to="/Colour">Colour Blocked</Link></li>
                        <li><Link to="/Sauve">Sauve Trousers</Link></li>
                        <li><Link to="/Stripped">Stripped Shirts</Link></li>
                    </ul>
                </li>

                  <li className="nav-item">
                    <Link to="/kids">KIDS</Link>
                    <ul className="dropDown">
                        <li><Link to="/Coordinates">Co-ordinates</Link></li>
                        <li><Link to="/Rompers">Rompers</Link></li>
                        <li><Link to="/Joggers">Joggers</Link></li>
                        <li><Link to="/Shirts">Shirts</Link></li>
                        <li><Link to="/Tees">Tees</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/Accessories">ACCESSORIES</Link>
                    <ul className="dropDown">
                        <li><Link to="/Bags">Bags</Link></li>
                        <li><Link to="/Jewellery">Jewellery</Link></li>
                        <li><Link to="/Shoes">Shoes</Link></li>
                        <li><Link to="/Watches">Watches</Link></li>
                    </ul>
                </li>
            </ul>

            <div className="search-container">
                <input type="search" placeholder="Search your product" />
                <i className="fas fa-search search-icon"></i>
            </div>

            <div className="navbar-icons">
                <i className="fas fa-pencil-alt"></i>
                <i className="fas fa-shopping-cart"></i>
                <i className="fas fa-bell"></i>
                <i className="fas fa-user"></i>
            </div>
        </div>

       
    </header>
    );
};

export default Header;
