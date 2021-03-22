import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem} from "mdbreact"; 
import Userf from '../images/user/user-f.png';
import Userm from '../images/user/user-m.png';
const Testimonal = () => {
  return (
    <div id="testimonial" className="wow fadeInRight" style={{"visibility": "visible"}}>
    <div className="container">
    <header className="page-head">
        <h1> CUSTOMER FEEDBACK </h1>
      </header>
    <div className="row">
        <div className="col-xs-12 col-md-12 col-sm-12">
        <div className="block inner-content-block">
      
      <MDBCarousel activeItem={1} length={8} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>

        <div className="feedback_items">

          <MDBCarouselItem itemId="1">       
         
                <div className="profile">
                <p className="author"> It was Great to work with this Team , Mr.Atir has been very Helpful to do a Quality Job and Had been very supportive as well. I was Happy to give them the job and is now our allied partner development comapny. </p>
                <div className="image">
                    <div className="image-center"> <img src={Userm} title="Raver" alt="Raver"/> </div>
                  </div>
                <div className="caption">
                    <h2 className="title"> Best Support! <span> ★★★★★ </span> </h2>
                    <h4 className="author-name"> - Raver </h4>
                  </div>
              </div>
            

          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
         
                <div className="profile">
                <p className="author"> We have regular dealings with lots of companies globally and working with KodeCube has been an absolute pleasure and one of the best. I flew from Heathrow over to Delhi then to Atir's office in Jaipur for lunch and a project meeting. As a Chartered project manager, working with KodeCube has been a fantastic experience and I'm confident we'll form a long term bond. Our next three pipeline IT projects will skip the tender phase and go straight to KodeCube. Thank you for the long hours and the long coffee's guys! </p>
                <div className="image">
                    <div className="image-center"> <img src={Userm} title="Jason Duncan" alt="Jason Duncan"/> </div>
                  </div>
                <div className="caption">
                    <h2 className="title"> Superb Experience! <span> ★★★★★ </span> </h2>
                    <h4 className="author-name"> - Jason Duncan </h4>
                  </div>
              </div>
             
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
        
                <div className="profile">
                <p className="author"> Kodecube will create a cohesive and fulfilling brand experience for consumers who connect via their mobile phone - anytime, anywhere -
                    The power of mobile with opencart boosted our bussiness to three fold with customer reorders and giving store a brand value.</p>
                <div className="image">
                    <div className="image-center"> <img src={Userm} title="Makay Simpleaddiction" alt="Makay Simpleaddiction"/> </div>
                  </div>
                <div className="caption">
                    <h2 className="title"> Great experience <span> ★★★★★ </span> </h2>
                    <h4 className="author-name"> - Makay Simpleaddiction </h4>
                  </div>
              </div>
             
            
          </MDBCarouselItem>

          <MDBCarouselItem itemId="4">
         
                <div className="profile">
                <p className="author"> In this mobile era, winning brands must be 'experience enablers' and Kodecube will create a cohesive and fulfilling brand experience for consumers who connect via their mobile phone - anytime, anywhere ...</p>
                <div className="image">
                    <div className="image-center"> <img src={Userf} title="Eugene" alt="Eugene" /> </div>
                  </div>
                <div className="caption">
                    <h2 className="title"> Good improvements <span> ★★★★★ </span> </h2>
                    <h4 className="author-name">- Eugene </h4>
                  </div>
              </div>
           
            
          </MDBCarouselItem>


          <MDBCarouselItem itemId="5">
         
                <div className="profile">
                <p className="author"> It was Great to work with this Team , Mr.Atir has been very Helpful to do a Quality Job and Had been very supportive as well. I was Happy to give them the job and is now our allied partner development comapny. </p>
                <div className="image">
                    <div className="image-center"> <img src={Userm} title="Raver" alt="Raver" /> </div>
                  </div>
                <div className="caption">
                    <h2 className="title"> Best Support! <span> ★★★★★ </span> </h2>
                    <h4 className="author-name"> - Raver </h4>
                  </div>
              </div>
            
            
          </MDBCarouselItem>

          <MDBCarouselItem itemId="6">
         
                <div className="profile">
                <p className="author"> We have regular dealings with lots of companies globally and working with KodeCube has been an absolute pleasure and one of the best. I flew from Heathrow over to Delhi then to Atir's office in Jaipur for lunch and a project meeting. As a Chartered project manager, working with KodeCube has been a fantastic experience and I'm confident we'll form a long term bond. Our next three pipeline IT projects will skip the tender phase and go straight to KodeCube. Thank you for the long hours and the long coffee's guys! </p>
                <div className="image">
                    <div className="image-center"> <img src={Userm} title="Raver" alt="Raver" /> </div>
                  </div>
                <div className="caption">
                    <h2 className="title"> Superb Experience! <span> ★★★★★ </span> </h2>
                    <h4 className="author-name"> - Raver </h4>
                  </div>
              </div>
            
            
          </MDBCarouselItem>

          <MDBCarouselItem itemId="7">
       
                <div className="profile">
                <p className="author"> Kodecube will create a cohesive and fulfilling brand experience for consumers who connect via their mobile phone - anytime, anywhere -
                    The power of mobile with opencart boosted our bussiness to three fold with customer reorders and giving store a brand value.</p>
                <div className="image">
                    <div className="image-center"> <img src={Userm} title="Makay Simpleaddiction" alt="Makay Simpleaddiction" /> </div>
                  </div>
                <div className="caption">
                    <h2 className="title"> Great experience <span> ★★★★★ </span> </h2>
                    <h4 className="author-name"> - Makay Simpleaddiction </h4>
                  </div>
              </div>
             
            
          </MDBCarouselItem>

          <MDBCarouselItem itemId="8">
         
                <div className="profile">
                <p className="author"> In this mobile era, winning brands must be 'experience enablers' and Kodecube will create a cohesive and fulfilling brand experience for consumers who connect via their mobile phone - anytime, anywhere ...</p>
                <div className="image">
                    <div className="image-center"> <img src={Userf} title="Eugene" alt="Eugene" /> </div>
                  </div>
                <div className="caption">
                    <h2 className="title"> Good improvements <span> ★★★★★ </span> </h2>
                    <h4 className="author-name">- Eugene </h4>
                  </div>
              </div>
           
            
          </MDBCarouselItem>

          {/* <MDBCarouselItem itemId="9">999</MDBCarouselItem> */}

    </div>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Testimonal;




