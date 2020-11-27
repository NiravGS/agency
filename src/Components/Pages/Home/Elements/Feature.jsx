import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// img
import FeatureImg from "../assest/Images/Feature/Msg.png";
import SectionImg1 from "../assest/Images/Feature/one.png";
import SectionImg2 from "../assest/Images/Feature/two.png";
import Check1 from "../assest/Images/Feature/check.jpg";
import Check2 from "../assest/Images/Feature/checkTwo.jpg";

// Scss
import Style from "../assest/style/Style.module.scss";

const Feature = () => {
   return (
      <>
         <Container>
            <div className={Style.FeatureImg}>
               <img src={FeatureImg} className={`${"img-fluid"}`} />
            </div>
            <div className={Style.FeatureContent}>
               <div className={Style.Title}>
                  <h1>Let your fingers do the walkiing.</h1>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                     eiusmod tempor magna aliqua, ouis ipsum suspendisse
                     ultrices gravida.
                  </p>
               </div>
            </div>
            <Row>
               <Col md={6}>
                  <div className={Style.Box}>
                     <div className={Style.LeftSection}>
                        <div className={Style.sectionImg}>
                           <img
                              src={SectionImg1}
                              alt=""
                              className={`${"img-fluid"}`}
                           />
                        </div>
                        <div className={Style.SectionBtn}>
                           <a href="#">Start Ticketing</a>
                        </div>
                     </div>
                     <div className={Style.RightSection}>
                        <h1>Need help support</h1>
                        <p>
                           Better ipsum dolor sit amet, ouis ipsum suspendi
                           book.
                        </p>
                        <h4>Abandoned cart</h4>
                        <div className={Style.Card}>
                           <div className={Style.CheckArea}>
                              <div className={Style.filledCheck}>
                                 <img src={Check1} alt="" />
                              </div>
                              <div className={Style.Check}>Collaboration</div>
                           </div>
                           <div className={Style.CheckArea}>
                              <div className={Style.filledCheck}>
                                 <img src={Check2} alt="" />
                              </div>
                              <div className={Style.Check}>UI / UX design</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </Col>
               <Col md={6}>
                  <div className={`${Style.Box} ${Style.MailBox}`}>
                     <div className={Style.LeftSection}>
                        <div className={Style.sectionImg}>
                           <img
                              src={SectionImg2}
                              alt=""
                              className={`${"img-fluid"}`}
                           />
                        </div>
                        <div className={Style.SectionBtn}>
                           <a href="#">Send Email</a>
                        </div>
                     </div>
                     <div className={Style.RightSection}>
                        <h1>Need help support</h1>
                        <p>
                           Better ipsum dolor sit amet, ouis ipsum suspendi
                           book.
                        </p>
                        <h4>Grow growing points</h4>
                        <div className={Style.Card}>
                           <div className={Style.CheckArea}>
                              <div className={Style.filledCheck}>
                                 <img src={Check1} alt="" />
                              </div>
                              <div className={Style.Check}>Collaboration</div>
                           </div>
                           <div className={Style.CheckArea}>
                              <div className={Style.filledCheck}>
                                 <img src={Check2} alt="" />
                              </div>
                              <div className={Style.Check}>UI / UX design</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default Feature;
