import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Ripples from 'react-ripples'
import { Formik } from "formik";

// img
import HomeImg from "../assest/Images/right.png";

// scss
import Style from "../assest/style/Style.module.scss";

const HomeLanding = () => {
   return (
      <>
         <Container>
            <Row>
               <Col lg={7} className={Style.OrderMedia2}>
                  <div className={Style.homeContent}>
                     <h1> Build better customer experiences with saasfy!</h1>
                     <p>
                        Everything you need to convert, support, your customers.
                     </p>
                     <Formik
                        initialValues={{ email: "" }}
                        validate={(values) => {
                           const errors = {};
                           if (!values.email) {
                              errors.email = "Required";
                           } else if (
                              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                 values.email
                              )
                           ) {
                              errors.email = "Invalid email address";
                           }
                           return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                           setTimeout(() => {
                              alert(JSON.stringify(values, null, 2));
                              setSubmitting(false);
                           }, 400);
                        }}
                     >
                        {({
                           values,
                           errors,
                           touched,
                           handleChange,
                           handleBlur,
                           handleSubmit,
                           isSubmitting,
                           /* and other goodies */
                        }) => (
                           <form
                              onSubmit={handleSubmit}
                              className={Style.homeContentForm}
                           >
                              <input
                                 type="email"
                                 name="email"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.email}
                                 placeholder="Email address.."
                              />
                              {errors.password &&
                                 touched.password &&
                                 errors.password}
                              <button type="submit" disabled={isSubmitting}>
                                 Get Started
                              </button>
                           </form>
                        )}
                     </Formik>
                     <div className={Style.offerLine}>
                        <p>
                           <span>Free 14-day trial</span>. No credit card
                           required.
                        </p>
                     </div>
                  </div>
               </Col>
               <Col lg={5} className={Style.OrderMedia1}>
                  <div className={Style.RightImg}>
                     <img src={HomeImg} alt="" className={`${"img-fluid"}`} />
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default HomeLanding;
