import React from "react";
import Hero from "./Hero";
import Highlight from "./Highlight";
import Testimonial from "./Testimonial";
import About from "./About";

function Main() {
  return (
    <main className="main-container">
      <Hero />
      <Highlight />
      <Testimonial />
      <About />
    </main>
  );
}

export default Main;
