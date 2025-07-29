import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="logo">
        <HashLink smooth to="#top">
          <img src="/src/assets/lg-j.png" alt="avatar" />
        </HashLink>
        </div>
        <ul>
          <li>
            <HashLink smooth to="#services">Services.</HashLink>
          </li>
          <li>
            <HashLink smooth to="#works">Works.</HashLink>
          </li>
          <li>
            <HashLink smooth to="#resume">Experience.</HashLink>
          </li>
          <li>
            <HashLink smooth to="#skills">Skills.</HashLink>
          </li>
          {/* <li>
                <a href="#">
                    Testimonials
                </a>
            </li> */}
          <li>
            <HashLink smooth to="blog">Blog.</HashLink>
          </li>
        </ul>
        <div className="copyright">
          <p>
            ©All Rights Reserved By <span>Me</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
