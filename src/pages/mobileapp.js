import React from 'react';

import Footer from '../compnents/footer'; 

import '../App.css';
import '../css/homepage.css';
import '../css/slider.css';
import '../css/bootstrap.css';
import '../css/custom.css';
import '../css/custom_new.css';
import '../css/mobile-app.css';
import '../font-awesome/css/font-awesome.min.css';
import Shipicon from '../images/industries/ship-icon.jpg';
import Healthfitness from '../images/industries/health-fitness.jpg';
import Fooddrink from '../images/industries/food-drink.jpg';
import Education from '../images/industries/education.jpg';
import Travel from '../images/industries/travel.jpg';
import Realestate from '../images/industries/realestate.jpg';
import Shopping from '../images/industries/shopping.jpg';
import Photographer from '../images/industries/photographer.jpg';
import Banking_services from '../images/industries/banking_services.jpg';
import Social_networking from '../images/industries/social-networking.jpg';
import Lifestyle from '../images/industries/lifestyle.jpg';
import Ondemand from '../images/industries/ondemand.jpg';
import Opencart from '../images/app/opencart.jpg';
import Topten from '../images/app/topten.jpg';
import Kyale from '../images/app/kyale.jpg';
import Ios_native from '../images/app/ios_native.jpg';
import Ios_hybrid from '../images/app/ios_hybrid.jpg';
import Android_native from '../images/app/android_native.jpg';
import Android_hybrid from '../images/app/android_hybrid.jpg';
import Cross_platform from '../images/icons/cross-platform.png';
import Game_development from '../images/icons/game-development.png';
import Mobile_web from '../images/icons/mobile-web.png';
import Android_development from '../images/icons/android-development.png';
import I_paddevelopment from '../images/icons/i-paddevelopment.png';
import Ios_development from '../images/icons/ios-development.png';
import Kodecube_banner_app from '../images/app/kodecube-banner-app.jpg';

function MobileApp() {
  return (
    <div className="MobileApp">
        
        <section className="content" id="load-header">
      <div className="mobile-app-banner">
 <figure className="margin0"> <img src={Kodecube_banner_app} alt=""/> </figure>    
  </div>
    <div className="mobile-add-development">
    <div className="container">
        <div className="row">
        <div className="col-xs-12 col-md-12 col-sm-12 wow fadeInLeft">
            <h2 className="text-center">Our Mobile App Development Services</h2>
          </div>
      </div>
        <div className="row">
        <div className="col-md-4 col-sm-6">
            <div className="service_box">
            <figure className="mb20"><img src={Ios_development} alt=""/></figure>
            <h4 className="">iPhone App<br/>
                Development</h4>
            <p>We know what it requires to make a perfect iPhone application as we have already developed over 2000 iPhone apps of different categories. We know what can turn a raw app idea into a successful app.</p>
          </div>
          </div>
        <div className="col-md-4 col-sm-6">
            <div className="service_box">
            <figure className="mb20"> <img src={I_paddevelopment} alt=""/> </figure>
            <h4>iPad App<br/>
                Development</h4>
            <p>With the deep understanding and expertise of native iPad app development services, we develop top iPad apps that add value to your business and your users' lives.</p>
          </div>
          </div>
        <div className="col-md-4 col-sm-6">
            <div className="service_box">
            <figure className="mb20"> <img src={Android_development} alt=""/> </figure>
            <h4>Android App<br/>
                Development</h4>
            <p>Using latest technology and industry experience, our full-stack Android developers develop successful Android apps that get funded and covered by Techcrunch, BBC News, and New YorkTimes.</p>
          </div>
          </div>
        <div className="col-md-4 col-sm-6">
            <div className="service_box">
            <figure className="mb20"><img src={Mobile_web} alt=""/> </figure>
            <h4>Mobile Web<br/>
                Development</h4>
            <p>We have an experienced mobile web development team, who is dedicated to delivering engaging mobile sites and apps with a user-friendly experience.</p>
          </div>
          </div>
        <div className="col-md-4 col-sm-6">
            <div className="service_box">
            <figure className="mb20"> <img src={Game_development} alt=""/> </figure>
            <h4>Mobile Game<br/>
                Development</h4>
            <p>We are not developing games, but we are making experiences for players that take them to the new world of gaming. Got an interesting game app idea? Let's turn it into a successful game.</p>
          </div>
          </div>
        <div className="col-md-4 col-sm-6">
            <div className="service_box">
            <figure className="mb20"> <img src={Cross_platform} alt=""/> </figure>
            <h4>Cross-platform<br/>
                Development</h4>
            <p>Here, we have expertise in creating multi-platform mobile app solutions for both Android and iOS devices. Using PhoneGap, Xamarin and React Native, we make apps that run smoothly on multiple platforms.</p>
          </div>
          </div>
      </div>
      </div>
  </div>
    <div id="app-platform" className="wow fadeInRight">
    <div className="container">
        <div className="row">
        <h2 className="text-center">Different Industries We Serve</h2>
      </div>
        <div className="row">
        <div className="col-md-3 col-sm-4">
            <div className="industry_box">
            <div className="industry-image" style={{ backgroundImage: `url(${Shipicon})` }}>
                <div className="abs-div"></div>
                <div className="icon"></div>
              </div>
            <h4 className="">Transport &amp; Logistic</h4>
          </div>
          </div>
        <div className="col-md-3 col-sm-4">
            <div className="industry_box">
            <div className="industry-image" style={{ backgroundImage: `url(${Healthfitness})` }}>
                <div className="abs-div"></div>
                <div className="icon"></div>
              </div>
            <h4 className="">Health &amp; Fitness</h4>
          </div>
          </div>
        <div className="col-md-3 col-sm-4">
            <div className="industry_box">
            <div className="industry-image" style={{ backgroundImage: `url(${Fooddrink})` }}>
                <div className="abs-div"></div>
                <div className="icon"></div>
              </div>
            <h4 className="">Food &amp; Drink</h4>
          </div>
          </div>
        <div className="col-md-3 col-sm-4">
            <div className="industry_box">
            <div className="industry-image" style={{ backgroundImage: `url(${Education})` }}>
                <div className="abs-div"></div>
                <div className="icon"></div>
              </div>
            <h4 className="">Education &amp; Elearning</h4>
          </div>
          </div>
        <div className="col-md-3 col-sm-4">
            <div className="industry_box">
            <div className="industry-image" style={{ backgroundImage: `url(${Travel})` }}>
                <div className="abs-div"></div>
                <div className="icon"></div>
              </div>
            <h4 className="">Travel &amp; Tourism</h4>
          </div>
          </div>
        <div className="col-md-3 col-sm-4">
            <div className="industry_box">
            <div className="industry-image" style={{ backgroundImage: `url(${Realestate})` }}>
                <div className="abs-div"></div>
                <div className="icon"></div>
              </div>
            <h4 className="">Real Estate</h4>
          </div>
          </div>
        <div className="col-md-3 col-sm-4">
            <div className="industry_box">
            <div className="industry-image" style={{ backgroundImage: `url(${Shopping})` }}>
                <div className="abs-div"></div>
                <div className="icon"></div>
              </div>
            <h4 className="">Ecommerce &amp; Shopping</h4>
          </div>
          </div>
        <div className="col-md-3 col-sm-4">
            <div className="industry_box">
            <div className="industry-image" style={{ backgroundImage: `url(${Photographer})` }}>
                <div className="abs-div"></div>
                <div className="icon"></div>
              </div>
            <h4 className="">Photo &amp; Video</h4>
          </div>
          </div>
        <div className="col-md-3 col-sm-4">
            <div className="industry_box">
            <div className="industry-image" style={{ backgroundImage: `url(${Banking_services})` }}>
                <div className="abs-div"></div>
                <div className="icon"></div>
              </div>
            <h4 className="">Banking &amp; Finance</h4>
          </div>
          </div>
        <div className="col-md-3 col-sm-4">
            <div className="industry_box">
            <div className="industry-image" style={{ backgroundImage: `url(${Social_networking})` }}>
                <div className="abs-div"></div>
                <div className="icon"></div>
              </div>
            <h4 className="">Social Networking</h4>
          </div>
          </div>
        <div className="col-md-3 col-sm-4">
            <div className="industry_box">
            <div className="industry-image" style={{ backgroundImage: `url(${Lifestyle})` }}>
                <div className="abs-div"></div>
                <div className="icon"></div>
              </div>
            <h4 className="">Lifestyle</h4>
          </div>
          </div>
        <div className="col-md-3 col-sm-4">
            <div className="industry_box">
            <div className="industry-image" style={{ backgroundImage: `url(${Ondemand})` }}>
                <div className="abs-div"></div>
                <div className="icon"></div>
              </div>
            <h4 className="">On-Demand</h4>
          </div>
          </div>
      </div>
      </div>
  </div>
    <div className="app-portfolio">
    <div className="container">
        <div className="row">
        <div className="col-xs-12 col-md-12 col-sm-12">
            <h2 className="text-center"> Explore Our Mobile App Portfolio </h2>
          </div>
      </div>
        <div className="row">
        <div className="col-xs-12 col-md-4 col-sm-6">
            <div className="caption">
            <div className="image"> <img src={Opencart}/> </div>
            <div className="name">
                <div className="wrapper">
                <div className="text"><a href="https://opencartmobileapp.com"> <i>Opencart Ecoomerce Shop </i> </a><a href="/portfolio.html">-More Portfolio</a></div>
              </div>
              </div>
          </div>
          </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <div className="caption">
            <div className="image"> <img src={Topten}/> </div>
            <div className="name">
                <div className="wrapper">
                <div className="text"><a href="/portfolio.html"><i>  Top Ten News</i> -More Portfolio</a>  </div>
              </div>
              </div>
          </div>
          </div>
        <div className="col-xs-12 col-md-4 col-sm-6">
            <div className="caption">
            <div className="image"> <img src={Kyale} /> </div>
            <div className="name">
                <div className="wrapper">
                <div className="text">   <a href="/portfolio.html"><i>Kyale Kuzma Celebrity App</i> -More Portfolio</a></div>
              </div>
              </div>
          </div>
          </div>
      </div>
      </div>
  </div>
    <div id="ios-development">
    <div className="container">
        <div className="row">
        <div className="col-xs-12 col-md-12 col-sm-12">
            <div className="services_inner">
            <div className="icon_ser"> </div>
            <div className="wrap">
                <h3>iPhone Apps Development</h3>
                <p>A very much outlined iPhone application resemble a magnum opus workmanship that can win millions' heart in a first look. Created iPhone application resemble a minicomputer that can astonish your clients with its unparalleled execution. That is the thing that Kodecube creates for you.</p>
              </div>
          </div>
          </div>
      </div>
        <div className="row">
        <div className="col-xs-12 col-md-6 col-sm-12">
            <div className="caption">
            <div className="image"> <img src={Ios_native}/> </div>
            <div className="name">
                <h3 className="">Native iPhone app development</h3>
              </div>
            <p> Native iPhone apps are specific to iOS plateform
                using the development tools and language that the iOS platform supports. For e.g., Xcode, Swift
                and Objective-C. Native apps look and perform the best due to adequate access to device's
                hardware and iOS-specific features.</p>
          </div>
          </div>
        <div className="col-xs-12 col-md-6 col-sm-12">
            <div className="caption">
            <div className="image"> <img src={Ios_hybrid} /> </div>
            <div className="name">
                <h3 className="">Hybrid iPhone app development</h3>
              </div>
            <p> Hybrid iPhone apps are developed using the standard web technologies like HTML5, CSS, JavaScript and React Native. The final code is wrapped in a native container and shipped as a regular app. Hybrid approach is often called "Write Once Run Anywhere" as the same code can serve multiple plateforms along with iOS.</p>
          </div>
          </div>
      </div>
      </div>
  </div>
    <div className="androd-development">
    <div className="container">
        <div className="row" id="androd develop">
        <div className="col-xs-12 col-md-12 col-sm-12">
            <div className="services_inner">
            <div className="icon_ser"> </div>
            <div className="wrap">
                <h3>Android App Development</h3>
                <p>Today Android is not only a Mobile arbor it is a capable device for any business to enhance the business execution with the client engagement. Our reality class application developers make that conceivable with attractive Android application. Kodecube crafts for you the best in class apps in android that provides you an all-round experience across diverse verticals.</p>
              </div>
          </div>
          </div>
      </div>
        <div className="row">
        <div className="col-xs-12 col-md-6 col-sm-12">
            <div className="caption">
            <div className="image"> <img src={Android_native}/> </div>
            <div className="name">
                <h3 className="">Native android app development</h3>
              </div>
            <p> Native android apps are specific to android plateform using the development tools and language that the android platform supports. For e.g., Android studio, Google Material and Java. Native apps look and perform the best due to adequate access to device's hardware and android-specific features.</p>
          </div>
          </div>
        <div className="col-xs-12 col-md-6 col-sm-12">
            <div className="caption">
            <div className="image"> <img src={Android_hybrid}/> </div>
            <div className="name">
                <h3 className="">Hybrid android app development</h3>
              </div>
            <p> Hybrid android apps are developed using the standard web technologies like HTML5, CSS, JavaScript and React Native. The final code is wrapped in a native container and shipped as a regular app. Hybrid approach is often called "Write Once Run Anywhere" as the same code can serve multiple plateforms along with Android.</p>
          </div>
          </div>
      </div>
      </div>
  </div>
    <div className="androd-development">
    <div className="container">
        <div className="row">
        <div className="col-xs-12 col-md-12 col-sm-12">
            <div className="services_inner">
            <div className="icon_ser"> </div>
            <div className="wrap">
                <h3>iPad App Development</h3>
                <p>Being a top-notch company in iPad app development industry, we are committed to deliver the impeccable quality with our out of the box approach. Having an add on of vast experience in the app development over the years, we have served our clients to crystallize their business dreams. We are committed to serve you with quality on time. We craft your dreams beyond your expectations</p>
              </div>
          </div>
          </div>
      </div>
      </div>
  </div>
  </section>
        
        
         
          <Footer></Footer>    

    </div>
  );
}

export default MobileApp;
