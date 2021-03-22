import React, { Component } from "react";
import { MDBTabPane, MDBTabContent } from "mdbreact";
import '../css/multi-tabs.css';
import '../flaton/flaticon.css';
import ajs from '../images/icon/ajs.png';
import cakeicon from '../images/icon/cakeicon.png';
import codeigniter from '../images/icon/codeigniter.png';
import drup from '../images/icon/drup.png';
import ers from '../images/icon/ers.png';
import laravelicon from '../images/icon/laravelicon.png';
import nodejs from '../images/icon/nodejs.png';
import or from '../images/icon/or.png';
import smm from '../images/icon/smm.png';

  class Multitabs extends Component {
  state = {
    activeItem: "1"
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  render() {
    return (
    
        
    
      <div className="Multitabs">
      <div className="kc-work">

      <div className="top-tabs">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12 col-sm-12">


                <ul data-test="nav" class="nav nav-tabs">
                <li class="nav-item">
                    <div to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab">
                    <i className="glyph-icon flaticon-smartphone" aria-hidden="true"></i>mobile
                    </div>
                  </li>
                  <li class="nav-item">
                    <div to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab">
                    <i className="glyph-icon flaticon-browser" aria-hidden="true"></i> web
                    </div>
                    </li>
                    <li class="nav-item">
                    <div to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab">
                    <i className="glyph-icon flaticon-screen" aria-hidden="true"></i> marketing
                    </div>
                    </li>

                    <li class="nav-item">
                    <div to="#" active={this.state.activeItem === "3"} onClick={this.toggle("4")} role="tab">
                    <i className="glyph-icon flaticon-cloud-computing-2" aria-hidden="true"></i> salesforce
                    </div>
                    </li>

                    <li class="nav-item">
                    <div to="#" active={this.state.activeItem === "3"} onClick={this.toggle("5")} role="tab">
                    <i className="glyph-icon flaticon-network" aria-hidden="true"></i> it soluition
                    </div>
                    </li>
                    <li class="nav-item">
                    <div to="#" active={this.state.activeItem === "3"} onClick={this.toggle("6")} role="tab">
                    <i className="glyph-icon flaticon-smartwatch" aria-hidden="true"></i> hire us
                    </div>
                    </li>
                    <li class="nav-item">
                    <div to="#" active={this.state.activeItem === "3"} onClick={this.toggle("7")} role="tab">
                    <i className="glyph-icon flaticon-online-shop" aria-hidden="true"></i> e-commerce
                    </div>
                    </li>


                </ul>
                </div>
                </div>
                </div>
                </div>

                <div className="tabs-details">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12 col-sm-12">

             
                <MDBTabContent activeItem={this.state.activeItem}>
                  <MDBTabPane tabId="1" role="tabpanel">
                   
                  <h3>mobile app development</h3>
                  <p>We deliver and build the Mobile Apps using technologies that amplify the UI and user experience and meet the specific bussiness requirements. We offer a complete package and provide a consultant for requirement gathering knowing the importance of the bussiness requirements. The team utilize the best technologies for great user experience and a more professional and clean interface with awsome animation effects. We are expert in Native and all platfroms of hybrid apps like Xamarin, Ionic , React Native and Flutter.</p>
  
                  <div className="icons-listed">
                    <ul className="list-inline">
                      <li> <span> <i className="glyph-icon flaticon-apple" aria-hidden="true"></i> </span>  ios <br className="line-break" />
                        development </li>
                      <li><span>  <i className="glyph-icon flaticon-android" aria-hidden="true"></i> </span> android <br className="line-break" />
                        development </li>
                      <li> <span> <i className="glyph-icon flaticon-responsive" aria-hidden="true"></i> </span> cross platform <br className="line-break" />
                        app development </li>
                      <li> <span> <i className="glyph-icon flaticon-smartphone-2" aria-hidden="true"></i> </span> mobile application <br className="line-break" />
                        maintenance</li>
  
                    </ul>
                  </div>
                  <div className="button-button">
                    <div className="pull-center text-center">
                      <p> <a className="btn btn-default" href="#contact">learn more</a> <a className="btn btn-default" href="#contact">Inquire now </a> </p>
                    </div>
                  </div>
                   
                  </MDBTabPane>
                  <MDBTabPane tabId="2" role="tabpanel">
                   
                  <h3>web development</h3>
                  <p>Cambrian Infosystems Pvt Ltd being the leading website and app development company with its office at Jaipur deliver websites with various technologies and specific bussiness requirements. Our range of websites include Dating webs and apps, Delivery websites, Ecommerce websites, Corporate or customer websites, CRM etc. We work with various web technologies like PHP, Java, Angular, HTMl 5, CI and more!</p>
                  <div className="icons-listed">
                    <ul className="list-inline">
                      <li> <span> <i className="glyph-icon flaticon-php" aria-hidden="true"></i> </span> PHP <br className="line-break" />
                        development </li>
                      <li> <span> <img src={nodejs} title="node.js" alt="node.js" /> </span> node.js <br className="line-break" />
                        development </li>
                        <li> <span><img src={ajs} title="angular js platform" alt="angular js platform" /> </span> angular js platform <br className="line-break" />
                          development </li>
                          <li> <span><img src={codeigniter} title="CodeIgniter" alt="CodeIgniter" /> </span> CodeIgniter<br className="line-break" />
                            development</li>
                            <li> <span> <img src={cakeicon} title="cakePHP" alt="cakePHP" /> </span> cakePHP<br className="line-break" />
                              development</li>
                              <li> <span> <img src={laravelicon} title="laravel" alt="laravel" /> </span> laravel<br className="line-break" />
                                development</li>
  
                                <li> <span> <i className="flaticon-ux-design" aria-hidden="true"></i> </span>  ui/ux<br className="line-break" />
                                  design</li>
            </ul>
        </div>
                            <div className="button-button">
                              <div className="pull-center text-center">
                                <p><a className="btn btn-default" href="#contact">learn more</a> <a className="btn btn-default" href="#contact">Inquire now </a></p>
                              </div>
                            </div>
                  
                
                  </MDBTabPane>
                  <MDBTabPane tabId="3" role="tabpanel">
                  
                  <h3>Digital Marketing Services</h3>
                            <p>Cambrian Infosystems Pvt Ltd is a Digital Marketing Services INDIA based Digital Marketing Agency providing complete 360 degree Digital Marketing solutions for brands all over the world. Our  Digital Marketing Services include Digital Marketing Intelligence, Market Research, Search Engine Optimization, Search Engine Marketing, Search Engine Advertising, Social Media Optimization, Social Media Marketing &amp; Ecommerce Solutions.</p>
                            <div className="icons-listed">
                              <ul className="list-inline">
                                <li> <span> <i className="glyph-icon flaticon-website" aria-hidden="true"></i> </span> Search Engine<br className="line-break" />
                                  Optimization </li>
                                <li> <span> <i className="glyph-icon flaticon-funnel" aria-hidden="true"></i> </span> PPC<br className="line-break" />
                                  Management </li>
                                <li> <span> <img src={smm} title="Social Media" alt="Social Media" /> </span> Social Media <br className="line-break" />
                                  Optimization </li>
                                  <li> <span> <img src={or} title="Online Reputation" alt="Online Reputation" /> </span> Online Reputation <br className="line-break" />
                                    Management</li>
                                    <li> <span> <i className="flaticon-screen" aria-hidden="true"></i> </span> Content <br className="line-break" />
                                      Marketing</li>
                                    <li> <span> <i className="glyph-icon flaticon-funnel" aria-hidden="true"></i> </span> Lead<br className="line-break" />
                                      Generation</li>
            </ul>
        </div>
                                <div className="button-button">
                                  <div className="pull-center text-center">
                                    <p><a className="btn btn-default" href="#contact">learn more</a> <a className="btn btn-default" href="#contact">Inquire now </a></p>
                                  </div>
                                </div>
                   
                  </MDBTabPane>

                  <MDBTabPane tabId="4" role="tabpanel">
                  
                  <h3>SalesForce Development</h3>
                                <p>Businesses are no longer carried on the way they used to be. Cloud computing is here to change the way we used to trade. Salesforce is a solution developed to increase sales more than what used to be provided by conventional Customer Relationship Management (CRM) systems. The tools and services provided by Salesforce are designed to turn a business into a social media driven enterprise where everyone right from employees, vendors and customer are knitted together in a transparent and faster platform where no software or hardware is needed bring the stakeholders together and helping a business to function more efficiently than ever.</p>
                                <div className="icons-listed">
                                  <ul className="list-inline">
                                    <li> <span> <i className="flaticon-cloud-coding" aria-hidden="true"></i> </span> Salesforce <br className="line-break" />
                                      Integration </li>
                                    <li> <span> <i className="flaticon-networking-1" aria-hidden="true"></i> </span> Salesforce <br className="line-break" />
                                      Consulting </li>
                                    <li> <span> <i className="flaticon-cloud-computing-3" aria-hidden="true"></i> </span> Custom Salesforce <br className="line-break" />
                                      Development </li>
                                    <li> <span> <i className="flaticon-settings" aria-hidden="true"></i> </span> Salesforce <br className="line-break" />
                                      Maintenance</li>
                                    <li> <span> <i className="flaticon-cloud-computing-1" aria-hidden="true"></i> </span> Salesforce <br className="line-break" />
                                      Customization</li>
                                    <li> <span> <i className="flaticon-cloud-computing-2" aria-hidden="true"></i> </span> Salesforce Industry <br className="line-break" />
                                      Solutions</li>
                                  </ul>
                                </div>
                                <div className="button-button">
                                  <div className="pull-center text-center">
                                    <p><a className="btn btn-default" href="#contact">learn more</a> <a className="btn btn-default" href="#contact">Inquire now </a></p>
                                  </div>
                                </div>
                    
                   </MDBTabPane>


                   <MDBTabPane tabId="5" role="tabpanel">
                  
                   <h3>Industry Solutions</h3>
                                <p>Create data-driven digital transformation outcomes with our market-leading enterprise cloud data management solutions tailored for your industry.</p>
                                <div className="icons-listed">
                                  <ul className="list-inline">
                                    <li> <span> <i className="flaticon-innovation" aria-hidden="true"></i> </span> Software <br className="line-break" />
                                      Consulting </li>
                                    <li> <span> <img src={ers} title="Enterprise Solution" alt="Enterprise Solution" />  </span> Enterprise <br className="line-break" />
                                      Solution </li>
                                      <li> <span> <img src={ers} title="SaaS Development" alt="SaaS Development" /> </span> SaaS <br className="line-break" />
                                        Development </li>
                                        <li> <span> <i className="flaticon-crm" aria-hidden="true"></i> </span> CRM <br className="line-break" />
                                          Solution</li>
                                        <li> <span> <i className="flaticon-cloud-computing-4" aria-hidden="true"></i> </span> Cloud <br className="line-break" />
                                          Computing</li>
                                        <li> <span> <i className="flaticon-bitcoin" aria-hidden="true"></i> </span>  Blockchain <br className="line-break" />
                                          Development</li>
            </ul>
        </div>
                                    <div className="button-button">
                                      <div className="pull-center text-center">
                                        <p><a className="btn btn-default" href="#contact">learn more</a> <a className="btn btn-default" href="#contact">Inquire now </a></p>
                                      </div>
                                    </div>
                    
                   </MDBTabPane>


                   <MDBTabPane tabId="6" role="tabpanel">
                  
                   <h3>Hire Developer</h3>
                                    <h4>Pay by Milestones</h4>
                                    <p>Milestones are like checkpoints you create to ensure you're happy with the work every step of the way. Build as many milestones into your job as you want — set a due date for each milestone and the amount to be paid.</p>
                                    <h4>Pay by Task </h4>
                                    <p>Pay for a single completed task, however big or small. Create and assign tasks for work as needed, and generate invoices from each task once they are completed.</p>
                                    <div className="icons-listed">
                                      <ul className="list-inline">
                                        <li> <span> <i className="flaticon-smartphone" aria-hidden="true"></i> </span> Mobile App <br className="line-break" />
                                          Developer </li>
                                        <li> <span> <i className="flaticon-computer" aria-hidden="true"></i> </span> Web <br className="line-break" />
                                          Developer </li>
                                        <li> <span> <i className="flaticon-ux-design" aria-hidden="true"></i> </span> UI/UX<br className="line-break" />
                                          Developer </li>
                                        <li> <span><i className="flaticon-rocket-1" aria-hidden="true"></i> </span> Digital <br className="line-break" />
                                          Marketing</li>
                                        <li><span> <i className="flaticon-apple" aria-hidden="true"></i> </span> ios<br className="line-break" />
                                          Developer</li>
                                        <li> <span> <i className="flaticon-software" aria-hidden="true"></i> </span> CMS &amp; <br className="line-break" />
                                          Ecommerce</li>
                                      </ul>
                                    </div>
                                    <div className="button-button">
                                      <div className="pull-center text-center">
                                        <p><a className="btn btn-default" href="#contact">learn more</a> <a className="btn btn-default" href="#contact">Inquire now </a></p>
                                      </div>
                                    </div>
                    
                   </MDBTabPane>



                   <MDBTabPane tabId="7" role="tabpanel">
                  
                   <h3>CMS &amp; E-commerce</h3>
                                    <h4>Opencart Development</h4>
                                    <p>Among the various shopping cart solutions available nowadays, the eCommerce shopping cart software OpenCart is indeed the most user-friendly tool known. Besides offering a simple-to-use yet visually appealing interface to e-commerce portals, it provides almost everything to transform a simple e-commerce site into a sales-attracting one. Following are the benefits it offers...</p>
                                    <div className="icons-listed">
                                      <ul className="list-inline">
                                        <li> <span> <i className="flaticon-wordpress-logo" aria-hidden="true"></i> </span> WordPress<br className="line-break" />
                                          Development </li>
                                        <li> <span> <i className="flaticon-magento" aria-hidden="true"></i> </span> Magento<br className="line-break" />
                                          Development </li>
                                        <li> <span> <i className="flaticon-joomla" aria-hidden="true"></i> </span> Joomla<br className="line-break" />
                                          Development </li>
                                        <li> <span> <i className="flaticon-opencart" aria-hidden="true"></i> </span> Opencart<br className="line-break" />
                                          Development</li>
                                        <li> <span> <img src={drup} title="Drupal Development" alt="Drupal Development" /> </span> Drupal<br className="line-break" />
                                          Development</li>
            </ul>
        </div>
                                      <div className="button-button">
                                        <div className="pull-center text-center">
                                          <p><a className="btn btn-default" href="#contact">learn more</a> <a className="btn btn-default" href="#contact">Inquire now </a></p>
                                        </div>
                                      </div>
                    
                   </MDBTabPane>
                    </MDBTabContent>

              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
       
   
    );
  }
}

export default Multitabs;
