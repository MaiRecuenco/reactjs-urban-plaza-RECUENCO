import React from "react";
import Navigation from "../partials/Navigation";
import Hero from "./hero/Hero";
import Contact from "../partials/Contact";
import Footer from "../partials/Footer";
import Services from "./services/Services";
import Store from "./stores/Stores";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Store />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
