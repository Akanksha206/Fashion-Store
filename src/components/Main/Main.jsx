import React, { useState } from 'react';
import '../styles/style.css'

const Main = () => {
    // Women's section
    const [womenStartIndex, setWomenStartIndex] = useState(0);
    const womenImages = [
        { src: '/src/assets/images/women/ShortKurtis.avif', alt: 'Short Kurtis' },
        { src: '/src/assets/images/women/TeesCrops.avif', alt: 'Tops & Tees' },
        { src: '/src/assets/images/women/SummerDresses.avif', alt: 'Summer Dresses' },
        { src: '/src/assets/images/women/sarees.avif', alt: 'Women Sarees' },
        { src: '/src/assets/images/women/Jeans.avif', alt: 'Jeans' },
        { src: '/src/assets/images/women/Shorts.avif', alt: 'Shorts' },
        { src: '/src/assets/images/women/Co-Ord sets.avif', alt: 'Co-Ord sets' },
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
        { src: '/src/assets/images/men/FormalShirts.avif', alt: 'Formal Shirts' },
        { src: '/src/assets/images/men/ChequedShirt.avif', alt: 'Chequed Shirts' },
        { src: '/src/assets/images/men/OversizedTees.avif', alt: 'Oversized Tees' },
        { src: '/src/assets/images/men/ColouredBlock.avif', alt: 'Coloured Block' },
        { src: '/src/assets/images/men/SauveTrousers.avif', alt: 'Sauve Trousers' },
        { src: '/src/assets/images/men/StripedShirts.avif', alt: 'Striped Shirts' },
        { src: '/src/assets/images/men/EpicWatches.avif', alt: 'Epic Watches' },
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
        { src: '/src/assets/images/Kids/co-ordinates.webp', alt: 'co-ordinates' },
        { src: '/src/assets/images/Kids/shorts.webp', alt: 'shorts' },
        { src: '/src/assets/images/Kids/rompers.webp', alt: 'rompers' },
        { src: '/src/assets/images/Kids/tees.webp', alt: 'tees' },
        { src: '/src/assets/images/Kids/joggers.webp', alt: 'joggers' },
        { src: '/src/assets/images/Kids/shirts.webp', alt: 'shirts' },
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

    // Accessories section(decor)
    const [decorStartIndex, setDecorStartIndex] = useState(0);
    const decorImages = [
        { src: '/src/assets/images/accessories/Artboard.jpg', alt: 'Artboard'},
        { src: '/src/assets/images/accessories/bags.jpg', alt: 'Category_Bags'},
        { src: '/src/assets/images/accessories/collection.jpg', alt: 'Collection'},
        { src: '/src/assets/images/accessories/modernFusion.jpg', alt: 'Modern Fusion'},
        { src: '/src/assets/images/accessories/watches.jpg', alt: 'smart watches'},
        { src: '/src/assets/images/accessories/Starlight_collection.jpg', alt: 'Starlight'},
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
             <div className="subnav">
            <div className="category">
                <div><img src="/src/assets/images/Feed/Feed1.jpg" alt="Feed" /></div>
            </div>
            <div className="category">
                <div><img src="/src/assets/images/Feed/Feed2.png" alt="Feed" /></div>                   
            </div>
            <div className="category">
                <div><img src="/src/assets/images/Feed/Feed3.png" alt="Feed" /></div>                   
            </div>
            <div className="category">
                <div><img src="/src/assets/images/Feed/sale.jpg" alt="Feed" /></div>                   
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
                            <div className="carousel-item" key={index}>
                                <img src={image.src} alt={image.alt} />
                            </div>
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
                            <div className="carousel-item" key={index}>
                                <img src={image.src} alt={image.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Kids Section */}
            <div className="main-section">
                <h2>Trendy Kidswear for Every Occasion</h2>
                <hr />
                <div className="carousel-controls">
                    <button className="carousel-btn prev-btn" onClick={handlePrevKid}>&#10094;</button>
                    <button className="carousel-btn next-btn" onClick={handleNextKid}>&#10095;</button>
                </div>
                <div className="carousel">
                    <div className="carousel-container" style={{ transform: `translateX(-${kidStartIndex * 265}px)` }}>
                        {kidImages.map((image, index) => (
                            <div className="carousel-item" key={index}>
                                <img src={image.src} alt={image.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Accessories Section(decor) */}
            <div className="main-section">
                <h2>Accessorize Your Way to Unforgettable Style</h2>
                <hr />
                <div className="carousel-controls">
                    <button className="carousel-btn prev-btn" onClick={handlePrevDecor}>&#10094;</button>
                    <button className="carousel-btn next-btn" onClick={handleNextDecor}>&#10095;</button>
                </div>
                <div className="carousel">
                    <div className="carousel-container" style={{ transform: `translateX(-${decorStartIndex * 265}px)` }}>
                        {decorImages.map((image, index) => (
                            <div className="carousel-item" key={index}>
                                <img src={image.src} alt={image.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
