import React, { createContext, useEffect, useState } from "react";
import * as Yup from "yup";

const FormContext = createContext(null);

function FormProvider({ children }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({
    name: {
      message: "",
      isValid: true,
    },
    email: {
      message: "",
      isValid: true,
    },
    phone: {
      message: "",
      isValid: true,
    },
    table: {
      message: "",
      isValid: true,
    },
    people: {
      message: "",
      isValid: true,
    },
    date: {
      message: "",
      isValid: false,
    },
    time: {
      message: "",
      isValid: true,
    },
    occasion: {
      message: "",
      isValid: true,
    },
  });

  const schema = Yup.object({
    name: Yup.string().required("Please fill out this field."),
    email: Yup.string().email("Please correct the email format."),
    phone: Yup.string()
      .required("Please fill out this field.")
      .matches(/([0-9]{10})/, "Phone must have 10 numbers.")
      .max(10, "Phone must have 10 numbers."),
    table: Yup.number("This field must be numbers.")
      .required("Please fill out this field.")
      .min(1, "Value must be at least 1 and up to 10.")
      .max(10, "Value must be at least 1 and up to 10."),
    people: Yup.number("This field must be numbers.")
      .required("Please fill out this field.")
      .min(1, "Value must be at least 1 and up to 10.")
      .max(10, "Value must be at least 1 and up to 10."),
    date: Yup.date("Please correct the date format.").required(
      "Please fill out this field."
    ),
    time: Yup.string()
      .required("Please fill out this field.")
      .matches(
        /(17:00|18:00|19:00|20:00|21:00|22:00)/,
        "Time must be in range 17:00 to 22:00."
      ),
    occasion: Yup.string().required("Please fill out this field."),
  });

  const setForm = async (initialize) => {
    setValues(initialize);
    validation(initialize);
  };

  const validation = (props, name) => {
    schema
      .validate(props)
      .then((res) => {
        setErrors((prev) => ({
          ...prev,
          [name]: { message: "", isValid: true },
        }));
        console.log(res);
      })
      .catch((err) => {
        setErrors((prev) => ({
          ...prev,
          [err.path]: { message: err.message, isValid: false },
        }));
      });
  };

  const formAttributes = (name) => {
    return {
      value: values[name],
      onChange: (e) => {
        setValues((prevValue) => {
          validation({ ...prevValue, [name]: e.target.value }, name);
          return { ...prevValue, [name]: e.target.value };
        });
      },
    };
  };

  const value = {
    setForm,
    values,
    errors,
    isFormValid:
      errors.name.isValid &&
      errors.email.isValid &&
      errors.phone.isValid &&
      errors.table.isValid &&
      errors.people.isValid &&
      errors.date.isValid &&
      errors.time.isValid &&
      errors.occasion.isValid,
    formAttributes,
  };

  useEffect(() => {}, [setValues]);
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export { FormProvider, FormContext };
