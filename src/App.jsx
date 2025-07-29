import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MyServices from "./components/MyServices/MyServices";
import MyWorks from "./components/MyWorks/MyWorks";
import MyExperience from "./components/MyExperience/MyExperience";
import MySkills from "./components/MySkills/MySkills";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import RecentBlogs from "./components/RecentBlogs/RecentBlogs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
const App = () => {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  // lenis.on("scroll", (e) => {
  //   console.log(e);
  // });

  // // Use requestAnimationFrame to continuously update the scroll
  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

  document.addEventListener("DOMContentLoaded", () => {
    const fadeSections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: .2 }
    );

    fadeSections.forEach((section) => {
      observer.observe(section);
    });
  });
  return (
    <div>
      <Header />
      <Hero  />
      <MyServices  />
      <MyWorks />
      <MyExperience />
      <MySkills />
      <RecentBlogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
