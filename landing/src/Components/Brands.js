import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import a from '../images/1.png';
import b from '../images/2.png';
import c from '../images/3.png';
import d from '../images/4.png';
import e from '../images/5.png';

export default class Brands extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="brands">
        
        <Slider {...settings}>
          <div>
          <img src={a} alt="" />
          </div>
          <div>
          <img src={b} alt="" />
          </div>
          <div>
          <img src={c} alt="" />
          </div>
          <div>
          <img src={d} alt="" />
          </div>
          <div>
          <img src={e} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}