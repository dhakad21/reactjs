import React from 'react';

// import '../css/cusreview.css';

import kuzma_logo from '../images/project/logo/kuzma_logo.png';
import kyali from '../images/i-phone/slide/favorite/kyali.png';
import burgerwar from '../images/project/logo/burgerwar.jpg';
import bwar from '../images/i-phone/slide/favorite/bwar.png';
import jdboy from '../images/project/logo/dboy.jpg';
import pdboy from '../images/i-phone/slide/favorite/dboy.png';
import top10wise from '../images/project/logo/top10wise-logo.jpg';
import ptop10wise from '../images/i-phone/slide/favorite/top10wise-screen.png';








function Portfolio() {     
  return (
<div className="popular-product">
<div id="popular-product">
    <div className="headline">
    <h3> some of our <b>popular</b> favorite <b>projects</b></h3>
  </div>
    <div className="container">
    <div className="row">
    <div className="col-xs-12 col-md-12 col-sm-12">
   
    <div className="carousel-inner">
        <div className="portfolio-container">
        
        
        <div className="row">
        <div className="col-xs-12 col-md-6 col-lg-3">    
            <div className="item">
            <div className="portfolio-cap">
            <div className="cap-top">
                <h2 className="title">Kyle Kuzma</h2>
                <h4 className="sub-title">Sports App</h4>
              </div>
            <div className="cap-img"> 
                <div className="inner-img"><img src={kuzma_logo}/></div>
              </div>
            <div className="main-img"> <img src={kyali}/> </div>
            
            <div className="load-more text-center"> <a className="btn btn-default" href="https://kodecube.com/mobileapp.html">view more</a> </div>
          </div>
          </div>
          </div>
         
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="item">
            <div className="portfolio-cap">
            <div className="cap-top">
                <h2 className="title">burger war</h2>
                <h4 className="sub-title">Food Delivery</h4>
              </div>
            <div className="cap-img">
                <div className="inner-img"> <img src={burgerwar} title="" alt=""/> </div>
              </div>
            <div className="main-img"> <img src={bwar}/> </div>
            <div className="load-more text-center"> <a className="btn btn-default" href="https://kodecube.com/mobileapp.html">view more</a> </div>
          </div>
          </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="item">
            <div className="portfolio-cap">
            <div className="cap-top">
                <h2 className="title"> D-boy </h2>
                <h4 className="sub-title"> Food Delivery </h4>
              </div>
            <div className="cap-img">
                <div className="inner-img"> <img src={jdboy} title="" alt=""/> </div>
              </div>
            <div className="main-img"> <img src={pdboy}/> </div>
            <div className="load-more text-center"> <a className="btn btn-default" href="https://kodecube.com/mobileapp.html">view more</a> </div>
          </div>
          </div>
          </div>
        
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="item">
            <div className="portfolio-cap">
            <div className="cap-top">
                <h2 className="title"> Top10Wise</h2>
                <h4 className="sub-title"> Top Ten List</h4>
              </div>
            <div className="cap-img">
                <div className="inner-img"> <img src={top10wise} title="" alt=""/> </div>
              </div>
            <div className="main-img"><img src={ptop10wise}/> </div>
            <div className="load-more text-center"> <a className="btn btn-default" href="https://kodecube.com/mobileapp.html">view more</a> </div>
          </div>
          </div>
          </div>
          

        
         
        </div>
        </div>
      </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  );
}

export default Portfolio;
