import React from "react";
import image1 from '../assets/slider1.jpg';
import image2 from '../assets/slider2.jpg';
import image3 from '../assets/slider3.jpg';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  const settings = {
    autoPlay: true,
    infiniteLoop: true,
    centerMode: true,
    centerSlidePercentage: 70,
    showThumbs: false,
    swipeable: true
  }

  return (
    <Carousel {...settings} className="px-10">
      <div>
        <img src={image1} alt="slide" className="p-4" />
      </div>
      <div>
        <img src={image2} alt="slide" className="p-4" />
      </div>
      <div>
        <img src={image3} alt="slide" className="p-4" />
      </div>
    </Carousel>
  );
}

export default Slider;