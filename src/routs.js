import React from 'react';
import {  BrowserRouter as Router,  Switch,  Route,  Link,} from "react-router-dom";
import HomePage from './pages/homepage';
import MobileApp from './pages/mobileapp';
import Javadevelopment from './pages/javadevelopment';
import Phpdevelopment from './pages/phpdevelopment';
import Laraveldevelopment from './pages/laraveldevelopment';
import Seosmo from './pages/seosmo';
import Designdevelopment from './pages/design-development';
import Portfolio from './pages/portfolio';
import Cmsdevelopment from './pages/cmsdevelopment';
import OpencartApp from './pages/opencartapp';
import Logo from './images/logo.png';
import './css/services.css';

class Routes extends React.Component {
  render() {
    return (
      <div className="all_page">
      <div className="short-details-container"> <span className="details-btn" data-toggle="dropdown"> <i className="fa fa-info" aria-hidden="true"></i> </span>
      <div className="short-details">
        <div className="pd15 bg-white jumbotron">
          <h3>Address Info</h3>
          <address>
            <strong>India.</strong> <br></br>

            <abbr title="Phone">Tel: </abbr> <a href="tel:+9782357970"> +91-9782357970 </a> </address>

          <address>
            <strong>Skype</strong> <a href="skype:khan.atir?call">khan.atir</a><br></br>
            <strong>Email</strong><a href="mailto:info@kodecube.com" target="_top"> info@kodecube.com</a>
            <div className="bottom-details"> <a className="" href="tel:+9782357970">Call Now</a>
              <a className="whatsapp" target="_blank" title="whatsapp" href="https://wa.me/919782357970?text=Hi"> Whatsapp </a> </div>
          </address>

        </div>
      </div>
    </div>

    <header className="App-header">
    <div className="content-box" id="home">
          <div className="header-top">
            <div className="container">
              <div className="pull-left">
                <ul className="list-inline">
                  <li><a href="tel:+9782357970"> <i className="fa fa-phone" aria-hidden="true"></i> <span> India +91-9782357970 </span> </a></li>
                  <li><a href="mailto:info@kodecube.com" target="_top"><i className="fa fa-envelope" aria-hidden="true"></i> info@kodecube.com</a> </li>
                </ul>
              </div>
              <div className="pull-right">
                <ul className="list-inline header_social clearfix">
                  <li><a data-toggle="tooltip" title="facebook" href="https://www.facebook.com/cambrianinfosystems/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                  <li><a data-toggle="tooltip" title="whatsapp" href="https://wa.me/919782357970?text=Hi"> <i className="fa fa-whatsapp" aria-hidden="true"></i> </a></li>
                </ul>
              </div>
            </div>
          </div>
          </div>
      </header>
      <Router> 
      <div className="header-bottom container">
            <div className="container_item">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                <Link className="logo" to="/">
                  <img src={Logo} title="opencart mobile app" alt="opencart mobile app" className="web-logo" />
                </Link>
              </div>
              <div className="navbar-collapse collapse ">
                <ul className="nav navbar-nav navbar-right">
                  <li className="active"><Link to="/">home</Link> </li>

                  <li className="submenu"> 
                  <Link to="/mobileapp" className="dropdown dropdown-toggle" onClick={this.handleToggle}>Services</Link>                   
                    <ul className="dropdown-menu" id="menu-services">
                      <li> <Link to="/mobileapp">Mobileapp</Link></li>
                  <li> <Link to="/java-development">Java Development </Link></li>
                  <li> <Link to="/php-development">Php Development </Link></li>
                  <li> <Link to="/laravel-development">Laravel development </Link></li>
                  <li> <Link to="/seo-smo">SEO SMO Development </Link></li>
                  <li> <Link to="/design-development">Web Design & Development</Link></li>
                      </ul>
                   </li>
                  <li> <Link to="/portfolio">Portfolio</Link></li>
                  <li> <Link to="/cms-development">cms development</Link></li>
                  <li> <Link to="/opencartapp">opencart app</Link></li>
                  <li> <a href="https://wa.me/919782357970?text=Hi" className="whatsapp" title="whatsapp"  target="_blank">Whatsapp</a></li>
                </ul>
              </div>             
            </div>
          </div>
          <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/mobileapp' component={MobileApp} />
        <Route path='/java-development' component={Javadevelopment} />
        <Route path='/php-development' component={Phpdevelopment} />
        <Route path='/laravel-development' component={Laraveldevelopment} />
        <Route path='/seo-smo' component={Seosmo} />
        <Route path='/design-development' component={Designdevelopment} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/cms-development' component={Cmsdevelopment} />
        <Route path='/opencartapp' component={OpencartApp} />       
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
      </Router>
      </div>
    );
  }
}
export default Routes;