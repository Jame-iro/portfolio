import React, { useState } from "react";
import "./myWorks.css";
import { GoArrowUpRight } from "react-icons/go";
import deloitte from "/public/images/deloitte.jpg";
import createX from "/public/images/createX.png";
import cosmodrom from "/public/images/cosmodrom.png";
import mochnix from "/public/images/mochnix.jpg";
import { motion } from "framer-motion";
const MyWorks = () => {
  return (
    <>
      <section className="my-works" id="works">
        <motion.h2
          className="my-works__title fade-in"
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
          My Recent Works
        </motion.h2>
        <div className="my-works-main">
          <motion.div
            className="my-works__filter fade-in"
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
            <button>All</button>
            <button>Apps</button>
            <button>Branding</button>
            <button>Content</button>
            <button>UX/UI</button>
          </motion.div>
          <motion.div
            className="my-works__items fade-in"
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
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MyWorks;
