import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";

import Registration from "../../Registration/Registration";
import VolunteerProfile from "../../Pages/VolunteerDash/VolunteerProfile/VolunteerProfile";

import VolunteerDash from "../../Pages/VolunteerDash/VolunteerDash";
import EditProfile from "../../Pages/VolunteerDash/EditProfile/EditProfile";
import AllVolunteers from "../../Pages/VolunteerDash/AllVolunteers/AllVolunteers";
import Help from "../../Pages/Help/Help";
import AdminDash from "../../Pages/AdminDash/AdminDash";
import Volunteers from "../../Pages/AdminDash/Volunteers/Volunteers";

import NewProject from "../../Pages/AdminDash/NewProject/NewProject";
import HelpRequests from "../../Pages/AdminDash/HelpRequests/HelpRequests";
import Projects from "../../Pages/VolunteerDash/Projects/Projects";
import AllProjects from "./../../Pages/AdminDash/Projects/AllProjects";
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
        path: "/help",
        element: <Help></Help>,
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
          {
            path: "allVolunteers",
            element: <AllVolunteers></AllVolunteers>,
          },
          {
            path: "projects",
            element: <Projects></Projects>,
          },
        ],
      },
      {
        path: "/admin",
        element: <AdminDash></AdminDash>,
        children: [
          {
            path: "volunteers",
            element: <Volunteers></Volunteers>,
          },
          {
            path: "projects",
            element: <AllProjects></AllProjects>,
          },
          {
            path: "newproject",
            element: <NewProject></NewProject>,
          },
          {
            path: "helps",
            element: <HelpRequests></HelpRequests>,
          },
        ],
      },
    ],
  },
]);
