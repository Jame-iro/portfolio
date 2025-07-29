import React, { useState } from "react";
import "./myWorks.css";
import { GoArrowUpRight } from "react-icons/go";
import deloitte from "../../assets/deloitte.jpg";
import createX from "../../assets/createX.png";
import cosmodrom from "../../assets/cosmodrom.png";
import mochnix from "../../assets/mochnix.jpg";
const MyWorks = () => {

  return (
    <div>
      {/* myWorks */}
      <section className="my-works" id="works">
        <h2 className="my-works__title fade-in-section">My Recent Works</h2>
        <div className="my-works-main">
          <div className="my-works__filter fade-in-section">
            <button>All</button>
            <button>Apps</button>
            <button>Branding</button>
            <button>Content</button>
            <button>UX/UI</button>
          </div>
          <div className="my-works__items fade-in-section">
            <div className="my-works__item branding">
              <div className="img-blog">
                <img src={deloitte} alt="deloitte" />
              </div>
              <div className="text-content">
                <h3>Deloitte</h3>
                <p>Project was about precision and information....</p>
                <GoArrowUpRight className="icon arrow-up-right" />
              </div>
            </div>
            <div className="my-works__item ux-ui">
              <div className="img-blog">
                <img src={createX} alt="createX" />
              </div>
              <div className="text-content">
                <h3>CreateX</h3>
                <p>Project was about precision and information....</p>
                <GoArrowUpRight className="icon arrow-up-right" />
              </div>
            </div>
            <div className="my-works__item apps">
              <div className="img-blog">
                <img src={cosmodrom} alt="cosmodrom" />
              </div>
              <div className="text-content">
                <h3>Cosmodrom</h3>
                <p>Project was about precision and information....</p>
                <GoArrowUpRight className="icon arrow-up-right" />
              </div>
            </div>
            <div className="my-works__item branding">
              <div className="img-blog">
                <img src={mochnix} alt="mochnix" />
              </div>
              <div className="text-content">
                <h3>Mochnix</h3>
                <p>Project was about precision and information....</p>
                <GoArrowUpRight className="icon arrow-up-right" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /myWorks */}
    </div>
  );
};

export default MyWorks;
