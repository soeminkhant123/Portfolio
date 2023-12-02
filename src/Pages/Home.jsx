import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
