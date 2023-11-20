import React, { useState } from 'react';
import './PopupMenu.css';

const PopupMenu = ({ activeTab, selectTab, handlePopupClose}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const menuItems = {
    tab1: [
      { name: "Samosa", price: "$3.00", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp')},
      { name: "Chilli 65", price: "$5.50", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp') },
      { name: "Gobi Machurian", price: "$3.00", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp') },
      { name: "Hakka Noodles", price: "$5.50" , description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp')},
      { name: "Manchow Soup", price: "$3.00", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp') },
      { name: "Tomato Basil Soup", price: "$5.50", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp') },
      { name: "Culets", price: "$3.00", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp') },
      { name: "Spring Rolls", price: "$5.50", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp') },
    ],
    tab2: [
      { name: "Butter Chicken", price: "$10.00" , description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp')},
      { name: "Palak Paneer", price: "$9.00", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp') },
      { name: "Panner Tikka", price: "$3.00", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp') },
      { name: "Panner Bhurji", price: "$5.50", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp') },
      { name: "Malai Kofta", price: "$3.00", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp') },
    ],
    tab3: [
      { name: "Ras Malai", price: "$10.00", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp') },
      { name: "Kulfi", price: "$9.00", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp') },
      { name: "Rabdi", price: "$3.00", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp') },
      { name: "Gulab Jamoon", price: "$5.50", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp') },
      { name: "Kheer", price: "$3.00", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp')  },
      { name: "Halwa", price: "$5.50", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp')  },
    ],
    tab4: [
      { name: "Chai", price: "$10.00", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp')  },
      { name: "Lassi", price: "$9.00", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp')  },
      { name: "Badaam MIlk", price: "$3.00", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp') },
      { name: "Taj", price: "$5.50", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp')  },
      { name: "Flying Horse", price: "$3.00" , description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp') },
      { name: "Beera", price: "$5.50", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp')  },
      { name: "Soda", price: "$3.00", description: "This aromatic dish features a medley of fresh vegetables cooked in a rich and fragrant tomato-based sauce, infused with a blend of traditional Indian spices. Served hot and paired perfectly with steamed rice or warm naan bread, our veg curry is a wholesome and satisfying culinary experience that's sure to tickle your taste buds.", imagePath: require('../../Images/Samosa.webp')  }
    ],
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
          <h2 className='sidebar-title'>{selectedItem?.name}</h2>
          {selectedItem && (
            <>
              <img className='item-image' src={selectedItem.imagePath} alt={selectedItem.name} />
              <p className='item-description'>{selectedItem.description}</p>
              <p className='item-price'>{selectedItem.price}</p>
            </>
          )}
          <button className='sidebar-close-button' onClick={closeSidebar}>Close</button>
        </div>
      )}
    </>
  );
};

export default PopupMenu;