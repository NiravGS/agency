import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Style from "../assest/style/Style.module.scss";

// Tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// Icon
import { FaCheck, FaChevronRight } from "react-icons/fa";

const PricePlan = () => {
   return (
      <>
         <div className={Style.pricePlan}>
            <Container>
               <div className={Style.Title}>
                  <h1>Choose your pricing plan</h1>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                     eiusmod tempor magna ouis ipsum suspendisse ultrices
                     gravida.
                  </p>
               </div>
               <Tabs>
                  <div className={Style.switchButton}>
                     <TabList className={Style.TabBtn}>
                        <Tab>Annual</Tab>
                        <Tab>Monthly</Tab>
                     </TabList>
                  </div>
                  <div className={Style.switchBtnContent}>
                     <TabPanel>
                        <Row>
                           <Col lg={4}>
                              <div className={Style.PriceContent}>
                                 <p>Basic plan</p>
                                 <h1>Free</h1>
                                 <p className={Style.sortInfo}>
                                    Create email templates for yourself and for
                                    non-commercial purposes.
                                 </p>
                                 <div className={Style.CheckContent}>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Limited modules</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>No credit card needed</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Keep and load your projects</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>MailChimp integration</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>MailChimp integration</p>
                                    </div>
                                 </div>
                                 <Button variant="outline-danger">
                                    <div className={Style.Icontxt}>
                                       Free Demo
                                    </div>
                                    <div className={Style.iconCheck}>
                                       <FaChevronRight />
                                    </div>
                                 </Button>
                              </div>
                           </Col>
                           <Col lg={4}>
                              <div className={Style.PriceContent}>
                                 <p>Advance plan</p>
                                 <h1>
                                    $24.5 <span>/mo</span>
                                 </h1>
                                 <p className={Style.sortInfo}>
                                    Create email templates for yourself and for
                                    non-commercial purposes.
                                 </p>
                                 <div className={Style.CheckContent}>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>
                                          Create email templates for yourself
                                          and for non-commercial purposes.
                                       </p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>All modules and unlimited exports</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Full access to all features</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Keep and load your projects</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>MailChimp integration</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>HubSpot integration</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Direct email preview</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Billed annually</p>
                                    </div>
                                 </div>
                                 <Button variant="outline-danger">
                                    <div className={Style.Icontxt}>
                                       Select Plan
                                    </div>
                                    <div className={Style.iconCheck}>
                                       <FaChevronRight />
                                    </div>
                                 </Button>
                              </div>
                           </Col>
                           <Col lg={4}>
                              <div className={Style.PriceContent}>
                                 <p>Premium plan</p>
                                 <h1>
                                    $37.4<span>/mo</span>
                                 </h1>
                                 <p className={Style.sortInfo}>
                                    Create email templates for yourself and for
                                    non-commercial purposes.
                                 </p>
                                 <div className={Style.CheckContent}>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>
                                       Multiple brands
                                       </p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>All modules and unlimited exports</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Full access to all features</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Keep and load your projects</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>MailChimp integration</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>HubSpot integration</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Direct email preview</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Billed annually</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Team Access</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Free image hosting</p>
                                    </div>
                                 </div>
                                 <Button variant="outline-danger">
                                    <div className={Style.Icontxt}>
                                       Select Plan
                                    </div>
                                    <div className={Style.iconCheck}>
                                       <FaChevronRight />
                                    </div>
                                 </Button>
                              </div>
                           </Col>
                        </Row>
                     </TabPanel>
                  </div>
                  <div className={Style.switchBtnContent}>
                     <TabPanel>
                        <Row>
                           <Col lg={4}>
                              <div className={Style.PriceContent}>
                                 <p>Basic plan</p>
                                 <h1>Free</h1>
                                 <p className={Style.sortInfo}>
                                    Create email templates for yourself and for
                                    non-commercial purposes.
                                 </p>
                                 <div className={Style.CheckContent}>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Limited modules</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>No credit card needed</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Keep and load your projects</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>MailChimp integration</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>MailChimp integration</p>
                                    </div>
                                 </div>
                                 <Button variant="outline-danger">
                                    <div className={Style.Icontxt}>
                                       Free Demo
                                    </div>
                                    <div className={Style.iconCheck}>
                                       <FaChevronRight />
                                    </div>
                                 </Button>
                              </div>
                           </Col>
                           <Col lg={4}>
                              <div className={Style.PriceContent}>
                                 <p>Advance plan</p>
                                 <h1>
                                    $30.5 <span>/mo</span>
                                 </h1>
                                 <p className={Style.sortInfo}>
                                    Create email templates for yourself and for
                                    non-commercial purposes.
                                 </p>
                                 <div className={Style.CheckContent}>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>
                                          Create email templates for yourself
                                          and for non-commercial purposes.
                                       </p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>All modules and unlimited exports</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Full access to all features</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Keep and load your projects</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>MailChimp integration</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>HubSpot integration</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Direct email preview</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Billed annually</p>
                                    </div>
                                 </div>
                                 <Button variant="outline-danger">
                                    <div className={Style.Icontxt}>
                                       Select Plan
                                    </div>
                                    <div className={Style.iconCheck}>
                                       <FaChevronRight />
                                    </div>
                                 </Button>
                              </div>
                           </Col>
                           <Col lg={4}>
                              <div className={Style.PriceContent}>
                                 <p>Premium plan</p>
                                 <h1>
                                    $55.4<span>/mo</span>
                                 </h1>
                                 <p className={Style.sortInfo}>
                                    Create email templates for yourself and for
                                    non-commercial purposes.
                                 </p>
                                 <div className={Style.CheckContent}>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>
                                       Multiple brands
                                       </p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>All modules and unlimited exports</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Full access to all features</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Keep and load your projects</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>MailChimp integration</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>HubSpot integration</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Direct email preview</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Billed annually</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Team Access</p>
                                    </div>
                                    <div className={Style.detailsContent}>
                                       <div className={Style.iconCheck}>
                                          <FaCheck />
                                       </div>
                                       <p>Free image hosting</p>
                                    </div>
                                 </div>
                                 <Button variant="outline-danger">
                                    <div className={Style.Icontxt}>
                                       Select Plan
                                    </div>
                                    <div className={Style.iconCheck}>
                                       <FaChevronRight />
                                    </div>
                                 </Button>
                              </div>
                           </Col>
                        </Row>
                     </TabPanel>
                  </div>
               </Tabs>
            </Container>
         </div>
      </>
   );
};

export default PricePlan;
