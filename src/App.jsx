import React from 'react';
import './index.css';
import ParallaxEffect from './components/ParallaxEffect';
import ImageSlider from './components/ImageSlider';
import DiscoverWonders from './components/DiscoverWonders';


function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">MyWebsite</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#discover">Discover</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>

      <ParallaxEffect />


      <DiscoverWonders />

      <ImageSlider />


      <footer id="contact">
        <h2>Contact Us</h2>
        <p>Have questions or need support? Feel free to reach out to us. We're here to help!</p>
        <a href="mailto:info@mywebsite.com">info@mywebsite.com</a>
      </footer>
    </div>
  );
}

export default App;
