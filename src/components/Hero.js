import React from "react";
import heroImg from "../img/restauranfood.jpg";

function Hero() {
  return (
    <section>
      <div
        className="hero"
        style={{
          backgroundColor: "#495E57",
          width: "100vw",
          height: "377px",
          position: "relative",
        }}
      >
        <article className="hero-article">
          <h1
            style={{
              fontSize: "3.4rem",
              fontFamily: "sans-serif",
              color: "#F4CE14",
            }}
          >
            Little Lemon
          </h1>
          <h4
            style={{
              fontSize: "1.8rem",
              fontFamily: "sans-serif",
              color: "#ffffff",
            }}
          >
            Chicago
          </h4>
          <p
            style={{
              width: "27rem",
              textAlign: "left",
              fontSize: "1.2rem",
              color: "#ffffff",
            }}
          >
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button
            style={{
              backgroundColor: "#F4CE14",
              fontSize: "1.2rem",
              fontWeight: "bold",
              borderWidth: "0",
              borderRadius: "8px",
              padding: "0.8rem 1.5rem",
            }}
          >
            Reserve a Table
          </button>
        </article>
        <img src={heroImg} alt="restaurant food" />
      </div>
    </section>
  );
}

export default Hero;
