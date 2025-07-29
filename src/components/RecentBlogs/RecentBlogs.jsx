import React, { useState } from "react";
import "./recentBlogs.css";
import { FaRegCalendarDays, FaRegComments } from "react-icons/fa6";
import blogImg1 from "../../assets/blog-img1.jpg";
import blogImg2 from "../../assets/blog-img2.jpg";
import blogImg3 from "../../assets/blog-img3.jpg";

const RecentBlogs = () => {
  return (
    <div>
      <section className="recent-blogs" id="blog">
        <div className="recent-blogs__title">
          <h2 className="fade-in-section">Recent Blogs</h2>
          <p className="fade-in-section">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div className="recent-blogs__items">
          <div className="recent-blogs__item fade-in-section two">
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
                    <FaRegCalendarDays className="icon calenday-days" />
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
          </div>
          <div className="recent-blogs__item fade-in-section three">
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
                    <FaRegCalendarDays className="icon calenday-days" />
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
          </div>
          <div className="recent-blogs__item fade-in-section four">
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
                    <FaRegCalendarDays className="icon calenday-days" />
                    May 10, 2024
                  </li>
                  <li>
                    <FaRegComments className="icon comments" />
                    No Comments
                  </li>
                </ul>
              </div>
              <h3 className="blog-title">
                Digital Marketo To Their Office.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecentBlogs;
