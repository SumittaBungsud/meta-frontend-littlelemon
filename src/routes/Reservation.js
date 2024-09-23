import React from "react";
import Header from "../components/Header";
import resImg from "../img/restaurant.jpg";

function Reservation() {
  return (
    <div id="reservation">
      <Header />
      <div className="container reserv-container">
        <h1>Reservation</h1>
        <img src={resImg} alt="reserv pic" />
        <div className="reserv-body">
          <div className="reserv-form">
            <div className="form-item">
              <label>Select Tables</label>
              <input type="number" max={10} min={1} />
            </div>
            <div className="form-item">
              <label>The number of people</label>
              <input type="number" max={10} min={1} />
            </div>
            <div className="form-item">
              <label>Time</label>
              <input type="time" />
            </div>
            <div className="form-item">
              <label>Location</label>
              <div>
                <input
                  type="radio"
                  id="outside"
                  name="location"
                  value="Outside"
                />
                <label for="outside">Outside</label>
                <input
                  type="radio"
                  id="inside"
                  name="location"
                  value="Inside"
                />
                <label for="inside">Inside</label>
              </div>
            </div>
            <div className="form-item">
              <label>Customer's name reservation</label>
              <input type="text" />
            </div>
            <div className="form-item">
              <label>Contact (email or phone number)</label>
              <div>
                <div>
                  <label>Email</label>
                  <input type="email" />
                </div>
                <div>
                  <label>Phone number</label>
                  <input type="tel" />
                </div>
              </div>
            </div>
            <div id="form-submit">
              <input type="submit" value="Book a Table" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
