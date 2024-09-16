import React from 'react';
import { Parallax } from 'react-parallax';
import image1 from '../assets/Christ_the_Redeemer.jpg'; // Ensure this path is correct

const ParallaxEffect = () => {
  return (
    <Parallax
      blur={10}
      bgImage={image1}
      bgImageAlt="A scenic view"
      strength={300}
    >
      <div className="parallax-container">
        <div className="parallax-content">
          <h1>Explore the World</h1>
          <p>Experience breathtaking views and adventure.</p>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxEffect;
