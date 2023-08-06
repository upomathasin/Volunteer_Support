import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminDash() {
  const menuitems = [
    {
      route: "volunteers",
      name: "All Volunteers",
      icon: "",
      divider: true,
    },
    {
      route: "projects",
      name: "All Projects",
      icon: "",
      divider: false,
    },
    {
      route: "newproject",
      name: "Add New Project",
      icon: "",
      divider: true,
    },
    {
      route: "helps",
      name: "Help Requests",
      icon: "",
      divider: false,
    },
  ];
  return (
    <div className="flex bg-gray-100 w-full min-h-screen">
      <div className="w-3/12 bg-white rounded p-3 shadow-lg">
        <div className="flex items-center space-x-4 p-2 mb-5">
          <img
            className="h-12 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt="profile"
          />
          <div>
            <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
              Admin
            </h4>
            {/* <span className="text-sm tracking-wide flex items-center space-x-1">
              icon
              <span className="text-gray-600">Verified</span>
            </span> */}
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
                {item.divider && (
                  <div
                    className=" mx-3 my-3"
                    style={{ border: "1px solid lightgray" }}
                  ></div>
                )}
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