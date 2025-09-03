import React, { useState } from "react";
import "./recentBlogs.css";
import { FaRegCalendarDays, FaRegComments } from "react-icons/fa6";
import blogImg1 from "../../assets/blog-img1.jpg";
import blogImg2 from "../../assets/blog-img2.jpg";
import blogImg3 from "../../assets/blog-img3.jpg";
import { motion } from "framer-motion";

const RecentBlogs = () => {
  return (
    <div>
      <section className="recent-blogs" id="blog">
        <div className="recent-blogs__title">
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
            Recent Blogs
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
        <div className="recent-blogs__items">
          <motion.div
            className="recent-blogs__item fade-in one"
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
            <div className="blog-thumb">
              <div className="img-blog">
                <img src={blogImg1} alt="blog-img" />
              </div>
              <span>SAAS</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <ul>
                  <li>
                    <FaRegCalendarDays className="icon calendar-days" />
                    May 10, 2024
                  </li>
                  <li>
                    <FaRegComments className="icon comments" />
                    No Comments
                  </li>
                </ul>
              </div>
              <h3 className="blog-title">
                The Role of Technology in Modern...
              </h3>
            </div>
          </motion.div>
          <motion.div
            className="recent-blogs__item fade-in two"
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
            <div className="blog-thumb">
              <div className="img-blog">
                <img src={blogImg2} alt="blog-img" />
              </div>
              <span>DESIGN</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <ul>
                  <li>
                    <FaRegCalendarDays className="icon calendar-days" />
                    May 10, 2024
                  </li>
                  <li>
                    <FaRegComments className="icon comments" />
                    No Comments
                  </li>
                </ul>
              </div>
              <h3 className="blog-title">The services provide for design</h3>
            </div>
          </motion.div>
          <motion.div
            className="recent-blogs__item three"
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
            <div className="blog-thumb">
              <div className="img-blog">
                <img src={blogImg3} alt="blog-img" />
              </div>
              <span>Technology</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <ul>
                  <li>
                    <FaRegCalendarDays className="icon calendar-days" />
                    May 10, 2024
                  </li>
                  <li>
                    <FaRegComments className="icon comments" />
                    No Comments
                  </li>
                </ul>
              </div>
              <h3 className="blog-title">Digital Marketo To Their Office.</h3>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RecentBlogs;
