import { useReducer } from "react";

const initialize = {
  name: "",
  email: "",
  phone: "",
  table: 1,
  people: 1,
  date: new Date(),
  time: "",
  occasion: "",
};

const bookingReducer = (state, action) => {
  switch (action.type) {
    case "set name":
      return { ...state, name: action.param };
    case "set email":
      return { ...state, email: action.param };
    case "set table":
      return { ...state, table: action.param };
    case "set people":
      return { ...state, people: action.param };
    case "set date":
      return { ...state, date: action.param };
    case "set time":
      return { ...state, time: action.param };
    case "set occasion":
      return { ...state, occasion: action.param };
  }
};

export default [useBooking] = useReducer(bookingReducer, initialize);
