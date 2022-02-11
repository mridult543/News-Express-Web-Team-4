import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function BreakingNews() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 8000,
      cssEase: "linear"
    };
    return (

      <div id="container">
        <h3 id="bnews">Breaking News</h3>
        <div class="slidecontainer">
        <Slider {...settings}>
          <div className="tem">
           <div className="slides">
             <div className="img">
               <img alt="screenshot" src="/image.svg" width="683px" height="345px" />
             </div>
             <div className="title">
               <h3>Massa tortor nibh nulla condimentum imperdiet scelerisque...</h3>
               <h4>Massa tortor nibh nulla condimentum imperdiet scelerisque...</h4>
               <button className="btn">Read More..</button>
             </div>
           </div>
          </div>
          <div className="tem">
            <div className="slides">
             <div className="img">
               <img alt="screenshot" src="/image.svg" width="683px" height="345px" />
             </div>
             <div className="title">
               <h3>Massa tortor nibh nulla condimentum imperdiet scelerisque...</h3>
               <h4>Massa tortor nibh nulla condimentum imperdiet scelerisque...</h4>
               <button className="btn">Read More..</button>
             </div>
            </div>
          </div>
        </Slider>
        </div>
      </div>
    );
  }

export default BreakingNews
