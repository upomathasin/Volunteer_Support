import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/Shared/Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";

import Services from "../Services/Services";
import JoinUs from "../JoinUs/JoinUs";

export default function Main() {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
