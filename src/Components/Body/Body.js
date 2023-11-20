import React, {useContext, useState, useEffect } from 'react';
import './Body.css';
import { PopupContext } from '../PopupContext';


function Body() {
  const { currentSection } = useContext(PopupContext);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sections = ['About-Us', 'Our-Story', 'Our-Cuisine', 'Authenticity-Quality'];

  const handleScroll = () => {
    const activationThreshold = 500; // Pixels from top where scrolling effect starts
    const scrollThreshold = window.innerHeight; // Half the viewport height
  
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > activationThreshold) {
      const sectionIndex = Math.floor((scrollPosition - activationThreshold) / scrollThreshold);
      setCurrentSectionIndex(sectionIndex % sections.length);
    }
  };

  useEffect(() => {
    const sectionIndex = sections.indexOf(currentSection);
    if (sectionIndex !== -1) {
      setCurrentSectionIndex(sectionIndex);
    }
  }, [currentSection, sections]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections.length]);

  const getImageForSection = (section) => {
    switch (section) {
      case 'About-Us':
        return require('../../Images/image-1.jpg');
      case 'Our-Story':
        return require('../../Images/image-2.jpg');
      case 'Our-Cuisine':
        return require('../../Images/image-1.jpg');
      case 'Authenticity-Quality':
        return require('../../Images/image-2.jpg');
      default:
        return null;
    }
  };

  return (
    <div className='body'>
      {sections.map((section, index) => (
        <section key={section} className={`${section} ${index === currentSectionIndex ? 'active' : ''} ${index % 2 === 0 ? 'right-image' : 'left-image'}`}>
          <div className="content-container">
            <div className="section-text">
              <h2>{section.replace('-', ' ').toUpperCase()}</h2> {/* Include the section title */}
              {section === 'About-Us' && (
                <p className='section-content-text'>Welcome to Jigna's Kitchen, where we invite you to embark on a culinary journey to discover the rich and diverse flavors of India. Our restaurant is more than just a place to dine; it's a celebration of the vibrant tapestry of Indian cuisine.</p>
              )}
              {section === 'Our-Story' && (
                <p className='section-content-text'>At Jigna's Kitchen, our story is one steeped in tradition, passion, and a commitment to excellence. It all began with a vision to bring the heartwarming, mouthwatering tastes of India to Charlotte. Our founder, Jigna, hails from Gujarat, where the art of cooking is passed down through generations. She brought that culinary heritage to Charlotte, and Jigna's Kitchen was born.</p>
              )}
              {section === 'Our-Cuisine' && (
                <p className='section-content-text'>Our menu is a testament to the diversity of Indian cuisine, offering a wide array of dishes that showcase the flavors from different regions of India. From the fiery spices of the North to the aromatic delicacies of the South, each dish is carefully crafted to tantalize your taste buds and transport you to the bustling streets of India.</p>
              )}
              {section === 'Authenticity-Quality' && (
                <p className='section-content-text'>At [Restaurant Name], authenticity is the cornerstone of our culinary philosophy. We source the finest ingredients, handpick spices, and follow traditional recipes to ensure that every dish captures the true essence of Indian cooking. Our experienced chefs bring a wealth of expertise to our kitchen, ensuring that each bite is an explosion of flavors.</p>
              )}
            </div>
            <img className='section-img' src={getImageForSection(section)} alt={section.replace('-', ' ')} />
          </div>
        </section>
      ))}
    </div>
  );
}

export default Body;
