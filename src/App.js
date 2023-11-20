import Navbar from './Components/Navbar/Navbar';
import ImageSlider from './Components/ImageSlider/ImageSlider';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import React from 'react';
import { PopupProvider } from './Components/PopupContext';


function App() {

  const images = [
    require('./Images/image-2.jpg'),
    require('./Images/image-1.jpg'),
    ];
  

  return (
    <div>
      <PopupProvider >
        <Header />
          <header>
            <Navbar />
          </header>
          <ImageSlider images={images}/>
          <Body />
        <Footer />
      </PopupProvider >

    </div>
  );
}

export default App;
