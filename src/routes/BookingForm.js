import React, { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import ConfirmBooking from "../components/ConfirmBooking";
import resImg from "../img/restaurant.jpg";
import { FormContext } from "../sources/contexts/FormProvider";

function BookingForm() {
  const [currDate, setCurrDate] = useState("");
  const [isConfirm, setConfirm] = useState(false);
  const { setForm, values, formAttributes } = useContext(FormContext);
  const maxTime = "22:00";
  const minTime = "17:00";
  const initialize = {
    name: "",
    email: "",
    phone: "",
    table: 1,
    people: 1,
    date: new Date(),
    time: minTime,
    occasion: "Birthday",
  };

  const handleBooking = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(values, null, 2));
    setConfirm(true);
  };

  useEffect(() => {
    const minDate = new Date().toISOString().substring(0, 10);
    setCurrDate(minDate);
    setForm(initialize);
  }, []);

  return (
    <fragment id="reservation">
      <Header />
      {isConfirm && <ConfirmBooking formData={values} onConfirm={setConfirm} />}
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
                  test-id="table"
                  name="table"
                  type="number"
                  min={1}
                  max={10}
                  placeholder="Choose up to 10"
                  {...formAttributes("table")}
                  required
                />
              </section>
              <section className="form-item">
                <label htmlFor="people" className="form-label-group">
                  How many people?
                </label>
                <input
                  id="people"
                  name="people"
                  type="number"
                  min={1}
                  max={10}
                  placeholder="Choose up to 10"
                  {...formAttributes("people")}
                  required
                />
              </section>
              <section className="form-item">
                <label htmlFor="date" className="form-label-group">
                  Choose Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  min={currDate}
                  {...formAttributes("date")}
                  required
                />
              </section>
              <section className="form-item">
                <label htmlFor="time" className="form-label-group">
                  Choose Time ({minTime} - {maxTime})
                </label>
                <select
                  id="time"
                  name="time"
                  className="form-item"
                  style={{
                    borderRadius: "0.4rem",
                    backgroundColor: "#f4f4f4",
                    border: "1.6px solid #989898",
                  }}
                  {...formAttributes("time")}
                  required
                >
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </select>
              </section>
              <section className="form-item">
                <label htmlFor="occasion" className="form-label-group">
                  Occasion
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  className="form-item"
                  style={{
                    borderRadius: "0.4rem",
                    backgroundColor: "#f4f4f4",
                    border: "1.6px solid #989898",
                  }}
                  {...formAttributes("occasion")}
                  required
                >
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                </select>
              </section>
            </fieldset>
            <fieldset className="form-section section-client">
              <h2>Customer Information</h2>
              <section className="form-item">
                <label htmlFor="name" className="form-label-group">
                  Customer name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Type full name"
                  {...formAttributes("name")}
                  required
                />
              </section>
              <section className="form-item">
                <label className="form-label-group">
                  Contact (email or phone number)
                </label>
                <section>
                  <section className="form-item">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      {...formAttributes("email")}
                    />
                  </section>
                  <section className="form-item">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="99-999-9999"
                      {...formAttributes("phone")}
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
