import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function ReviewBlog({ review }) {
  return (
    <section className="review-blog">
      <section className="review-rating" aria-label="User's review rating">
        <p style={{ marginRight: "1em" }}> {review.rating}</p>
        <p>{review.stars}</p>
      </section>
      <section className="review-user">
        <div className="review-icon" role="img" aria-label="User's image icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <p id="review-username">{review.name}</p>
      </section>
      <section aria-label="User's comment">
        <p style={{ textAlign: "start", padding: "0 2em" }}>{review.comment}</p>
      </section>
    </section>
  );
}

export default ReviewBlog;
