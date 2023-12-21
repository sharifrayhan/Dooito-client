import { createBrowserRouter } from "react-router-dom";
import Rootpage from "../Rootpage/Rootpage";
import Errorpage from "../Errorpage/Errorpage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Dashboard from "../Home/Dashboard/Dashboard";


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
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/Dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;
