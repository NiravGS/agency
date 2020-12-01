import React from "react";
import { Container } from "react-bootstrap";

// Carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Scss
import Style from "../assest/style/Style.module.scss";

// Logo
import Logo1 from "../assest/Images/logo/1.jpg";
import Logo2 from "../assest/Images/logo/2.jpg";
import Logo3 from "../assest/Images/logo/3.jpg";
import Logo4 from "../assest/Images/logo/4.jpg";
import Logo5 from "../assest/Images/logo/5.jpg";
import Logo6 from "../assest/Images/logo/6.jpg";

// Slider Option
const options = {
   items: 4,
   margin: 100,
   stagePadding: 30,
   smartSpeed: 450,
   autoplay: true,
   dots: false,
   nav: false,
   smartSpeed: 1000,
   autoplayTimeout:1000,
   slideTransition: 'linear',
   autoplayHoverPause: true,
   loop:true,
   responsive: {
      0: {
           items: 2,
           margin: 20,
      },
      767: {
         center: true,
          items: 3,
          margin: 20,
      },
      1000: {
          items: 3,
          margin: 50,
      },
      1440: {
          items: 4,
      },
   },

};

const LogoSlider = () => {
   return (
      <>
         <Container>
            <div
               className={`${" d-flex align-items-center justify-content-center"} ${
                  Style.logoSection
                  }`}
                 
            >
               <div className={Style.leftLine} />
               <p>
                  Market leaders use software to nrich their brand & business.
               </p>
               <div className={Style.rightLine} />
            </div>
            <div className={Style.SliderLogo}>
               <OwlCarousel
                  className="owl-theme"
                  loop
                  margin={10}
                  nav
                  {...options}
               >
                  <div className="item">
                     <div className={Style.logoImg}>
                        <img src={Logo1} alt="" className={`${"img-fluid"}`} />
                     </div>
                  </div>
                  <div className="item">
                     <div className={Style.logoImg}>
                        <img src={Logo2} alt="" className={`${"img-fluid"}`} />
                     </div>
                  </div>
                  <div className="item">
                     <div className={Style.logoImg}>
                        <img src={Logo3} alt="" className={`${"img-fluid"}`} />
                     </div>
                  </div>
                  <div className="item">
                     <div className={Style.logoImg}>
                        <img src={Logo4} alt="" className={`${"img-fluid"}`} />
                     </div>
                  </div>
                  <div className="item">
                     <div className={Style.logoImg}>
                        <img src={Logo5} alt="" className={`${"img-fluid"}`} />
                     </div>
                  </div>
                  <div className="item">
                     <div className={Style.logoImg}>
                        <img src={Logo6} alt="" className={`${"img-fluid"}`} />
                     </div>
                  </div>
               </OwlCarousel>
            </div>
         </Container>
      </>
   );
};

export default LogoSlider;
