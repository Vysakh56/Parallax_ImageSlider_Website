import React from 'react';
import Slider from 'react-slick';
import image1 from "../assets/Great_Wall_China.jpg";
import image2 from "../assets/Christ_the_Redeemer.jpg";
import image3 from "../assets/Machu_Picchu_Peru.jpg";
import image4 from "../assets/Chichen_Itza.jpg";
import image5 from '../assets/Colosseum-Rome-Italy.jpg';
import image6 from '../assets/Taj Mahal.jpg';
import image7 from "../assets/Petra.jpg";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Show arrows
    autoplay: true, // Auto-play the slider
    autoplaySpeed: 3000, // Speed of auto-play
    fade: true, // Smooth transition
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
      <div className="slider-slide">
          <img src={image1} alt="Great Wall of China" />
          <div className="slide-caption">Great Wall of China</div>
        </div>
       
        <div className="slider-slide">
          <img src={image2} alt="Christ the Redeemer" />
          <div className="slide-caption">Christ the Redeemer</div>
        </div>

        <div className="slider-slide">
          <img src={image3} alt="Machu Picchu" />
          <div className="slide-caption">Machu Picchu</div>
        </div>

        <div className="slider-slide">
          <img src={image4} alt="Chichen Itza" />
          <div className="slide-caption">Chichen Itza</div>
        </div>
    

        <div className="slider-slide">
          <img src={image5} alt="Colosseum" />
          <div className="slide-caption">Colosseum</div>
        </div>
        
        <div className="slider-slide">
          <img src={image6} alt="Taj Mahal" />
          <div className="slide-caption">Taj Mahal</div>
        </div>

        <div className="slider-slide">
          <img src={image7} alt="Petra" />
          <div className="slide-caption">Petra</div>
        </div>

      </Slider>
    </div>
  );
};

export default ImageSlider;
