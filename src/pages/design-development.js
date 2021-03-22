import React from 'react';

import Footer from '../compnents/footer'; 

import '../App.css';
import '../css/homepage.css';
import '../css/slider.css';
import '../css/bootstrap.css';
import '../css/custom.css';
import '../css/custom_new.css';
import '../css/webdes-develop.css';

import '../font-awesome/css/font-awesome.min.css';

import Webdevelopment from '../images/php/web-development.png';
import Ecommerce from '../images/php/ecommerce.jpg';
import Websitemaintenance from '../images/design/website-maintenance.png';
import Google_kodecube from '../images/design/google-kodecube.png';
import Kodecube_custom from '../images/design/kodecube-custom.png';


function Designdevelopment() {
  return (
    <div className="Designdevelopment">

<section class="content design-services">
  <div class="start-up web-design  wow fadeInRight">
    <div class="overseas ranking pdt100 pdb100">
      <div class="container">
        <div class="col-xs-12 col-md-12 col-sm-12">
          <h1 class="text-center"> <strong>Professional Designs</strong> </h1>
          <h1 class="text-center"> Great UI Experience </h1>
          <p class="text-center"> We design and develop websites that work across all screens and devices </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container twice-block">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-sm-6 text-section">
        <div class="block-content">
          <aside class="right">
            <h2> RESPONSIVE WEB DESIGN </h2>
            <p class="text-centerx"> We design and develop websites that work across all screens and devices.</p>
          </aside>
        </div>
      </div>
      <div class="col-xs-12 col-md-6 col-sm-6 image-section">
        <div class="block-image"> <img alt="" src={Webdevelopment} /> </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-6 col-sm-6 text-section order2">
        <div class="block-content">
          <aside class="right">
            <h2> E-COMMERCE WEBSITE DEVELOPMENT </h2>
            <p class="text-centerx"> We'll help you grow your business online with a user-friendly, HTTPS secure transactional e-commerce website.</p>
          </aside>
        </div>
      </div>
      <div class="col-xs-12 col-md-6 col-sm-6">
        <div class="block-image"> <img alt="" src={Ecommerce} /> </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-6 col-sm-6 text-section">
        <div class="block-content">
          <aside class="right">
            <h2> WEBSITE MAINTENANCE </h2>
            <p class="text-centerx"> In this ever-changing market, websites don't work their best without a reliable maintenance system in place. Our system engineers and developers always have your back.</p>
          </aside>
        </div>
      </div>
      <div class="col-xs-12 col-md-6 col-sm-6">
        <div class="block-image"> <img alt="" src={Websitemaintenance} /> </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-6 col-sm-6 text-section order2">
        <div class="block-content">
          <aside class="right">
            <h2> GOOGLE FRIENDLY WEBSITES </h2>
            <p> Search engines have made it loud and clear that websites should both make it obvious what they are about and appeal to the average web user. We can achieve that gentle balance that places your website higher in the search rankings. We do this without compromising the look and feel of your website. </p>
          </aside>
        </div>
      </div>
      <div class="col-xs-12 col-md-6 col-sm-6">
        <div class="block-image"> <img alt="" src={Google_kodecube}/> </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-6 col-sm-6 text-section">
        <div class="block-content">
          <aside class="right">
            <h2> Custom Content Management Systems </h2>
            <h4 class="text-centerx"> We recognize that your website needs are unique.</h4>
            <p> Our web designers are experienced with the most effective content management systems ranging from the open-source WordPress platform to Adobe's Experience Manager platform. We design custom websites with your features and functionality in mind to give your team the ability to manage the content effectively while producing brand-defining visuals. We ensure your custom design is built to take advantage of each platform's defining features to get the most out of the unique strengths that drove you to choose it to begin with.</p>
          </aside>
        </div>
      </div>
      <div class="col-xs-12 col-md-6 col-sm-6">
        <div class="block-image"> <img alt="" src={Kodecube_custom} /> </div>
      </div>
    </div>
  </div>
</section>
          <Footer></Footer>    
    </div>
  );
}
export default Designdevelopment;
