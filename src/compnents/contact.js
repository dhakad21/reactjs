import React from "react";

// import Userf from '../images/user/user-f.png';


  function Contact() {
      const titleStyle = {
        marginBottom:'7px',
        marginTop:'60px',        
      };
      const mr5 = {
        marginRight:'5px',        
      };
  return (
<div id="contact" className="contact  wow fadeInRight">
    <div className="contact-bg">
    <div className="container">
        <div className="row">
        <div className="col-xs-12 col-md-8 col-sm-12 left-side">
            <div className=" container TitleSection">
            <header className="page-head">
                <h1> Join Over 12,300+ Customer Enjoying With Us </h1>
              </header>
          </div>
          </div>
        <div className="col-xs-12 col-md-8 col-sm-12">
            <div className="contact_wrap">
            <form id="passion_form" method="post" enctype="multipart/form-data" className="form-horizontal">
                <div className="form-group">
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <input type="text" size="50" name="contactname" id="InputName" value="" className="form-control required" placeholder="Your Name*" />
                  </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <input type="text" size="50" name="email" id="email" value="" className="form-control required email" placeholder="Enter Email*"/>
                  </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <input type="text" size="50" name="phone" id="phone" value="" className="form-control required phone" placeholder="Enter phone*" />
                  </div>
              </div>
                <div className="form-group">
                <div className="col-xs-12 col-md-6 col-sm-6">
                    <input type="text" size="50" name="address" id="address" value="" className="form-control" placeholder="address" />
                  </div>
                <div className="col-xs-12 col-md-6 col-sm-6">
                    <input type="text" size="50" name="website" id="website" value="" className="form-control" placeholder="Website" />
                  </div>
              </div>
                <div className="form-group">
                <div className="col-xs-12 col-md-12 col-sm-12">
                    <textarea className="form-control required" rows="6" name="message" id="message" placeholder="Your Message*"></textarea>
                  </div>
              </div>
                <button type="submit" className="btn btn-default btn-block">Submit</button>
              </form>
            <p id="success"></p>
            <p id="error"></p>
          </div>
           
          </div>
        <div className="col-xs-12 col-md-4 col-sm-12 right-side">
            <div className="address-inner">
            <div className="inner-dark">
                <div className="inner-wrapper">
                <div className="inner-overlay">
                    <h3 style={titleStyle}> address </h3>
                    <span className="address"> Mansarovar jaipur, india</span>
                    <h3> call us </h3>
                    <span className="address"> +91-9782357970</span>
                    <ul className=" footer_social clearfix">
                    <li><a data-toggle="tooltip" title="facebook" href="https://www.facebook.com/cambrianinfosystems/" target="_blank" style={mr5}><i className="fa fa-facebook"></i></a></li>
                
                 
                   
                    <li><a data-toggle="tooltip" title="whatsapp" href="https://wa.me/919782357970?text=Hi"> <i className="fa fa-whatsapp" aria-hidden="true"></i> </a></li>
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



  );
}

export default Contact;




