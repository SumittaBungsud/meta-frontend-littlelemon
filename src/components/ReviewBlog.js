import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function ReviewBlog({ review }) {
  return (
    <section className="review-blog">
      <section className="review-rating" aria-label="User's review rating">
        <h1 style={{ marginRight: "1em" }}> {review.rating}</h1>
        <h1>{review.stars}</h1>
      </section>
      <section className="review-user">
        <figure
          className="review-icon"
          role="img"
          aria-label="User's image icon"
        >
          <FontAwesomeIcon icon={faUser} />
        </figure>
        <h1>{review.name}</h1>
      </section>
      <section aria-label="User's comment">
        <p style={{ textAlign: "start", padding: "0 2em" }}>{review.comment}</p>
      </section>
    </section>
  );
}

export default ReviewBlog;
