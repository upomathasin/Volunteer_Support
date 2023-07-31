import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";

import Registration from "../../Registration/Registration";
import WelcomePage from "../../Pages/WelcomePage.js/WelcomePage";
import VolunteerProfile from "../../VolunteerProfile/VolunteerProfile";
import Admin from "./../../Admin/Admin";
import VolunteerDash from "../../Pages/VolunteerDash/VolunteerDash";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/volunteer",
        element: <VolunteerDash></VolunteerDash>,
        children: [
          {
            path: "profile",
            element: <VolunteerProfile></VolunteerProfile>,
          },
        ],
      },
    ],
  },
]);
