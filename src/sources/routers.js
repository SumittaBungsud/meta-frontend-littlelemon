import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Auth from "../routes/Auth";
import Delivery from "../routes/Delivery";
import BookingForm from "../routes/BookingForm";
import Menu from "../routes/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/delivery",
    element: <Delivery />,
  },
  {
    path: "/reservation",
    element: <BookingForm />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

export default router;
