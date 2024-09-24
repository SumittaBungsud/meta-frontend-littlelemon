import React from "react";
import Header from "../components/Header";
import resImg from "../img/restaurant.jpg";

function Reservation() {
  return (
    <div id="reservation">
      <Header />
      <div className="container reserv-container">
        <h1>Reservation</h1>
        <img src={resImg} alt="restaurant" />
        <div className="reserv-body">
          <div className="reserv-form">
            <div className="form-section section-book">
              <h2>Booking Details</h2>
              <div className="form-item">
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
              </div>
              <div className="form-item">
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
              </div>
              <div className="form-item">
                <label for="time" className="form-label-group">
                  Time
                </label>
                <input id="time" name="time" type="time" />
              </div>
              <div className="form-item">
                <label className="form-label-group">Location</label>
                <div
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
                </div>
              </div>
            </div>
            <div className="form-section section-client">
              <h2>Customer Information</h2>
              <div className="form-item">
                <label className="form-label-group">Customer name</label>
                <input type="text" placeholder="Type full name" />
              </div>
              <div className="form-item">
                <label className="form-label-group">
                  Contact (email or phone number)
                </label>
                <div>
                  <div className="form-item">
                    <label>Email</label>
                    <input type="email" placeholder="example@email.com" />
                  </div>
                  <div className="form-item">
                    <label>Phone number</label>
                    <input type="tel" placeholder="99-999-9999" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-submit">
              <input className="button" type="submit" value="Book a Table" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
