import React from "react";
import HomeLanding from "./Elements/HomeLanding";
import LogoSlider from "./Elements/LogoSlider";
import Feature from "./Elements/Feature";
import Details from "./Elements/Details";
import Support from "./Elements/Support"
import Inventory from "./Elements/Inventory"
import Customers from "./Elements/Customers"
import Demofeature from "./Elements/Demofeature"

// scss
import Style from "./assest/style/Style.module.scss";

const Footer = () => {
   return (
      <>
         <section id={Style.HomeLanding}>
            <HomeLanding />
         </section>
         <section id={Style.LogoSlider}>
            <LogoSlider />
         </section>
         <section id={Style.Feature}>
            <Feature />
         </section>
         <section id={Style.Details}>
            <Details />
         </section>
         <section id={Style.Support}>
            <Support />
         </section>
         <section id={Style.Inventory}>
            <Inventory />
         </section>
         <section id={Style.Customers}>
            <Customers />
         </section>
         <section id={Style.Demofeature}>
            <Demofeature />
         </section>
      </>
   );
};

export default Footer;
