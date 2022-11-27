import React, { Component } from "react";
import image from '../assets/slider2.jpg';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export class CarrosselImagens extends Component {
  state = {
    
  }

  render() {

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
        <img src={image} alt="slide" className="p-4" />
      </div>
      <div>
        <img src={image} alt="slide" className="p-4" />
      </div>
      <div>
        <img src={image} alt="slide" className="p-4" />
      </div>
    </Carousel>
    );
  }
}

export default CarrosselImagens;

