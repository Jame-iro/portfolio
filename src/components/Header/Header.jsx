import React, { useState } from "react";
import "./header.css";
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { CgMenuRight, CgClose } from "react-icons/cg";
import lg from "../../assets/lg-j.png";
const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      {/* header */}
      <header>
        <HashLink smooth to='#' className="logo">
          <img src={lg} alt="logo" />
        </HashLink>
        <div className="header-info">
          <span>jaja0890@gmail.com</span>
        </div>
        <ul>
            <li>
                <NavHashLink smooth to="/src/components/MyServices/MyServices.jsx#services" >
                    Services
                </NavHashLink>
            </li>
            <li>
                <NavHashLink smooth to="#works">
                    Works
                </NavHashLink>
            </li>
            <li>
                <NavHashLink smooth to="#resume">
                    Resume
                </NavHashLink>
            </li>
            <li>
                <NavHashLink smooth to="#skills">
                    Skills
                </NavHashLink>
            </li>
            {/* <li>
                <a href="#">
                    Testimonials
                </a>
            </li> */}
            <li>
                <NavHashLink smooth to="#contact">
                    Contact
                </NavHashLink>
            </li>
        </ul>
        <button>Hire me!</button>
        {!isMenuActive ? (
          <CgMenuRight className="icon menu-bar" onClick={handleMenuToggle} />
        ) : (
          <CgClose className="icon close" onClick={handleMenuToggle} />
        )}
      </header>
      <div className={`menu ${isMenuActive ? "menu-active" : ""}`} id="menu">
        <ul>
          <li>
            <NavHashLink smooth to="#services">SERVICE</NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="#works">WORKS</NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="#resume">RESUME</NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="#skills">SKILLS</NavHashLink>
          </li>
          {/* <li>
            <NavHashLink to="services">TESTIMONIALS</NavHashLink>
          </li> */}
          <li>
            <NavHashLink smooth to="/contact">CONTACT</NavHashLink>
          </li>
        </ul>
      </div>
      {/* /header */}
    </>
  );
};

export default Header;
