import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  return (
    <div>
      <div
        className="navbar shadow "
        style={{ backgroundColor: "rgb(13, 19, 56)" }}
      >
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52"
              style={{ color: "rgb(13, 19, 56)" }}
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>

              <li>
                <Link to="/report">Report</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>

          <Link
            to="/home"
            className="btn btn-ghost normal-case text-xl text-white"
          >
            Hands of Blessing
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/admin/volunteers">Admin Dashboard</Link>
            </li>
            <li>
              <Link to="/volunteer/profile">Volunteer Dashboard</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
