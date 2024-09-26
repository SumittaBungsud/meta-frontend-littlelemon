import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import resImg from "../img/restaurant.jpg";

function BookingForm() {
  const [currDate, setCurrDate] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    alert("Submit Form!");
  };

  useEffect(() => {
    const minDate = new Date().toISOString().substring(0, 10);
    setCurrDate(minDate);
    console.log(minDate);
  }, []);

  return (
    <fragment id="reservation">
      <Header />
      <div className="container reserv-container">
        <h1>Reservation</h1>
        <img src={resImg} alt="restaurant" />
        <div className="reserv-body">
          <form onSubmit={handleBooking} className="reserv-form">
            <fieldset className="form-section section-book">
              <h2>Booking Details</h2>
              <section className="form-item">
                <label htmlFor="table" className="form-label-group">
                  Select Tables
                </label>
                <input
                  id="table"
                  name="table"
                  type="number"
                  min={1}
                  max={10}
                  placeholder="Choose up to 10"
                />
              </section>
              <section className="form-item">
                <label htmlFor="people" className="form-label-group">
                  The number of people
                </label>
                <input
                  id="people"
                  name="people"
                  type="number"
                  min={1}
                  max={10}
                  placeholder="Choose up to 10"
                />
              </section>
              <section className="form-item">
                <label htmlFor="date" className="form-label-group">
                  Date
                </label>
                <input id="date" name="date" type="date" min={currDate} />
              </section>
              <section className="form-item">
                <label htmlFor="time" className="form-label-group">
                  Time (11:00 - 21:00)
                </label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  min="11:00"
                  max="21:00"
                />
              </section>
              <section className="form-item">
                <label className="form-label-group">Occasion</label>
                <select
                  id="occasion"
                  className="form-item"
                  style={{
                    borderRadius: "0.4rem",
                    backgroundColor: "#f4f4f4",
                    border: "1.6px solid #989898",
                  }}
                >
                  <option>None</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </select>
              </section>
            </fieldset>
            <fieldset className="form-section section-client">
              <h2>Customer Information</h2>
              <section className="form-item">
                <label className="form-label-group">Customer name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Type full name"
                />
              </section>
              <section className="form-item">
                <label className="form-label-group">
                  Contact (email or phone number)
                </label>
                <section>
                  <section className="form-item">
                    <label>Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                    />
                  </section>
                  <section className="form-item">
                    <label>Phone number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="99-999-9999"
                    />
                  </section>
                </section>
              </section>
            </fieldset>
            <section className="form-submit">
              <input className="button" type="submit" value="Book a Table" />
            </section>
          </form>
        </div>
      </div>
    </fragment>
  );
}

export default BookingForm;
