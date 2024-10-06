import React from "react";
import { getLongDate } from "../sources/menuSource";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

function ConfirmBooking({ formData, onConfirm }) {
  const bodyForm = [
    {
      subject: "Customer",
      value: formData.people,
    },
    {
      subject: "Booking Table",
      value: formData.table,
    },
    {
      subject: "Occasion",
      value: formData.occasion,
    },
    {
      subject: "Booking Date",
      value: getLongDate(new Date(formData.date)),
    },
    {
      subject: "Booking Time",
      value: formData.time,
    },
  ];

  return (
    <section
      id="confirmbox"
      role="dialog"
      aria-labelledby="confirm-header"
      aria-describedby="confirm-body"
    >
      <section className="confirm-container">
        <section className="confirm-header">
          <figure
            className="confirm-header-icon"
            onClick={() => onConfirm(false)}
            aria-label="close popup button"
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </figure>
          <h2>Confirm {formData.name}'s booking?</h2>
          {formData.email === "" && formData.phone === "" ? null : (
            <article className="detail">
              <p>Tel. {formData.phone ?? " - "}</p> <p>|</p>
              <p>{formData.email ?? " - "}</p>
            </article>
          )}
        </section>
        <section className="confirm-body-container">
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              margin: "1.5rem 0 0 2rem",
            }}
          >
            Booking Details
          </p>
          <article className="confirm-body">
            {bodyForm.map((item) => (
              <div key={item.subject} className="confirm-body-item">
                <p style={{ color: "#a4a4a4" }}>{item.subject}</p>
                <p style={{ color: "#000000" }} className="item">
                  {item.value}
                </p>
              </div>
            ))}
          </article>
        </section>
        <section className="confirm-footer">
          <button className="button cancel" onClick={() => onConfirm(false)}>
            Cancel
          </button>
          <button className="button confirm" onClick={() => onConfirm(false)}>
            Confirm
          </button>
        </section>
      </section>
    </section>
  );
}

export default ConfirmBooking;
