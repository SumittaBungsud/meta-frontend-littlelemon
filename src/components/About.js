import React from "react";

function About() {
  return (
    <section className="about-container">
      <div style={{ position: "relative", padding: "0 16vmax" }}>
        <article>
          <h1 style={{ lineHeight: "0" }}>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>
            From the picturesque coastal towns of the Mediterranean to the heart
            of Bangkok, Mimosa brings an air of riviera to your plate. Led by a
            carefree spirit of conviviality, we offer generous cuisine that
            celebrates the Mediterranean's culinary richness and diversity. Like
            an invitation to relax and enjoy ‘la dolce vita’, our seasonal menus
            focus on high-quality ingredients that are meant to be savoured with
            gusto.
          </p>
        </article>
        <div>
          <img alt="restaurant1" />
        </div>
        <div>
          <img alt="restaurant2" />
        </div>
      </div>
    </section>
  );
}

export default About;
