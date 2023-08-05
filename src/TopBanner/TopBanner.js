import React from "react";
import { Link } from "react-router-dom";
export default function TopBanner() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#0D1338", color: "white" }}
    >
      <div className="hero min-h-screen mb-4">
        <div className="hero-content flex-col lg:flex-row  ">
          <img
            src="helpHand.png"
            className="max-w-lg rounded-lg shadow-xl p-4 "
            style={{ backgroundColor: "white" }}
          />
          <div className="p-4  justify-center ml-6 text-center ">
            <h1 className="text-5xl font-bold">Hands of Blessing !</h1>
            <p className="py-6 ">
              We are here to provide timely information, resources, and
              guidelines to help people prepare for and respond to natural
              disasters, safeguarding lives and minimizing damage.
            </p>
            <button
              className="btn border-0 text-white"
              style={{ backgroundColor: "#EB6855" }}
            >
              <Link to="/register">Join Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
