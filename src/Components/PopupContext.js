import React, { useState, createContext } from 'react';

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  const [items, setItems] = useState();
  const [currentSection, setCurrentSection] = useState('Home'); // New state for active section

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const selectTab = (tab) => {
    setActiveTab(tab);
  };

  const changeSection = (section) => {
    setCurrentSection(section);
  };

  return (
    <PopupContext.Provider value={{
      isPopupOpen, handlePopupOpen, handlePopupClose, activeTab, selectTab, items,
      currentSection, changeSection // Include new state and handler
    }}>
      {children}
    </PopupContext.Provider>
  );
};
