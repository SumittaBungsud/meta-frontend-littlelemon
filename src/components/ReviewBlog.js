import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function ReviewBlog({ review }) {
  return (
    <div className="review-blog">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          fontSize: "1.2em",
          marginLeft: "1em",
          lineHeight: "0",
        }}
      >
        <h1 style={{ marginRight: "1em" }}> {review.rating}</h1>
        <h1>{review.stars}</h1>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div className="review-icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <h1>{review.name}</h1>
      </div>
      <div>
        <p style={{ textAlign: "start", padding: "0 2em" }}>{review.comment}</p>
      </div>
    </div>
  );
}

export default ReviewBlog;
