import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Auth from "../routes/Auth";
import Delivery from "../routes/Delivery";
import Reservation from "../routes/Reservation";
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
    element: <Reservation />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

export default router;
