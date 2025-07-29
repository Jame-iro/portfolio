import React, { useState } from "react";
import "./mySkills.css";
const MySkills = () => {
  return (
    <div>
      <section className="my-skills" id="skills">
        <div className="my-skills__title">
          <h2 className="fade-in-section">My Skills</h2>
          <p className="fade-in-section">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div className="my-skills_items">
          <div className="my-skills__item fade-in-section two">
            <div className="my-skills__item__inner">
              <div className="img-blog">
                <img src="/src/assets/lg-figma.png" alt="figma-logo" />
              </div>
              <span className="number">0%</span>
            </div>
            <p>Figma</p>
          </div>
          <div className="my-skills__item fade-in-section three">
            <div className="my-skills__item__inner">
              <div className="img-blog">
                <img src="/src/assets/lg-sketch.png" alt="sketch-logo" />
              </div>
              <span className="number">1%</span>
            </div>
            <p>Sketch</p>
          </div>
          <div className="my-skills__item fade-in-section four">
            <div className="my-skills__item__inner">
              <div className="img-blog">
                <img src="/src/assets/lg-xd.png" alt="xd-logo" />
              </div>
              <span className="number">wtf?</span>
            </div>
            <p>XD</p>
          </div>
          <div className="my-skills__item fade-in-section five">
            <div className="my-skills__item__inner">
              <div className="img-blog">
                <img src="/src/assets/lg-wp.png" alt="wp-logo" />
              </div>
              <span className="number">102%</span>
            </div>
            <p>WordPress</p>
          </div>
          <div className="my-skills__item fade-in-section six">
            <div className="my-skills__item__inner">
              <div className="img-blog">
                <img src="/src/assets/lg-react.png" alt="react-logo" />
              </div>
              <span className="number">-10%</span>
            </div>
            <p>React</p>
          </div>
          <div className="my-skills__item fade-in-section seven">
            <div className="my-skills__item__inner">
              <div className="img-blog">
                <img src="/src/assets/lg-js.png" alt="js-logo" />
              </div>
              <span className="number">69%</span>
            </div>
            <p>Javascript</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MySkills;
