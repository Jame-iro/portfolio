import React, { useState } from "react";
import "./contact.css";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="contact__form contact__item">
          <div className="contact__form__title">
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
              Let’s work together!{" "}
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
              I design and code beautifully simple things and i love what i do.
              Just simple like that!
            </motion.p>
          </div>
          <motion.form
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
              delay: 0.5,
              ease: "easeOut",
            }}
          >
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
          </motion.form>
        </div>
        <div className="contact__info contact__item">
          <ul>
            <motion.li
              className="fade-in"
              initial={{
                opacity: 0,
                transform: "translateX(40px)",
                scaleY: 0,
              }}
              whileInView={{
                opacity: 1,
                transform: "translateX(0)",
                scaleY: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <div className="icon-box">
                <FiPhoneCall className="icon call" />
              </div>
              <div className="text-box">
                <p>Phone</p>
                <span>+01 123 654 8096</span>
              </div>
            </motion.li>
            <motion.li
              className="fade-in"
              initial={{
                opacity: 0,
                transform: "translateX(40px)",
                scaleY: 0,
              }}
              whileInView={{
                opacity: 1,
                transform: "translateX(0)",
                scaleY: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <div className="icon-box">
                <FiMail className="icon mail" />
              </div>
              <div className="text-box">
                <p>Email</p>
                <span>jaja0890@mail.com</span>
              </div>
            </motion.li>
            <motion.li
              className="fade-in"
              initial={{
                opacity: 0,
                transform: "translateX(40px)",
                scaleY: 0,
              }}
              whileInView={{
                opacity: 1,
                transform: "translateX(0)",
                scaleY: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <div className="icon-box">
                <IoLocationOutline className="icon location" />
              </div>
              <div className="text-box">
                <p>Address</p>
                <span>Namangan, Uzbekistan</span>
              </div>
            </motion.li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
