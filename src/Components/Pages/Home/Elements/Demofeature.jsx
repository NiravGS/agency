import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Style from "../assest/style/Style.module.scss";

const Demofeature = () => {
   return (
      <>
         <div className={Style.demoFeature} data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
            <Container>
               <div className={Style.Title}>
                  <h1>So, what brings you here today?</h1>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                     eiusmod tempor magna ouis ipsum suspendisse ultrices
                     gravida.
                  </p>
                  <div className={Style.demoBtn}>
                     <div className={Style.SectionBtn}>
                        <a href="#">Get Started</a>
                     </div>
                     <div className={`${Style.SectionBtn} ${Style.demoinnerBtn}`}>
                        <a href="#">Watch Demo</a>
                     </div>
                  </div>
               </div>
            </Container>
         </div>
      </>
   );
};

export default Demofeature;
