import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";

import Registration from "../../Registration/Registration";
import VolunteerProfile from "../../Pages/VolunteerDash/VolunteerProfile/VolunteerProfile";
import Admin from "./../../Admin/Admin";
import VolunteerDash from "../../Pages/VolunteerDash/VolunteerDash";
import EditProfile from "../../Pages/VolunteerDash/EditProfile/EditProfile";

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
          {
            path: "editProfile",
            element: <EditProfile></EditProfile>,
          },
        ],
      },
    ],
  },
]);
