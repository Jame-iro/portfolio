import React, { useState } from "react";
import "./hero.css";
import { BsDownload } from "react-icons/bs";
import avatar from "../../assets/avatar.jpg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaDribbble,
  FaGithub,
} from "react-icons/fa";
const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-text">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" text-anchor="middle" class="animate-stroke">
              HI{" "}
            </text>
          </svg>
        </div>
        <div className="hero-content">
          <div className="text-content">
            <span>I am Javohir</span>
            <h1>Full-Stack Web Developer</h1>
            <div className="container d-flex">
              <p>
                I break down complex user experience problems to create
                integrity focussed solutions that connect billions of people
              </p>
              <div className="btns">
                <button className="download">
                  Download CV
                  <BsDownload className="icon download" />
                </button>
                <ul>
                  <li>
                    <button>
                      <FaFacebookF className="icon facebook" />
                    </button>
                  </li>
                  <li>
                    <button>
                      <FaLinkedinIn className="icon linkedin" />
                    </button>
                  </li>
                  <li>
                    <button>
                      <FaDribbble className="icon dibble" />
                    </button>
                  </li>
                  <li>
                    <button>
                      <FaGithub className="icon github" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="img-blog">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="container d-none">
            <p>
              I break down complex user experience problems to create integrity
              focussed solutions that connect billions of people
            </p>
            <div className="btns">
              <button className="download">
                Download CV
                <BsDownload className="icon download" />
              </button>
              <ul>
                <li>
                  <button>
                    <FaFacebookF className="icon facebook" />
                  </button>
                </li>
                <li>
                  <button>
                    <FaLinkedinIn className="icon linkedin" />
                  </button>
                </li>
                <li>
                  <button>
                    <FaDribbble className="icon dibble" />
                  </button>
                </li>
                <li>
                  <button>
                    <FaGithub className="icon github" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hero-facts-wrapper">
          <div className="hero-facts">
            <div className="hero-facts__item">
              <div className="idk">
                <div className="wtf">
                  <h4>19</h4>
                  <p>
                    Years of <br />
                    experience
                  </p>
                </div>
              </div>
            </div>
            <div className="hero-facts__item">
              <div className="idk">
                <div className="wtf">
                  <h4>69+</h4>
                  <p>
                    Projects <br />
                    Completed
                  </p>
                </div>
              </div>
            </div>
            <div className="hero-facts__item">
              <div className="idk">
                <div className="wtf">
                  <h4>0</h4>
                  <p>
                    Happy <br />
                    Clients
                  </p>
                </div>
              </div>
            </div>
            <div className="hero-facts__item">
              <div className="idk">
                <div className="wtf">
                  <h4>1</h4>
                  <p>
                    Day to <br />
                    Build Portfolio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
