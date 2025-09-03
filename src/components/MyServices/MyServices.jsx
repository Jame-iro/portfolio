import React, { useState } from "react";
import "./myServices.css";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const MyServices = () => {
  return (
    <div>
      <section className="my-services" id="services">
        <div className="my-services__title">
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
            {" "}
            My Quality Services{" "}
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
        <div className="my-services__items">
          <motion.div
            className="my-services__item fade-in"
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
            <div className="my-services__item-top-left">
              <span>01</span>
              <h3>Front-end Development</h3>
            </div>
            <p>
              Conducting qualitative and quantitative research to understand
              user needs, behaviors, and pain points. Utilizing methods...
            </p>
            <GoArrowUpRight className="icon arrow-up-right" />
          </motion.div>
          <motion.div
            className="my-services__item fade-in"
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
            <div className="my-services__item-top-left">
              <span>02</span>
              <h3>Back-end Development</h3>
            </div>
            <p>
              Conducting qualitative and quantitative research to understand
              user needs, behaviors, and pain points. Utilizing methods...
            </p>
            <GoArrowUpRight className="icon arrow-up-right" />
          </motion.div>
          <motion.div
            className="my-services__item fade-in"
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
            <div className="my-services__item-top-left">
              <span>03</span>
              <h3>UI/UX Design </h3>
            </div>
            <p>
              Conducting qualitative and quantitative research to understand
              user needs, behaviors, and pain points. Utilizing methods...
            </p>
            <GoArrowUpRight className="icon arrow-up-right" />
          </motion.div>
          <motion.div
            className="my-services__item fade-in"
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
            <div className="my-services__item-top-left">
              <span>04</span>
              <h3>Quality Assurance </h3>
            </div>
            <p>
              Conducting qualitative and quantitative research to understand
              user needs, behaviors, and pain points. Utilizing methods...
            </p>
            <GoArrowUpRight className="icon arrow-up-right" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MyServices;
