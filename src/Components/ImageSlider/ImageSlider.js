import React, { useState, useEffect, useContext } from 'react';
import './ImageSlider.css';
import PopupMenu from '../PopupMenu/PopupMenu.js';
import { PopupContext } from '../PopupContext.js'; // Import the context

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use context for popup
  const { isPopupOpen, handlePopupOpen, handlePopupClose, activeTab, selectTab } = useContext(PopupContext);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="image-slider">
      <div className="slider-container">
        {images.map((image, index) => (
          <div key={`slide-${index}`} className={`slide ${index === currentIndex ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="center-text">
        <h1 className='slider-title'>Taste Of Home</h1>
        <p>Authentic Indian Cuisine From Our KItchen</p>
      </div>
      <button className="center-button" onClick={handlePopupOpen}>
        View Menu
      </button>

      {isPopupOpen && (
        <PopupMenu
          activeTab={activeTab}
          selectTab={selectTab}
          handlePopupClose={handlePopupClose}
        />
      )}
    </div>
  );
};

export default ImageSlider;
