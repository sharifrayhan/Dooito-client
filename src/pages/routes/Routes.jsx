import { createBrowserRouter } from "react-router-dom";
import Rootpage from "../Rootpage/Rootpage";
import Errorpage from "../Errorpage/Errorpage";
import Home from "../Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootpage></Rootpage>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
