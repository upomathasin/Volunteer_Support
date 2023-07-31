import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
export default function Navbar({ desboard }) {
  return (
    <div>
      <div
        className="navbar shadow "
        style={{ backgroundColor: "#0D1338", color: "white" }}
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
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
            Disaster Management
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/help">Ask help</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      {desboard ? (
        <div className="drawer lg:drawer-open " style={{ margin: 0 }}>
          <input
            id="my-drawer-2"
            type="checkbox"
            className="drawer-toggle"
            style={{ margin: 0 }}
          />

          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu  w-80 h-100 bg-base-200 text-base-content ">
              {/* Sidebar content here */}
              <li>
                <a href="welcome">Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}
