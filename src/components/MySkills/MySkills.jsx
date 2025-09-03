import React, { useState } from "react";
import "./mySkills.css";
import lgFigma from "../../assets/lg-figma.png";
import lgSketch from "../../assets/lg-sketch.png";
import lgXd from "../../assets/lg-xd.png";
import lgWp from "../../assets/lg-wp.png";
import lgReact from "../../assets/lg-react.png";
import lgJs from "../../assets/lg-js.png";
import { motion } from "motion/react";

const MySkills = () => {
  return (
    <div>
      <section className="my-skills" id="skills">
        <div className="my-skills__title">
          <motion.h2
            className="fade-in"
            initial={{
              opacity: 0,
              transform: "translateY(40px)",
              scaleY: 0,
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0)",
              scaleY: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            My Skills
          </motion.h2>
          <motion.p
            className="fade-in"
            initial={{
              opacity: 0,
              transform: "translateY(40px)",
              scaleY: 0,
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0)",
              scaleY: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </motion.p>
        </div>
        <div className="my-skills_items">
          <motion.div
            className="my-skills__item fade-in two"
            initial={{
              opacity: 0,
              transform: "translateY(40px)",
              scaleY: 0,
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0)",
              scaleY: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <div className="my-skills__item__inner">
              <div className="img-blog">
                <img src={lgFigma} alt="figma-logo" />
              </div>
              <span className="number">0%</span>
            </div>
            <p>Figma</p>
          </motion.div>
          <motion.div
            className="my-skills__item fade-in three"
            initial={{
              opacity: 0,
              transform: "translateY(40px)",
              scaleY: 0,
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0)",
              scaleY: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <div className="my-skills__item__inner">
              <div className="img-blog">
                <img src={lgSketch} alt="sketch-logo" />
              </div>
              <span className="number">1%</span>
            </div>
            <p>Sketch</p>
          </motion.div>
          <motion.div
            className="my-skills__item fade-in four"
            initial={{
              opacity: 0,
              transform: "translateY(40px)",
              scaleY: 0,
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0)",
              scaleY: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            <div className="my-skills__item__inner">
              <div className="img-blog">
                <img src={lgXd} alt="xd-logo" />
              </div>
              <span className="number">wtf?</span>
            </div>
            <p>XD</p>
          </motion.div>
          <motion.div
            className="my-skills__item fade-in five"
            initial={{
              opacity: 0,
              transform: "translateY(40px)",
              scaleY: 0,
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0)",
              scaleY: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            <div className="my-skills__item__inner">
              <div className="img-blog">
                <img src={lgWp} alt="wp-logo" />
              </div>
              <span className="number">102%</span>
            </div>
            <p>WordPress</p>
          </motion.div>
          <motion.div
            className="my-skills__item fade-in six"
            initial={{
              opacity: 0,
              transform: "translateY(40px)",
              scaleY: 0,
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0)",
              scaleY: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: "easeOut",
            }}
          >
            <div className="my-skills__item__inner">
              <div className="img-blog">
                <img src={lgReact} alt="react-logo" />
              </div>
              <span className="number">-10%</span>
            </div>
            <p>React</p>
          </motion.div>
          <motion.div
            className="my-skills__item fade-in seven"
            initial={{
              opacity: 0,
              transform: "translateY(40px)",
              scaleY: 0,
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0)",
              scaleY: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: "easeOut",
            }}
          >
            <div className="my-skills__item__inner">
              <div className="img-blog">
                <img src={lgJs} alt="js-logo" />
              </div>
              <span className="number">69%</span>
            </div>
            <p>Javascript</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MySkills;
