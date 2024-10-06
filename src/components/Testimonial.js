import React from "react";
import ReviewBlog from "./ReviewBlog";

const userReviews = [
  {
    name: "Micky Mouse",
    comment: "The best reastaurant I've ever tried.",
    rating: "4",
    stars: "⭐⭐⭐⭐",
  },
  {
    name: "Daniel Orlantum",
    comment:
      "The orders were as I required, Good portion, and appropriate price",
    rating: "5",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Michael Heart",
    comment:
      "I wouldn't like onion in Salad, but It's quite good with many ingredients",
    rating: "4",
    stars: "⭐⭐⭐⭐",
  },
  {
    name: "Sarah Bohni",
    comment: "The meals are tasty and original",
    rating: "4",
    stars: "⭐⭐⭐⭐",
  },
  {
    name: "Amanda Hall",
    comment: "Over expected! I can't wait to try other menus on the list",
    rating: "5",
    stars: "⭐⭐⭐⭐⭐",
  },
];

function Testimonial() {
  return (
    <section className="testimonial">
      <section>
        <label style={{ fontSize: "1.7em" }}>
          <h1>What's people say</h1>
        </label>
        <article>
          {userReviews.map((review) => (
            <ReviewBlog key={review.name} review={review} />
          ))}
        </article>
      </section>
    </section>
  );
}

export default Testimonial;
