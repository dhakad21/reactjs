import React from 'react';
import Carousel from '../compnents/slider';
import Cusreview from '../compnents/cusreview';
import Multitabs from '../compnents/multitabs';
import Project from '../compnents/project';
import Portfolio from '../compnents/portfolio';
import Subjects from '../compnents/subjects';
import Application from '../compnents/application';
import Testimonal from '../compnents/testimonal';
import Contact from '../compnents/contact';
import Footer from '../compnents/footer';

import '../App.css';
import '../css/homepage.css';
import '../css/slider.css';
import '../css/bootstrap.css';
import '../css/custom.css';
import '../css/custom_new.css';
import '../font-awesome/css/font-awesome.min.css';

function Homepage() {
  return (
    <div className="Homepage">
        
          <Carousel></Carousel>
        
        
          <Cusreview></Cusreview>
        
          <Multitabs></Multitabs>
          <Project></Project>
          <Portfolio></Portfolio>
          <Subjects></Subjects>
          <Application></Application>
          <Testimonal></Testimonal>
          <Contact></Contact>    
          <Footer></Footer>    

    </div>
  );
}

export default Homepage;
