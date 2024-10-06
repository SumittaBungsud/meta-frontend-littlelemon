import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function ReviewBlog({ review }) {
  return (
    <section
      className="review-blog"
      role="comment"
      aria-label="User's review blog"
    >
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          fontSize: "1.2em",
          marginLeft: "1em",
          lineHeight: "0",
        }}
        aria-label="User's review rating"
      >
        <h1 style={{ marginRight: "1em" }}> {review.rating}</h1>
        <h1>{review.stars}</h1>
      </section>
      <section
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <figure
          className="review-icon"
          role="img"
          aria-label="User's image icon"
        >
          <FontAwesomeIcon icon={faUser} />
        </figure>
        <h1>{review.name}</h1>
      </section>
      <article aria-label="User's comment">
        <p style={{ textAlign: "start", padding: "0 2em" }}>{review.comment}</p>
      </article>
    </section>
  );
}

export default ReviewBlog;
