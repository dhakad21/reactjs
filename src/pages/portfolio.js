import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';  
import Footer from '../compnents/footer'; 
import '../App.css';
import '../css/homepage.css';
import '../css/slider.css';
import '../css/bootstrap.css';
import '../css/custom.css';
import '../css/custom_new.css';
import '../css/portfolio.css';
import '../css/shortcode.css';
import '../font-awesome/css/font-awesome.min.css';
import Kodecubedevelopment from '../images/portfolio/kodecube-development.jpg';
class Portfolio extends React.Component {
  constructor(props) {
 super(props);
 this.state ={colclass:'col-lg-4 col-sm-6 col-xs-12'}
}
render() {
  const Pitems = [
    {id: 0, title: 'axclothes', image: '../portfolio/axclothes.jpg', date: 'Dec 10, 2017', grade:'web-design media-box'},
    {id: 1, title: 'craftcry', image: '../portfolio/craftcry.jpg', date: 'Feb 25, 2014', grade:'web-design media-box'},
    {id: 2, title: 'conveyancingspace', image: '../portfolio/conveyancingspace.jpg', date: 'Aug 07, 2016', grade:'web-design media-box'},
    {id: 3, title: 'peacock colours', image: '../portfolio/peacock.jpg', date: 'Oct 03, 2017', grade:'web-design media-box'},
    {id: 4, title: 'KDK Shop', image: '../portfolio/kdk.jpg', date: 'Jan 13, 2017', grade:'web-design media-box'},
    {id: 5, title: 'ukdentistry', image: '../portfolio/ukdentistry.jpg', date: 'Oct 17, 2018', grade:'web-design media-box'},
    {id: 6, title: 'partsfixit', image: '../portfolio/partsfixit.jpg', date: 'July 17, 2017', grade:'web-design media-box'},
    {id: 7, title: 'storeadda online shop', image: '../portfolio/storeadda.jpg', date: 'Jan 18, 2018', grade:'web-design media-box'},
    {id: 8, title: 'telezon shop', image: '../portfolio/telezon.jpg', date: 'Dec 23, 2019', grade:'web-design media-box'},
    {id: 9, title: 'tibiona shop', image: '../portfolio/tibiona.jpg', date: 'Aug 10, 2018', grade:'web-design media-box'},
    {id: 10, title: 'banytom', image: '../portfolio/banytom.jpg', date: 'Feb 22, 2018', grade:'web-design media-box'},
    {id: 11, title: 'burger war', image: '../portfolio/app/burgur.jpg', date: 'July 13, 2017', grade:'apps-skin media-box'},
    {id: 12, title: 'do-boy', image: '../portfolio/app/boy.jpg', date: 'Jan 27, 2016', grade:'apps-skin media-box'},
    {id: 13, title: 'Ecorunners - Uber Delivery app', image: '../portfolio/app/rider.jpg', date: 'July 14, 2018', grade:'apps-skin media-box'},
    {id: 14, title: 'top10wise', image: '../portfolio/app/top10.jpg', date: 'Aug 18, 2018', grade:'apps-skin media-box'},
    {id: 15, title: 'DNSPB', image: '../portfolio/app/dnspb.jpg', date: 'Mar 07, 2019', grade:'apps-skin media-box'},
    {id: 16, title: 'Opencart Mobile App', image: '../portfolio/app/oc-app.jpg', date: 'May 09, 2014', grade:'apps-skin media-box'},
    {id: 17, title: 'First India News', image: '../portfolio/app/first_news.jpg', date: 'April 03, 2019', grade:'apps-skin media-box'},
    {id: 18, title: 'Museumtickets', image: '../portfolio/app/museumtickets.jpg', date: 'Jan 29, 2017', grade:'apps-skin media-box'},
    {id: 19, title: 'FTM Transport - Uber for Cargo', image: '../portfolio/app/ftm.jpg', date: 'Jun 16, 2017', grade:'apps-skin media-box'},
    {id: 20, title: 'Kyle Kuzma', image: '../portfolio/app/kylekuzma.jpg', date: 'Dec 16, 2018', grade:'apps-skin media-box'},
    {id: 21, title: 'Ninja Craft - Ecommerce', image: '../portfolio/app/ninja.jpg', date: 'July 10, 2018', grade:'apps-skin media-box'}, 
    {id: 22, title: 'Flavour - Food order online', image: '../portfolio/app/Ridect - UberTaxi.jpg', date: 'July 19, 2018', grade:'apps-skin media-box'}, 
    {id: 23, title: 'TRB - Cargo Book App', image: '../portfolio/app/TRB.jpg', date: 'Jan 15, 2018', grade:'apps-skin media-box'}, 
    {id: 24, title: 'The Sun News App', image: '../portfolio/app/the-sun.jpg', date: 'Sept 23, 2018', grade:'apps-skin media-box'},
  ];
  return (
    
    <div className="Portfolio">



<section className="content" id="load-header">
    <div id="portfolio" className="wow fadeInRight">
          <div id="image"> <img src={Kodecubedevelopment} title="kodecube website design &amp; development" alt="kodecube website design &amp; development" /> </div>
        </div>
  </section>
      
     {/* portfolio Start */}
   
      <div id="portfolio" className="portfolio">
    <div className="container">
          <div className="row">
        <div className="col-xs-12 col-md-12 col-sm-12">
              <div className=" container TitleSection">
            <header className="page-head">
                  <h1><small> Portfolio</small></h1>
                </header>
          </div>
            </div>
      </div>
          <div className="row">
        <div className="grid-section">
              <div className="content grid-container">             
          {/* MEDIA BOXES       */}
            <div className="filters-container" style={{display:'none'}}>
                  <ul className="custom-filter" id="filter">
                <li><a className="selected" href="#" data-filter="*">All</a></li>
                <li><a href="#" data-filter=".apps-skin">apps</a></li>
                <li><a href="#" data-filter=".web-design">web</a></li>
              </ul>
                </div>
            <div id="grid" className="row"> 
                          {/* axclothes  */}
                          {Pitems.map((item) => (
                       <div className= {this.state.colclass + ' ' + item.grade}>
                         {this.state.value}
                       <div className="media-box-image mb-30"> 
                             <div style={{width:"100%"}}>                          
                             <img alt="" title="" src={item.image} data-dont-wait-for-me="yes" className="done" />       
                             </div>
                             <div className="thumbnail-overlay overlay-always-visible mb-open-popup">
                           <div className="thumbnail-overlay-animated" data-from="top">
                              

                               <Popup trigger={<p className="media-box-title"> {item.title} </p>} position="auto auto">
    <div className="popup">
    <div className="pop_inner">
    <img alt="" title="" src={item.image} data-dont-wait-for-me="yes" className="done" />
    <div className="media-box-title">{item.title} </div>
    <div className="media-box-date">{item.date}</div>
    
    </div>
    </div>
    
  </Popup> 



                               </div>
                          
                         </div>
                           </div>
                     </div>  
               ))}            
              
            </div>         
            
          </div>
               {/* #grid-container  */}
              
            </div>
      </div>
        </div>
  </div>
      
    




          <Footer></Footer>    
    </div>
  );

}
}
export default Portfolio;


