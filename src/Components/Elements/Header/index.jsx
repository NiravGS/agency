import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

// Style
import Style from "./assest/scss/Style.module.scss";

// icons
import { GoThreeBars, GoSignIn, GoPerson } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";

const Header = () => {
   const [active, setActive] = useState(false);
   return (
      <>
         <header>
            <Container>
               <div className={Style.menuContainer}>
                  <div className={Style.logo}>
                     <Link to="/">
                        <h1>G-code</h1>
                     </Link>
                  </div>
                  <nav className={active ? `${Style.active}` : `${Style.nav}`}>
                     <ul>
                        <li>
                           <NavLink to="/" onClick={() => setActive(!active)}>
                              Home
                           </NavLink>
                        </li>
                        <li>
                           <NavLink
                              to="/About"
                              onClick={() => setActive(!active)}
                           >
                              About
                           </NavLink>
                        </li>
                        <li>
                           <NavLink
                              to="/Services"
                              onClick={() => setActive(!active)}
                           >
                              Services
                           </NavLink>
                        </li>
                        <li>
                           <NavLink
                              to="/Blog"
                              onClick={() => setActive(!active)}
                           >
                              Blog
                           </NavLink>
                        </li>
                        <li>
                           <NavLink
                              to="/Portfolio"
                              onClick={() => setActive(!active)}
                           >
                              Portfolio
                           </NavLink>
                        </li>
                        <li>
                           <NavLink
                              to="/Contact"
                              onClick={() => setActive(!active)}
                           >
                              Contact
                           </NavLink>
                        </li>
                     </ul>
                  </nav>
                  <div className={Style.navBtn}>
                     <Button variant="outline-danger">
                        <span className={Style.Icontxt}>Login</span>
                        <div className={Style.navBtnIcon}>
                           <GoPerson />
                        </div>
                     </Button>

                     <Button variant="primary" className={Style.btnSignup}>
                        <span className={Style.Icontxt}>Sign Up</span>
                        <div className={Style.navBtnIcon}>
                           <GoSignIn />
                        </div>
                     </Button>
                  </div>
                  <div
                     className={Style.menuToggle}
                     onClick={() => { setActive(!active);  }}
                  >
                     {active ? (
                        <div className={Style.closeIcon} onClick={document.getElementsByTagName( 'html' )[0].setAttribute( 'class', `${Style.Noscroll}` )}>
                           <GrFormClose />
                        </div>
                     ) : (
                        <div className={Style.menuIcon} onClick={document.getElementsByTagName( 'html' )[0].removeAttribute( 'class', `${Style.Noscroll}` )}>
                           <GoThreeBars />
                        </div>
                     )}
                  </div>
               </div>
            </Container>
         </header>
      </>
   );
};

export default Header;
