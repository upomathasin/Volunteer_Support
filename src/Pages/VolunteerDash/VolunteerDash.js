import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function VolunteerDeshboard() {
  const menuitems = [
    {
      route: "profile",
      name: "Profile",
      icon: "i",
    },
    {
      route: "opportunites",
      name: "Opportunities",
      icon: "i",
    },
  ];
  return (
    <div className="flex flex-wrap bg-gray-100 w-full h-screen">
      <div className="w-3/12 bg-white rounded p-3 shadow-lg">
        <div className="flex items-center space-x-4 p-2 mb-5">
          <img
            className="h-12 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt="James Bhatta"
          />
          <div>
            <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
              User Name
            </h4>
            <span className="text-sm tracking-wide flex items-center space-x-1">
              icon
              <span className="text-gray-600">Verified</span>
            </span>
          </div>
        </div>
        <ul className="space-y-2 text-sm">
          {menuitems.map((item) => {
            return (
              <li>
                <NavLink
                  to={item.route}
                  //   className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline"
                      : "flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200  focus:shadow-outline"
                  }
                >
                  <span className="text-gray-600">{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-9/12" style={{ backgroundColor: "#F5F7FE" }}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
