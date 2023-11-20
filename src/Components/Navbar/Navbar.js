import React, { useContext } from 'react';
import './Navbar.css';
import { PopupContext } from '../PopupContext';


function Navbar() {
  const { handlePopupOpen, changeSection } = useContext(PopupContext);

  const handleNavClick = (sectionId) => {
    changeSection(sectionId); // Update the current section
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const logo = require('../../Images/logo.png');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'fixed', top: '0', width: '100%', zIndex: '100', padding:'10px'}}>
      <div className="container" >
        <img src={logo} alt="Logo" style={{marginLeft:'0px', marginRight:'20px',height: '8vh' }} />
        <a className="navbar-brand" href="/"  style={{ fontSize:'4vh'}}></a>
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/" style={{ fontSize:'2.5vh'}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleNavClick('About-Us')} href="/" style={{ fontSize:'2.5vh'}}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu" onClick={ handlePopupOpen } style={{ fontSize:'2.5vh'}}>Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" style={{ fontSize:'2.5vh'}}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
