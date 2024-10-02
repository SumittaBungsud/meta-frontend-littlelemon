import React, { createContext, useState } from "react";

const FormContext = createContext(null);

function FormProvider({ children }) {
  const [values, setValues] = useState({});

  const formAttributes = (name) => {
    return {
      value: values[name],
      onChange: (e) => setValues({ ...values, [name]: e.target.value }),
    };
  };

  const setForm = (initialize) => {
    setValues(initialize);
  };

  const value = {
    setForm,
    values,
    formAttributes,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export { FormProvider, FormContext };
