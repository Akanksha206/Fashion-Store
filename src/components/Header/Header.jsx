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
                        <NavLink to="/Feed" activeClassName="active">FEED</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/ShortKurtis" activeClassName="active">WOMEN</NavLink>
                        <ul className="dropDown">
                            <li><NavLink to="/ShortKurtis" activeClassName="active">Short Kurtis</NavLink></li>
                            <li><NavLink to="/TeesandCrops" activeClassName="active">Tees and Crops</NavLink></li>
                            <li><NavLink to="/Sarees" activeClassName="active">Sarees</NavLink></li>
                            <li><NavLink to="/Jeans" activeClassName="active">Jeans</NavLink></li>
                            <li><NavLink to="/Shorts" activeClassName="active">Shorts</NavLink></li>
                            <li><NavLink to="/CoordSets" activeClassName="active">Co-ord Sets</NavLink></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/Floral" activeClassName="active">MEN</NavLink>
                        <ul className="dropDown">
                            <li><NavLink to="/Floral" activeClassName="active">Floral Shirts</NavLink></li>
                            <li><NavLink to="/Chequered" activeClassName="active">Chequered Shirts</NavLink></li>
                            <li><NavLink to="/Oversized" activeClassName="active">Oversized Tees</NavLink></li>
                            <li><NavLink to="/Colour" activeClassName="active">Colour Blocked</NavLink></li>
                            <li><NavLink to="/Sauve" activeClassName="active">Sauve Trousers</NavLink></li>
                            <li><NavLink to="/Stripped" activeClassName="active">Stripped Shirts</NavLink></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/Coordinates" activeClassName="active">KIDS</NavLink>
                        <ul className="dropDown">
                            <li><NavLink to="/Coordinates" activeClassName="active">Co-ordinates</NavLink></li>
                            <li><NavLink to="/Rompers" activeClassName="active">Rompers</NavLink></li>
                            <li><NavLink to="/Joggers" activeClassName="active">Joggers</NavLink></li>
                            <li><NavLink to="/Shirts" activeClassName="active">Shirts</NavLink></li>
                            <li><NavLink to="/Tees" activeClassName="active">Tees</NavLink></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/Bags" activeClassName="active">ACCESSORIES</NavLink>
                        <ul className="dropDown">
                            <li><NavLink to="/Bags" activeClassName="active">Bags</NavLink></li>
                            <li><NavLink to="/Jewellery" activeClassName="active">Jewellery</NavLink></li>
                            <li><NavLink to="/Shoes" activeClassName="active">Shoes</NavLink></li>
                            <li><NavLink to="/Watches" activeClassName="active">Watches</NavLink></li>
                        </ul>
                    </li>
                </ul>

                <div className="search-container">
                    <input type="search" placeholder="Search your product" />
                    <i className="fas fa-search search-icon"></i>
                </div>

                <div className="navbar-icons">
                    <i className="fas fa-heart wishlist-icon"></i>
                    <i className="fas fa-shopping-cart"></i>
                    <i className="fas fa-bell"></i>
                   <NavLink to="/LoginPage">
                   <i className="fas fa-user"></i>
                   </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
