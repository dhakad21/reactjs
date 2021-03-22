import React from 'react';

import Footer from '../compnents/footer'; 

import '../App.css';
import '../css/homepage.css';
import '../css/slider.css';
import '../css/bootstrap.css';
import '../css/custom.css';
import '../css/custom_new.css';
import '../css/laravel.css';



import '../font-awesome/css/font-awesome.min.css';





import Lara_logo from '../images/laravel/lara-logo.png';
import Expert_image from '../images/expert-image.png';








function Laraveldevelopment() {
  return (
    <div className="Laraveldevelopment">        
<section class="content laravel-services">
    <div class="laravel_banner">
      <div class="container">
        <div class="col-xs-12 col-md-12 col-sm-12">
          <div class="image">
            <h1 class="text-center"> <img src={Lara_logo} alt="Laravel development"/> </h1>
            <h2 class="text-center"> Start Your Project With Us</h2>
            <h4 class="text-center"> We Help you...</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="start-up pdt100 pdb100 wow fadeInRight">
      <div class="container">
        <div class="col-xs-4 col-md-4 col-sm-4">
          <div class="left_cols">
            <h1>
              <p style={{fontSize:'20px',textalign:'center' }}> Why Laravel development with us</p>
              <p style={{marginTop:'30px',marginRight:'0',marginBottom:'20px', textAlign:'center' }}>
                <img src={Expert_image} alt="Laravel development"/></p>
              <br/>
              <p> <span class="right-mark"> </span> High technical expertise <br/>
                <br/>
              </p><p>
              </p><p> <span class="right-mark"> </span>Timely support &amp; maintenance <br/>
                <br/>
              </p><p>
              </p><p> <span class="right-mark"> </span>Quick turnaround time <br/>
                <br/>
              </p><p>
              </p><p> <span class="right-mark"> </span>Affordable without quality compromise <br/>
                <br/>
              </p><p>
              </p><p> <span class="right-mark"> </span>Innovative development solutions <br/>
                <br/>
              </p><p>
              </p><p> <span class="right-mark"> </span>Meets commercial &amp; technical challenges <br/>
                <br/>
              </p><p>
              </p><p> <span class="right-mark"> </span>Reliable, well tested code <br/>
                <br/>
              </p><p> 
            </p></h1>
          </div>
        </div>
        <div class="col-xs-8 col-md-8 col-sm-8">
          <ul class="list-inline">
            <li class="col-xs-12 col-md-12 col-sm-12">
              <div class="block-content">
                <aside class="right">
                  <h2> <span class="right-mark"> </span> Laravel Horizon </h2>
                  <p>Laravel Horizon provides a beautiful dashboard and code-driven configuration for your Redis queues.</p>
                </aside>
              </div>
            </li>
            <li class="col-xs-12 col-md-12 col-sm-12">
              <div class="block-content">
                <aside class="right">
                  <h2><span class="right-mark"> </span> Laravel Dusk </h2>
                  <p>Laravel Dusk provides an expressive, easy-to-use browser automation and testing API. You'll love it.</p>
                </aside>
              </div>
            </li>
            <li class="col-xs-12 col-md-12 col-sm-12">
              <div class="block-content">
                <aside class="right">
                  <h2><span class="right-mark"> </span> Laravel Echo </h2>
                  <p>Event broadcasting, evolved. Bring the power of WebSockets to your application without the complexity.</p>
                </aside>
              </div>
            </li>
            <li class="col-xs-12 col-md-12 col-sm-12">
              <div class="block-content">
                <aside class="right">
                  <h2><span class="right-mark"> </span> Laravel Ecosystem </h2>
                  <p>Instant PHP Platforms On Linode, DigitalOcean, and more. Push to deploy, PHP 7.2, HHVM, queues, and everything you need to launch and deploy amazing Laravel applications.</p>
                  <p>Launch your application in minutes!</p>
                </aside>
              </div>
            </li>
            <li class="col-xs-12 col-md-12 col-sm-12">
              <div class="block-content">
                <aside class="right">
                  <h2><span class="right-mark"> </span> Fast Developments </h2>
                  <p>Modular instinctive packaging system saves lots of time in development. Also, customization and setup processes are very simple. </p>
                </aside>
              </div>
            </li>
            <li class="col-xs-12 col-md-12 col-sm-12">
              <div class="block-content">
                <aside class="right">
                  <h2><span class="right-mark"> </span> Inbuilt Features </h2>
                  <p>Numerous inbuilt features in Laravel help with service layers, injection dependency containers, and template engines. Ensures well built coding. </p>
                </aside>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

          <Footer></Footer>    
    </div>
  );
}
export default Laraveldevelopment;
