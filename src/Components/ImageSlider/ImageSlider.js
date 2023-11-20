import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import PopupMenu from '../PopupMenu/PopupMenu.js';

const ImageSlider = ({ images, url }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1'); // Default active tab
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const selectTab = (tab) => {
    setActiveTab(tab);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

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
      </div>
      <button className="center-button" onClick={handlePopupOpen}>
        View Menu
      </button>

      {isPopupOpen && (
        <PopupMenu
        activeTab={activeTab}
        selectTab={selectTab}
        handlePopupClose={handlePopupClose}
        handleItemClick={handleItemClick}
      />
      )}
      {sidebarOpen && (
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <h2 className='sidebar-title'>{selectedItem.name}</h2>
          {selectedItem && (
            <>
              <p>Desc: {selectedItem.name}</p>
              <p>Price: {selectedItem.price}</p>
            </>
          )}
          <button className='sidebar-close-button' onClick={closeSidebar}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
