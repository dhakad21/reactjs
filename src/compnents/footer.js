import React from "react";

// import Userf from '../images/user/user-f.png';


  function Footer() {
  
  return (
<footer className="minifooter">
  <div className="container">
        <div className="row">
        <div className="col-xs-12 col-md-8 col-sm-12">
            <p>Kodecube | Cambrian Infosystems Pvt Ltd © 2018. All rights reserved.</p>
          </div>
        <div className="col-xs-12 col-md-4 col-sm-12">
            <ul className=" footer_social clearfix">
            <li><a data-toggle="tooltip" title="facebook" href="https://www.facebook.com/cambrianinfosystems/" target="_blank"><i className="fa fa-facebook"></i></a></li>       
             <li><a data-toggle="tooltip" title="whatsapp" href="https://wa.me/919782357970?text=Hi"> <i className="fa fa-whatsapp" aria-hidden="true"></i> </a></li>
          </ul>
          </div>
      </div>
      </div>	  
	  </footer>
  );
}

export default Footer;




