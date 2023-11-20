import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className='Header'>
      <h1 className='Head-Time' style={{marginLeft:'20px'}}>
        <FontAwesomeIcon icon={faClock} /> Mon-Thu: 9:00AM - 10:30PM
      </h1>
      <h1 className='Head-Time'>
        <FontAwesomeIcon icon={faClock} /> Fri-Sun: 9:00AM - 10:30PM
      </h1>
      <h1 className='Head-Phone'>
        <FontAwesomeIcon icon={faPhone} /> +1 919-592-2367
      </h1>
      <h1 className='Head-Address'>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> 207 Charleson Dr, Charlotte, NC, 28262
      </h1>
    </div>
  );
}

export default Header;
