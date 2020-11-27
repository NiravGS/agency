import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SupportImg from "../assest/Images/Support/Support.png";
import { FaCheck } from "react-icons/fa";

// Scss
import Style from "../assest/style/Style.module.scss";

const Support = () => {
   return (
      <>
         <Container>
            <Row className={`${"align-items-center"}`}>
               <Col lg={6}>
                  <div className={Style.RightContent}>
                     <img src={SupportImg} className={`${"img-fluid"}`} />
                  </div>
               </Col>
               <Col lg={6}>
                  <div className={Style.LeftContent}>
                     <div className={Style.allLine}>
                        <div className={Style.leftSpaceLine}></div>
                        <div className={Style.leftLine}></div>
                     </div>
                     <div className={Style.Title}>
                        <h1>Everything need for support</h1>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elitd ouis ipsum suspendisse ultrices book.
                        </p>
                     </div>
                     <div className={Style.CheckContent}>
                        <div className={Style.iconCheck}>
                           <FaCheck />
                        </div>
                        <div className={Style.Content}>
                           <h4>Answers made available faster</h4>
                           <p>
                              Lorem Ipsum has been the industry's standard since
                              the when an unknown took.
                           </p>
                        </div>
                     </div>
                     <div className={`${Style.CheckContent} ${"mt-2"}`}>
                        <div className={Style.iconCheck}>
                           <FaCheck />
                        </div>
                        <div className={Style.Content}>
                           <h4>Conversations made easier</h4>
                           <p>
                              Lorem Ipsum has been the industry's standard since
                              the when an unknown took.
                           </p>
                        </div>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default Support;
