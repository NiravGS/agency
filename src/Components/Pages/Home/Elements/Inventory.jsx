import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InventoryImg from "../assest/Images/Inventory/Inventory.png";
import { FaCheck, FaChevronRight } from "react-icons/fa";

// Scss
import Style from "../assest/style/Style.module.scss";

const Inventory = () => {
   return (
      <>
         <Container>
            <Row className={`${"align-items-center"}`}>
               <Col lg={6} className={Style.OrderMedia2}>
                  <div
                     className={Style.LeftContent}
                     data-aos="fade-right"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine"
                  >
                     <div className={Style.allLine}>
                        <div className={Style.leftSpaceLine}></div>
                        <div className={Style.leftLine}></div>
                     </div>
                     <div className={Style.Title}>
                        <h1>Take control of your inventory</h1>
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
                           <h4>World class 24x7 support</h4>
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
                           <h4>Tons of shortcodes and widgets</h4>
                           <p>
                              Lorem Ipsum has been the industry's standard since
                              the when an unknown took.
                           </p>
                        </div>
                     </div>
                     <div className={Style.SectionBtn}>
                        <a href="#">
                           Get Support <FaChevronRight />
                        </a>
                     </div>
                  </div>
               </Col>
               <Col lg={6} className={Style.OrderMedia1}>
                  <div
                     className={Style.RightContent}
                     data-aos="fade-left"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine"
                  >
                     <img src={InventoryImg} className={`${"img-fluid"}`} />
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default Inventory;
