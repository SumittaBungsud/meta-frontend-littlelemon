import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Auth from "../routes/Auth";
import Delivery from "../routes/Delivery";
import BookingForm from "../routes/BookingForm";
import Menu from "../routes/Menu";

const router = createBrowserRouter([
  {
    path: "/meta-frontend-littlelemon",
    element: <App />,
  },
  {
    path: "/meta-frontend-littlelemon/home",
    element: <App />,
  },
  {
    path: "/meta-frontend-littlelemon/auth",
    element: <Auth />,
  },
  {
    path: "/meta-frontend-littlelemon/delivery",
    element: <Delivery />,
  },
  {
    path: "/meta-frontend-littlelemon/reservation",
    element: <BookingForm />,
  },
  {
    path: "/meta-frontend-littlelemon/menu",
    element: <Menu />,
  },
]);

export default router;
