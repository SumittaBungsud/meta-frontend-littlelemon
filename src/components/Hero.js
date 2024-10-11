import React from "react";
import heroImg from "../img/restauranfood.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section id="hero" role="banner">
      <article
        className="hero"
        style={{
          backgroundColor: "#495E57",
          width: "100vw",
          height: "377px",
          position: "relative",
        }}
      >
        <section className="hero-container">
          <p className="maintitle">Little Lemon</p>
          <p className="subtitle">Chicago</p>
          <p className="description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button
            onClick={() => navigate("/meta-frontend-littlelemon/reservation")}
            className="button"
          >
            Reserve a Table
          </button>
        </section>
        <img src={heroImg} alt="restaurant food" />
      </article>
    </section>
  );
}

export default Hero;
