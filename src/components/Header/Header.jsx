import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';

const Header = () => {
    return (
        <header>
            <div className="navbar">
                <div className="logo">
                <NavLink to="/Feed">

                    <img src="/src/assets/images/download.png" alt="logo" />
                    </NavLink>
                </div>
                <ul>
                    <li className="nav-item">
                        <NavLink to="/Feed" activeclassname="active">FEED</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/ShortKurtis" activeclassname="active">WOMEN</NavLink>
                        <ul className="dropDown">
                            <li><NavLink to="/ShortKurtis" activeclassname="active">Short Kurtis</NavLink></li>
                            <li><NavLink to="/TeesandCrops" activeclassname="active">Tees and Crops</NavLink></li>
                            <li><NavLink to="/Sarees" activeclassname="active">Sarees</NavLink></li>
                            <li><NavLink to="/Jeans" activeclassname="active">Jeans</NavLink></li>
                            <li><NavLink to="/Shorts" activeclassname="active">Shorts</NavLink></li>
                            <li><NavLink to="/CoordSets" activeclassname="active">Co-ord Sets</NavLink></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/Floral" activeclassname="active">MEN</NavLink>
                        <ul className="dropDown">
                            <li><NavLink to="/Floral" activeclassname="active">Floral Shirts</NavLink></li>
                            <li><NavLink to="/Chequered" activeclassname="active">Chequered Shirts</NavLink></li>
                            <li><NavLink to="/Oversized" activeclassname="active">Oversized Tees</NavLink></li>
                            <li><NavLink to="/Colour" activeclassname="active">Colour Blocked</NavLink></li>
                            <li><NavLink to="/Sauve" activeclassname="active">Sauve Trousers</NavLink></li>
                            <li><NavLink to="/Stripped" activeclassname="active">Stripped Shirts</NavLink></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/Coordinates" activeclassname="active">KIDS</NavLink>
                        <ul className="dropDown">
                            <li><NavLink to="/Coordinates" activeclassname="active">Co-ordinates</NavLink></li>
                            <li><NavLink to="/Rompers" activeclassname="active">Rompers</NavLink></li>
                            <li><NavLink to="/Joggers" activeclassname="active">Joggers</NavLink></li>
                            <li><NavLink to="/Shirts" activeclassname="active">Shirts</NavLink></li>
                            <li><NavLink to="/Tees" activeclassname="active">Tees</NavLink></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/Bags" activeclassname="active">ACCESSORIES</NavLink>
                        <ul className="dropDown">
                            <li><NavLink to="/Bags" activeclassname="active">Bags</NavLink></li>
                            <li><NavLink to="/Jewellery" activeclassname="active">Jewellery</NavLink></li>
                            <li><NavLink to="/Shoes" activeclassname="active">Shoes</NavLink></li>
                            <li><NavLink to="/Watches" activeclassname="active">Watches</NavLink></li>
                        </ul>
                    </li>
                </ul>

                <div className="search-container">
                    <input type="search" placeholder="Search your product" />
                    <i className="fas fa-search search-icon"></i>
                </div>

                <div className="navbar-icons">
                    <NavLink to="/WishList">
                    <i className="fas fa-heart wishlist-icon"></i>
                    </NavLink>
                    <NavLink to="/CartIcon">
                    <i className="fas fa-shopping-cart"></i>
                    </NavLink>
                   <NavLink to="/Notification">
                   <i className="fas fa-bell"></i>
                   </NavLink>
                   <NavLink to="/LoginPage">
                   <i className="fas fa-user"></i>
                   </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
