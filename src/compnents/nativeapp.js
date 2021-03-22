import React from 'react'; 
import '../css/mobileapp.css';
import Mopencart from '../images/app/mopencart-mobile-app.png';
import Opencart from '../images/app/app-for-opencart.jpg';
function NativeApp() {     
  return (
    <div className="nativeapp">
<div id="mobile-app-image" className="wow fadeInRight">
        <div id="image">
        <div className="container">
            <div className="row">
            <div className="col-xs-12 col-md-7 col-sm-12 wow fadeInLeft">
                <div className="show-mobile"> <img src={Mopencart}/> </div>
              </div>
            <div className="col-xs-12 col-md-5 col-sm-12 wow fadeInLeft">
                <div className="text-aria ">
                <div className="text-overlay">
                    <div className="text-wrapper">
                    <div className="text-inner">
                        <h3 className="text-left">THE #1 NATIVE OC APP</h3>
                        <ul className=" list_point">
                        <li>Multilanguage Support </li>
                        <li>Multi Currencies Support </li>
                        <li> All shipping method support</li>
                        <li> All payment method support</li>
                        <li>Coupons/ Vouchers/Reward Points Supported </li>
                        <li> Wishlist Supported</li>
                        <li> Share To friends Via email, apps, Bluetooth etc.</li>
                        <li>Independent Featured Module </li>
                        <li> Independent Slideshow</li>
                        <li>HTML Message box </li>
                        <li> Individual Banner, App Icon and App name</li>
                        <li> Opencart Login/Register with Local, FB or Goolge+</li>
                        <li>Forget password </li>
                        <li> Multiple shipping address</li>
                        <li>Support all cart validation </li>
                      </ul>
                      </div>
                  </div>
                  </div>
              </div>
              </div>
          </div>
          </div>
      </div>
      </div>

      <div id="mobile-app-image2" className="wow fadeInRight">
        <div id="image">
        <div className="container">
            <div className="row">
            <div className="col-xs-12 col-md-5 col-sm-12 wow fadeInLeft">
                <div className="text-aria ">
                <div className="text-overlay">
                    <div className="text-wrapper">
                    <div className="text-inner">
                        <ul className="list_point">
                        <li>Customer Image </li>
                        <li> Special/discount support</li>
                        <li> Checkbox/ radio/ dropdown- product option support</li>
                        <li>Attributes support </li>
                        <li>Reviews- add/view support </li>
                        <li>Product image carousal &amp; zoom support </li>
                        <li> Tags support</li>
                        <li> Special price end timer support</li>
                        <li>Category/sub category method support </li>
                        <li>Category Sort support </li>
                        <li> View orders support</li>
                        <li>My downloads support </li>
                        <li>Push notification support on multi languages </li>
                        <li>Push Notifications with image and clickable link to category or product </li>
                        <li>Enhanced filter support </li>
                        <li> Create easy filter on category by Product options support</li>
                      </ul>
                      </div>
                  </div>
                  </div>
              </div>
              </div>
            <div className="col-xs-12 col-md-2 col-sm-12"> &nbsp; </div>
            <div className="col-xs-12 col-md-4 col-sm-12 wow fadeInLeft inner-image"> <img src={Opencart} /> </div>
          </div>
          </div>
      </div>
      </div>
 
</div>
  );
}

export default NativeApp;
