import { createBrowserRouter } from "react-router-dom";
import Rootpage from "../Rootpage/Rootpage";
import Errorpage from "../Errorpage/Errorpage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Dashboard from "../Home/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import FAQSection from "../Home/Components/FAQ";
import About from "../Home/Components/About";


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
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/FAQ",
        element: <FAQSection></FAQSection>,
      },
      {
        path: "/Dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
      },
    ],
  },
]);

export default router;
