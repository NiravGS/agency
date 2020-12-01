import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Images
import Incident from "../assest/Images/Details/1.png";
import Integrations from "../assest/Images/Details/2.png";
import Chat from "../assest/Images/Details/3.png";
import Collaborations from "../assest/Images/Details/4.png";
import Insights from "../assest/Images/Details/5.png";
import User from "../assest/Images/Details/6.png";

// Scss
import Style from "../assest/style/Style.module.scss";

const Details = () => {
   return (
      <>
         <Container > 
            <div
               className={Style.Title}
            >
               <h1>Software integrations</h1>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                  eiusmod tempor magna aliqua, ouis ipsum suspendisse ultrices
                  gravida.
               </p>
            </div>
            <div className={Style.detailArea}>
               <Row>
                  <Col lg={4} md={6} className={Style.detailsCard}    data-aos="fade-right">
                     <div className={Style.detailContent}>
                        <div className={Style.detailsImg}>
                           <img
                              src={Incident}
                              alt=""
                              className={`${"img-fluid"}`}
                           />
                        </div>
                        <div className={Style.detailInnerContent}>
                           <h3>Incident management</h3>
                           <p>
                              Lorem Ipsum has been industry standard when an
                              unknown took.
                           </p>
                        </div>
                     </div>
                  </Col>
                  <Col lg={4} md={6} className={Style.detailsCard}  data-aos="fade-right">
                     <div className={Style.detailContent}>
                        <div className={Style.detailsImg}>
                           <img
                              src={Integrations}
                              alt=""
                              className={`${"img-fluid"}`}
                           />
                        </div>
                        <div className={Style.detailInnerContent}>
                           <h3>Integrations</h3>
                           <p>
                              Lorem Ipsum has been industry standard when an
                              unknown took.
                           </p>
                        </div>
                     </div>
                  </Col>
                  <Col lg={4} md={6} className={Style.detailsCard}  data-aos="fade-right">
                     <div className={Style.detailContent}>
                        <div className={Style.detailsImg}>
                           <img
                              src={Chat}
                              alt=""
                              className={`${"img-fluid"}`}
                           />
                        </div>
                        <div className={Style.detailInnerContent}>
                           <h3>Chat with your customers</h3>
                           <p>
                              Lorem Ipsum has been industry standard when an
                              unknown took.
                           </p>
                        </div>
                     </div>
                  </Col>
                  <Col
                     lg={4}
                     md={6}
                     className={`${Style.SecondRow} ${Style.detailsCard}`}
                     data-aos="fade-left"
                  >
                     <div className={Style.detailContent}>
                        <div className={Style.detailsImg}>
                           <img
                              src={Collaborations}
                              alt=""
                              className={`${"img-fluid"}`}
                           />
                        </div>
                        <div className={Style.detailInnerContent}>
                           <h3>Collaborations stronger</h3>
                           <p>
                              Lorem Ipsum has been industry standard when an
                              unknown took.
                           </p>
                        </div>
                     </div>
                  </Col>
                  <Col
                     lg={4}
                     md={6}
                     className={`${Style.SecondRow} ${Style.detailsCard}`}
                     data-aos="fade-left"
                  >
                     <div className={Style.detailContent}>
                        <div className={Style.detailsImg}>
                           <img
                              src={Insights}
                              alt=""
                              className={`${"img-fluid"}`}
                           />
                        </div>
                        <div className={Style.detailInnerContent}>
                           <h3>Insights made accessible</h3>
                           <p>
                              Lorem Ipsum has been industry standard when an
                              unknown took.
                           </p>
                        </div>
                     </div>
                  </Col>
                  <Col
                     lg={4}
                     md={6}
                     className={`${Style.SecondRow} ${Style.detailsCard}`}
                     data-aos="fade-left"
                  >
                     <div className={Style.detailContent}>
                        <div className={Style.detailsImg}>
                           <img
                              src={User}
                              alt=""
                              className={`${"img-fluid"}`}
                           />
                        </div>
                        <div className={Style.detailInnerContent}>
                           <h3>User friendly coding</h3>
                           <p>
                              Lorem Ipsum has been industry standard when an
                              unknown took.
                           </p>
                        </div>
                     </div>
                  </Col>
               </Row>
            </div>
         </Container>
      </>
   );
};

export default Details;
