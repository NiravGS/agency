import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomersImg from "../assest/Images/Customers/Customers.png";
import { FaCheck, FaChevronRight } from "react-icons/fa";

// Scss
import Style from "../assest/style/Style.module.scss";

const Customers = () => {
   return (
      <>
         <Container>
            <div className={Style.CustomersContent} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
               <div className={Style.Title}>
                  <h1>The qik impact on our customers</h1>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                     eiusmod tempor magna aliqua, ouis ipsum suspendisse
                     ultrices gravida.
                  </p>
               </div>
            </div>
            <Row  className={`${"align-items-center"}`}>
               <Col lg={6}>
                  <div className={Style.CustomersImg}>
                     <img
                        src={CustomersImg}
                        alt=""
                        className={`${"img-fluid"}`}
                     />
                  </div>
               </Col>
               <Col lg={6}>
                  <div className={Style.CustomerSug}>
                     <div className={Style.CustomerCard}>
                        <h5>Don’t find fault. Find remedy</h5>
                        <p>
                           Lorem Ipsum has been the industry's standard since
                           when an unknown took.
                        </p>
                     </div>
                     <div className={`${Style.CustomerCard} ${Style.CardMain}`}>
                        <h5>Success. Its a mind game</h5>
                        <p>
                           Lorem Ipsum has been the industry's standard since
                           when an unknown took.
                        </p>
                     </div>
                     <div className={Style.CustomerCard}>
                        <h5>Satisfied customers are our best</h5>
                        <p>
                           Lorem Ipsum has been the industry's standard since
                           when an unknown took.
                        </p>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default Customers;
