import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/App.css";
import "./styles/pages.css";
import "./styles/pages2.css";
import "./styles/elementStyle.css";
import router from "./sources/routers";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { FormProvider } from "./sources/contexts/FormProvider";
import { DeliProvider } from "./sources/contexts/DeliProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DeliProvider>
      <FormProvider>
        <RouterProvider router={router} />
      </FormProvider>
    </DeliProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
