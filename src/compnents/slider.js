import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

import img1 from '../images/slider/kodecube-ecommerce.jpg';
import img2 from '../images/slider/kodecube-slider3.jpg';
import img3 from '../images/slider/kodecube-Mobile-app.jpg';


import Icond from '../images/icon/icon-d.png';
import Iconj from '../images/icon/icon-j.png';
import Iconm from '../images/icon/icon-m.png';
import Icons from '../images/icon/icon-s.png';
import Iconw from '../images/icon/icon-w.png';



const CarouselPage = () => {
  return (
    <div className="home-carousel">
    <div className="home_carousel full-width block inner-content-block main-banner">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <div className="caritems">
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide" />

<div className="points">
                <div className="points-wrap">
                <div className="points-inner">
                    <div className="inner-wrapper">
                    <h1> <span> <strong> great user interfaces!</strong> </span> </h1>
                    <h3> create branded native storefront apps on iphone, iPad and android!</h3>
                    
                    <div className="icon-wrapper">
                   <div className=" margin-5 first-child inline-style"> <span> <img src={Icond} title="Drupal Development" alt="Drupal Development" /> </span> </div>
                    <div className=" margin-5 sec-child inline-style"> <img src={Iconj} title="Joomal Development" alt="Joomal Development" /> </div>
                    <div className=" margin-5 third-child inline-style"> <img src={Iconm} title="Magento Development" alt="Magento Development" /> </div>
                    <div className=" margin-5 forth-child inline-style"> <img src={Icons} title="Shopify Development" alt="Shopify Development" /> </div>
                    <div className=" margin-5 last-child inline-style"> <img src={Iconw} title="Wordpress Development" alt="Wordpress Development" /> </div>
                      </div>
                     
                    <div className="col-xs-12 col-md-12 col-sm-12 text-center no-padding"> <span className="build-app bgyellow left-part"> <a href="#contact"> Get it Stated! </a> </span>
<span className="build-app bgblue right-part"> <a href="https://opencartmobileapp.com/" target="_blank"> Looking For opencart Mobile App? </a> </span> </div>
                  </div>
                  </div>
              </div>
              </div>
            </div>


          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
          <div className="caritems">
              
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
              />
  

<div className="points">
                <div className="points-wrap">
                <div className="points-inner">
                    <div className="inner-wrapper">
                    <h1> <span> <strong> Create your dream website !</strong> </span> </h1>
                    <h3>  a complete website solution for your business or personal website...!</h3>
                    
                    <div className="icon-wrapper">
                   <div className=" margin-5 first-child inline-style"> <span> <img src={Icond} title="Drupal Development" alt="Drupal Development" /> </span> </div>
                    <div className=" margin-5 sec-child inline-style"> <img src={Iconj} title="Joomal Development" alt="Joomal Development" /> </div>
                    <div className=" margin-5 third-child inline-style"> <img src={Iconm} title="Magento Development" alt="Magento Development" /> </div>
                    <div className=" margin-5 forth-child inline-style"> <img src={Icons} title="Shopify Development" alt="Shopify Development" /> </div>
                    <div className=" margin-5 last-child inline-style"> <img src={Iconw} title="Wordpress Development" alt="Wordpress Development" /> </div>
                      </div>
                     
                    <div className="col-xs-12 col-md-12 col-sm-12 text-center no-padding"> <span className="build-app bgyellow left-part"> <a href="#contact"> Get it Stated! </a> </span>
<span className="build-app bgblue right-part"> <a href="https://opencartmobileapp.com/" target="_blank"> Looking For opencart Mobile App? </a> </span> </div>
                  </div>
                  </div>
              </div>
              </div>
           
              </div>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
          <div className="caritems">
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
              />
              <div className="points">
                <div className="points-wrap">
                <div className="points-inner">
                    <div className="inner-wrapper">
                    <h1> <span> <strong> The App Experts! </strong> </span> </h1>
                    <h3>  Connect and get your App idea rolling!</h3>
                    
                    <div className="icon-wrapper">
                   <div className=" margin-5 first-child inline-style"> <span> <img src={Icond} title="Drupal Development" alt="Drupal Development" /> </span> </div>
                    <div className=" margin-5 sec-child inline-style"> <img src={Iconj} title="Joomal Development" alt="Joomal Development" /> </div>
                    <div className=" margin-5 third-child inline-style"> <img src={Iconm} title="Magento Development" alt="Magento Development" /> </div>
                    <div className=" margin-5 forth-child inline-style"> <img src={Icons} title="Shopify Development" alt="Shopify Development" /> </div>
                    <div className=" margin-5 last-child inline-style"> <img src={Iconw} title="Wordpress Development" alt="Wordpress Development" /> </div>
                      </div>
                     
                    <div className="col-xs-12 col-md-12 col-sm-12 text-center no-padding"> <span className="build-app bgyellow left-part"> <a href="#contact"> Get it Stated! </a> </span>
<span className="build-app bgblue right-part"> <a href="https://opencartmobileapp.com/" target="_blank"> Looking For opencart Mobile App? </a> </span> </div>
                  </div>
                  </div>
              </div>
              </div>
              </div>
            
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
    </div>
  );
}

export default CarouselPage;