import React, { useState } from "react";
import "./myExperience.css";
import { LiaAwardSolid } from "react-icons/lia";
import { GoMortarBoard } from "react-icons/go";
const MyExperience = () => {
  return (
    <div>
      <section className="my-experience" id="resume">
        <div className="top-left my-experience-item">
          <div className="my-experience-item__title fade-in-section">
            <LiaAwardSolid className="icon award" />
            <h2>My Experience</h2>
          </div>
          <div className="my-experience__boxes">
            <div className="my-experience__box fade-in-section">
              <span className="time">2032-Present</span>
              <h3>Lead Developer</h3>
              <p className="institute">Tokyo, Japan</p>
            </div>
            <div className="my-experience__box fade-in-section">
              <span className="time">2031-2032</span>
              <h3>Full Stack Web Developer</h3>
              <p className="institute">California, USA</p>
            </div>
            <div className="my-experience__box fade-in-section">
              <span className="time">2030-2031</span>
              <h3>Middle Frontend Developer</h3>
              <p className="institute">New York, USA</p>
            </div>
            <div className="my-experience__box fade-in-section">
              <span className="time">2029-2030</span>
              <h3>Junior Developer</h3>
              <p className="institute">Namangan, Uzbekistan</p>
            </div>
          </div>
        </div>
        <div className="bottom-right my-experience-item">
          <div className="my-experience-item__title fade-in-section">
            <GoMortarBoard className="icon morta" />
            <h2>My Education</h2>
          </div>
          <div className="my-experience__boxes">
            <div className="my-experience__box-right fade-in-section">
              <span className="time">2026-2029</span>
              <h3>Bachelor of Computer Science</h3>
              <p className="institute">Stanford University, USA</p>
            </div>
            <div className="my-experience__box-right fade-in-section">
              <span className="time">2021-2022</span>
              <h3>Full Stack Web Developer</h3>
              <p className="institute">California, USA</p>
            </div>
            <div className="my-experience__box-right fade-in-section">
              <span className="time">2020-2021</span>
              <h3>Middle Frontend Developer</h3>
              <p className="institute">New York, USA</p>
            </div>
            <div className="my-experience__box-right fade-in-section">
              <span className="time">2019-2020</span>
              <h3>Junior Developer</h3>
              <p className="institute">London, UK</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyExperience;
