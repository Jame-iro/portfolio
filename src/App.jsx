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
  const lenis = new Lenis({
    autoRaf: true,
  });

  return (
    <div>
      <Header />
      <Hero />
      <MyServices />
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
