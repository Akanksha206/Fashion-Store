import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LoginModal from '../LoginModal/LoginModal'; // Assuming the LoginModal is still a separate component
import '../GlobalStyles/style.css';

const Feed = () => {
    // Modal state and functionality
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Automatically open the modal when page loads
        setIsModalOpen(true);
    }, []);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Women's section
    const [womenStartIndex, setWomenStartIndex] = useState(0);
    const womenImages = [
        { src: '/src/assets/images/women/ShortKurtis.avif', alt: 'Short Kurtis', link: '/ShortKurtis' },
        { src: '/src/assets/images/women/TeesCrops.avif', alt: 'Tops & Tees', link: '/TeesandCrops' },
        { src: '/src/assets/images/women/sarees.avif', alt: 'Women Sarees', link: '/Sarees' },
        { src: '/src/assets/images/women/Jeans.avif', alt: 'Jeans', link: '/Jeans' },
        { src: '/src/assets/images/women/Shorts.avif', alt: 'Shorts', link: '/Shorts' },
        { src: '/src/assets/images/women/Co-Ord sets.avif', alt: 'Co-Ord sets', link: '/CoordSets' },
    ];

    const itemsPerPage = 4;
    const totalWomenItems = womenImages.length;
    const maxWomenIndex = totalWomenItems - itemsPerPage;

    const handleNextWomen = () => {
        if (womenStartIndex < maxWomenIndex) {
            setWomenStartIndex(womenStartIndex + 1);
        }
    };

    const handlePrevWomen = () => {
        if (womenStartIndex > 0) {
            setWomenStartIndex(womenStartIndex - 1);
        }
    };

    // Men's section
    const [menStartIndex, setMenStartIndex] = useState(0);
    const menImages = [
        { src: '/src/assets/images/men/FormalShirts.avif', alt: 'Formal Shirts', link: '/Floral' },
        { src: '/src/assets/images/men/ChequedShirt.avif', alt: 'Chequed Shirts', link: '/Chequered' },
        { src: '/src/assets/images/men/OversizedTees.avif', alt: 'Oversized Tees', link: '/Oversized' },
        { src: '/src/assets/images/men/ColouredBlock.avif', alt: 'Coloured Block', link: '/Colour' },
        { src: '/src/assets/images/men/SauveTrousers.avif', alt: 'Sauve Trousers', link: '/Sauve' },
        { src: '/src/assets/images/men/StripedShirts.avif', alt: 'Striped Shirts', link: '/Stripped' },
        { src: '/src/assets/images/men/EpicWatches.avif', alt: 'Epic Watches', link: '/Watches' },
    ];

    const totalMenItems = menImages.length;
    const maxMenIndex = totalMenItems - itemsPerPage;

    const handleNextMen = () => {
        if (menStartIndex < maxMenIndex) {
            setMenStartIndex(menStartIndex + 1);
        }
    };

    const handlePrevMen = () => {
        if (menStartIndex > 0) {
            setMenStartIndex(menStartIndex - 1);
        }
    };

    // Kids section
    const [kidStartIndex, setKidStartIndex] = useState(0);
    const kidImages = [
        { src: '/src/assets/images/Kids/co-ordinates.webp', alt: 'co-ordinates', link: '/Coordinates' },
        { src: '/src/assets/images/Kids/rompers.webp', alt: 'rompers', link: '/Rompers' },
        { src: '/src/assets/images/Kids/tees.webp', alt: 'tees', link: '/Tees' },
        { src: '/src/assets/images/Kids/joggers.webp', alt: 'joggers', link: '/Joggers' },
        { src: '/src/assets/images/Kids/shirts.webp', alt: 'shirts', link: '/Shirts' },
    ];

    const totalKidItems = kidImages.length;
    const maxKidIndex = totalKidItems - itemsPerPage;

    const handleNextKid = () => {
        if (kidStartIndex < maxKidIndex) {
            setKidStartIndex(kidStartIndex + 1);
        }
    };

    const handlePrevKid = () => {
        if (kidStartIndex > 0) {
            setKidStartIndex(kidStartIndex - 1);
        }
    };

    // Accessories section (decor)
    const [decorStartIndex, setDecorStartIndex] = useState(0);
    const decorImages = [
        { src: '/src/assets/images/accessories/Artboard.jpg', alt: 'Artboard', link: '/Jewellery' },
        { src: '/src/assets/images/accessories/bags.jpg', alt: 'Category_Bags', link: '/Bags' },
        { src: '/src/assets/images/accessories/modernFusion.jpg', alt: 'Modern Fusion', link: '/Jewellery' },
        { src: '/src/assets/images/accessories/watches.jpg', alt: 'smart watches', link: '/Watches' },
    ];

    const totalDecorItems = decorImages.length;
    const maxDecorIndex = totalDecorItems - itemsPerPage;

    const handleNextDecor = () => {
        if (decorStartIndex < maxDecorIndex) {
            setDecorStartIndex(decorStartIndex + 1);
        }
    };

    const handlePrevDecor = () => {
        if (decorStartIndex > 0) {
            setDecorStartIndex(decorStartIndex - 1);
        }
    };

    return (
        <div className="main-section-container">
            {/* Modal for login */}
            <LoginModal isOpen={isModalOpen} closeModal={closeModal} />

            {/* Feed sections */}
            <div className="subnav">
                <div className="category">
                    <NavLink to="/feed1"><img src="/src/assets/images/Feed/Feed1.jpg" alt="Feed" /></NavLink>
                </div>
                <div className="category">
                    <NavLink to="/feed2"><img src="/src/assets/images/Feed/Feed2.png" alt="Feed" /></NavLink>
                </div>
                <div className="category">
                    <NavLink to="/feed3"><img src="/src/assets/images/Feed/Feed3.png" alt="Feed" /></NavLink>
                </div>
                <div className="category">
                    <NavLink to="/sale"><img src="/src/assets/images/Feed/sale.jpg" alt="Feed" /></NavLink>
                </div>
            </div>

            {/* Women's Section */}
            <div className="main-section">
                <h2>Curated Collections for the Modern Woman</h2>
                <hr />
                <div className="carousel-controls">
                    <button className="carousel-btn prev-btn" onClick={handlePrevWomen}>&#10094;</button>
                    <button className="carousel-btn next-btn" onClick={handleNextWomen}>&#10095;</button>
                </div>
                <div className="carousel">
                    <div className="carousel-container" style={{ transform: `translateX(-${womenStartIndex * 265}px)` }}>
                        {womenImages.map((image, index) => (
                            <NavLink to={image.link} key={index} className="carousel-item">
                                <img src={image.src} alt={image.alt} />
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>

            {/* Men's Section */}
            <div className="main-section">
                <h2>Explore the Latest in Men's Fashion</h2>
                <hr />
                <div className="carousel-controls">
                    <button className="carousel-btn prev-btn" onClick={handlePrevMen}>&#10094;</button>
                    <button className="carousel-btn next-btn" onClick={handleNextMen}>&#10095;</button>
                </div>
                <div className="carousel">
                    <div className="carousel-container" style={{ transform: `translateX(-${menStartIndex * 265}px)` }}>
                        {menImages.map((image, index) => (
                            <NavLink to={image.link} key={index} className="carousel-item">
                                <img src={image.src} alt={image.alt} />
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>

            {/* Kids Section */}
            <div className="main-section">
                <h2>Fun and Fashionable: Kids' Apparel</h2>
                <hr />
                <div className="carousel-controls">
                    <button className="carousel-btn prev-btn" onClick={handlePrevKid}>&#10094;</button>
                    <button className="carousel-btn next-btn" onClick={handleNextKid}>&#10095;</button>
                </div>
                <div className="carousel">
                    <div className="carousel-container" style={{ transform: `translateX(-${kidStartIndex * 265}px)` }}>
                        {kidImages.map((image, index) => (
                            <NavLink to={image.link} key={index} className="carousel-item">
                                <img src={image.src} alt={image.alt} />
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>

            {/* Accessories Section */}
            <div className="main-section">
                <h2>Elevate Your Style: Accessories & More</h2>
                <hr />
                <div className="carousel-controls">
                    <button className="carousel-btn prev-btn" onClick={handlePrevDecor}>&#10094;</button>
                    <button className="carousel-btn next-btn" onClick={handleNextDecor}>&#10095;</button>
                </div>
                <div className="carousel">
                    <div className="carousel-container" style={{ transform: `translateX(-${decorStartIndex * 265}px)` }}>
                        {decorImages.map((image, index) => (
                            <NavLink to={image.link} key={index} className="carousel-item">
                                <img src={image.src} alt={image.alt} />
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;
