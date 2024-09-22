import React from "react";
import resImg from "../img/restaurant.jpg";
import chefImg from "../img/restaurant chef B.jpg";

function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-body">
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
        <div style={{ marginLeft: "6em" }}>
          <img className="aboutImg about-img1" src={resImg} alt="restaurant" />
          <img
            className="aboutImg about-img2"
            src={chefImg}
            alt="restaurant chef B"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
