import React from 'react'; 
import AwesomeprojectsIcon from '../images/background/awesome-projects.jpg';
import AppworkIcon from '../images/background/app-work.jpg';

import '../css/support.css'
function Portfolio() {
  return (
    <div className="New_application">
<section id="our-projects" className="wow fadeInRight">
    <div className="projects_inner">
    <div className="container">
        <div className="row">
        <div className="col-xs-12 col-md-6 col-sm-6">
            <div className="our-projects"> <img src={ AwesomeprojectsIcon }/> </div>
          </div>
        <div className="col-xs-12 col-md-6 col-sm-6">
            <div className="projects-wrapper">
            <div className="projects-inner">
                <div className="projects-text">
                <h2>308+ Awesome Projects </h2>
                <p> We have developed platforms like online russian tv recharge site, Italian site like ebay system with many more advanced features like seller account subscriptions, renewals, limit system etc, pizza delivery sites, many well known ecommerce site. Our Expertise on bussiness consulting is key factor to generate awsome web or apps for you.</p>
              </div>
              </div>
          </div>
          </div>
      </div>
      </div>
  </div>
  </section>
  <section id="our-products" className="wow fadeInRight">
  <div className="projects_inner">
  <div className="container">
      <div className="row">
      <div className="col-xs-12 col-md-6 col-sm-6 show-me-mobile">
          <div className="our-projects"> <img src={AppworkIcon} /> </div>
        </div>
      <div className="col-xs-12 col-md-6 col-sm-6">
          <div className="projects-wrapper">
          <div className="projects-inner">
              <div className="projects-text">
              <h2>50+ Mobile Apps </h2>
              <p> We have delivered successfully apps on various bussiness platforms like ecommerce, delivery apps, transporter apps, food ordering and restraunt system, celebrity apps or blog apps etc. We also have own prebuilt solution for your ecommerce stores or any delivery or food apps you need. </p>
            </div>
            </div>
        </div>
        </div>
      <div className="col-xs-12 col-md-6 col-sm-6 hide-me-mobile">
          <div className="our-projects"> </div>
        </div>
    </div>
    </div>
</div>
</section>
</div>
  );
}

export default Portfolio;
