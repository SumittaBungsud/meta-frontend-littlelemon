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
          <h1
            style={{
              fontSize: "3.4rem",
              color: "#F4CE14",
            }}
          >
            Little Lemon
          </h1>
          <p
            style={{
              fontSize: "1.8rem",
              color: "#f0f0f0",
              lineHeight: 0,
            }}
          >
            Chicago
          </p>
          <p
            style={{
              width: "27rem",
              fontSize: "1.2rem",
              color: "#ffffff",
            }}
          >
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button onClick={() => navigate("/reservation")} className="button">
            Reserve a Table
          </button>
        </section>
        <img src={heroImg} alt="restaurant food" />
      </article>
    </section>
  );
}

export default Hero;
