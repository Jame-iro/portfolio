import React, { useState } from "react";
import "./myServices.css";
import { GoArrowUpRight } from "react-icons/go";
const MyServices = () => {
  return (
    <div>
      {/* my-services */}
      <section className="my-services" id="services">
        <div className="my-services__title">
          <h2 className="fade-in-section"> My Quality Services </h2>
          <p className="fade-in-section">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div className="my-services__items">
          <div className="my-services__item fade-in-section">
            <div className="my-services__item-top-left">
              <span>01</span>
              <h3>Front-end Development</h3>
            </div>
            <p>
              Conducting qualitative and quantitative research to understand
              user needs, behaviors, and pain points. Utilizing methods...
            </p>
            <GoArrowUpRight className="icon arrow-up-right" />
          </div>
          <div className="my-services__item fade-in-section">
            <div className="my-services__item-top-left">
              <span>02</span>
              <h3>Back-end Development</h3>
            </div>
            <p>
              Conducting qualitative and quantitative research to understand
              user needs, behaviors, and pain points. Utilizing methods...
            </p>
            <GoArrowUpRight className="icon arrow-up-right" />
          </div>
          <div className="my-services__item fade-in-section">
            <div className="my-services__item-top-left">
              <span>03</span>
              <h3>UI/UX Design </h3>
            </div>
            <p>
              Conducting qualitative and quantitative research to understand
              user needs, behaviors, and pain points. Utilizing methods...
            </p>
            <GoArrowUpRight className="icon arrow-up-right" />
          </div>
          <div className="my-services__item fade-in-section">
            <div className="my-services__item-top-left">
              <span>04</span>
              <h3>Quality Assurance </h3>
            </div>
            <p>
              Conducting qualitative and quantitative research to understand
              user needs, behaviors, and pain points. Utilizing methods...
            </p>
            <GoArrowUpRight className="icon arrow-up-right" />
          </div>
        </div>
      </section>
      {/* /my-services */}
    </div>
  );
};

export default MyServices;
