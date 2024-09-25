import React from "react";
import Header from "../components/Header";
import resImg from "../img/restaurant.jpg";

function Reservation() {
  return (
    <fragment id="reservation">
      <Header />
      <div className="container reserv-container">
        <h1>Reservation</h1>
        <img src={resImg} alt="restaurant" />
        <div className="reserv-body">
          <form className="reserv-form">
            <fieldset className="form-section section-book">
              <h2>Booking Details</h2>
              <section className="form-item">
                <label for="select table" className="form-label-group">
                  Select Tables
                </label>
                <input
                  id="select table"
                  name="select table"
                  type="number"
                  max={10}
                  min={1}
                  placeholder="Choose up to 10"
                />
              </section>
              <section className="form-item">
                <label for="people" className="form-label-group">
                  The number of people
                </label>
                <input
                  id="people"
                  name="people"
                  type="number"
                  max={10}
                  min={1}
                  placeholder="Choose up to 10"
                />
              </section>
              <section className="form-item">
                <label for="time" className="form-label-group">
                  Time
                </label>
                <input id="time" name="time" type="time" />
              </section>
              <section className="form-item">
                <label className="form-label-group">Location</label>
                <arguments
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: "0.3rem",
                  }}
                >
                  <label for="outside">
                    <input
                      type="radio"
                      id="outside"
                      name="location"
                      value="Outside"
                    />
                    Outside
                  </label>
                  <label for="inside">
                    <input
                      type="radio"
                      id="inside"
                      name="location"
                      value="Inside"
                      checked
                    />
                    Inside
                  </label>
                </arguments>
              </section>
            </fieldset>
            <fieldset className="form-section section-client">
              <h2>Customer Information</h2>
              <section className="form-item">
                <label className="form-label-group">Customer name</label>
                <input type="text" placeholder="Type full name" />
              </section>
              <section className="form-item">
                <label className="form-label-group">
                  Contact (email or phone number)
                </label>
                <section>
                  <section className="form-item">
                    <label>Email</label>
                    <input type="email" placeholder="example@email.com" />
                  </section>
                  <section className="form-item">
                    <label>Phone number</label>
                    <input type="tel" placeholder="99-999-9999" />
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

export default Reservation;
