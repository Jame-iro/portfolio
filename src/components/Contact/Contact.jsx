import React, { useState } from "react";
import "./contact.css";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";

const Contact = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="contact__form contact__item">
          <div className="contact__form__title">
            <h2 className="fade-in-section"> Let’s work together! </h2>
            <p className="fade-in-section">
              I design and code beautifully simple things and i love what i do.
              Just simple like that!
            </p>
          </div>
          <form className="fade-in-section">
            <input
              type="text"
              className="first-name"
              placeholder="First name"
            />
            <input type="text" className="last-name" placeholder="Last name" />
            <input type="email" className="email" placeholder="Email address" />
            <input
              type="text"
              className="phone-number"
              placeholder="Phone number"
            />
            <select name="work" id="work">
              <option value="default" className="default">
                --Please Choose An Option--
              </option>
              <option value="web">Web Design</option>
              <option value="web">Branding Design</option>
              <option value="web">App Design</option>
              <option value="web">UX/UI Design</option>
            </select>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>
            <button>Send Message</button>
          </form>
        </div>
        <div className="contact__info contact__item">
          <ul>
            <li className="fade-in-section">
              <div className="icon-box">
                <FiPhoneCall className="icon call" />
              </div>
              <div className="text-box">
                <p>Phone</p>
                <span>+01 123 654 8096</span>
              </div>
            </li>
            <li className="fade-in-section">
              <div className="icon-box">
                <FiMail className="icon mail" />
              </div>
              <div className="text-box">
                <p>Email</p>
                <span>jaja0890@mail.com</span>
              </div>
            </li>
            <li className="fade-in-section">
              <div className="icon-box">
                <IoLocationOutline className="icon location" />
              </div>
              <div className="text-box">
                <p>Address</p>
                <span>Namangan, Uzbekistan</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
