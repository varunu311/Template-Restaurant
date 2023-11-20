import React, { useState } from 'react';
import './PopupMenu.css'; // You can define styles specific to PopupMenu in this file

const PopupMenu = ({ activeTab, selectTab, handleItemClick, handlePopupClose}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = {
    tab1: [
      { name: "Samosa", price: "$3.00" },
      { name: "Chilli 65", price: "$5.50" },
      { name: "Gobi Machurian", price: "$3.00" },
      { name: "Hakka Noodles", price: "$5.50" },
      { name: "Manchow Soup", price: "$3.00" },
      { name: "Tomato Basil Soup", price: "$5.50" },
      { name: "Culets", price: "$3.00" },
      { name: "Spring Rolls", price: "$5.50" },
    ],
    tab2: [
      { name: "Butter Chicken", price: "$10.00" },
      { name: "Palak Paneer", price: "$9.00" },
      { name: "Panner Tikka", price: "$3.00" },
      { name: "Panner Bhurji", price: "$5.50" },
      { name: "Malai Kofta", price: "$3.00" },
    ],
    tab3: [
      { name: "Ras Malai", price: "$10.00" },
      { name: "Kulfi", price: "$9.00" },
      { name: "Rabdi", price: "$3.00" },
      { name: "Gulab Jamoon", price: "$5.50" },
      { name: "Kheer", price: "$3.00" },
      { name: "Halwa", price: "$5.50" },
    ],
    tab4: [
      { name: "Chai", price: "$10.00" },
      { name: "Lassi", price: "$9.00" },
      { name: "Badaam MIlk", price: "$3.00" },
      { name: "Taj", price: "$5.50" },
      { name: "Flying Horse", price: "$3.00" },
      { name: "Beera", price: "$5.50" },
      { name: "Soda", price: "$3.00" }
    ],
  };;

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  
  return (
    <>
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-tabs">
          <button onClick={() => selectTab('tab1')}>Appetizers</button>
          <button onClick={() => selectTab('tab2')}>Main Course</button>
          <button onClick={() => selectTab('tab3')}>Desserts</button>
          <button onClick={() => selectTab('tab4')}>Beverages</button>
        </div>
        <div className="popup-tab-content">
          {Object.entries(menuItems).map(([tab, items]) => (
            activeTab === tab && (
              <ul key={tab}>
                {items.map((item, index) => (
                  <li key={index} onClick={() => handleItemClick(item)}>
                    {item.name}
                  </li>
                ))}
              </ul>
            )
          ))}
        </div>
        <button className="popup-close-button" onClick={handlePopupClose}>Close</button>
      </div>
    </div>
      
      {sidebarOpen && (
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <h2>Item Details</h2>
          {selectedItem && (
            <>
              <p>Name: {selectedItem.name}</p>
              <p>Price: {selectedItem.price}</p>
            </>
          )}
          <button onClick={closeSidebar}>Close</button>
        </div>
      )}
    </>
  );
};

export default PopupMenu;