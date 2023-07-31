import React from "react";

export default function JoinUs() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#0D1338", color: "white" }}
    >
      <div className="hero min-h-screen ">
        <div className="flex-col hero-content lg:flex-row text-center  gap-5">
          <div>
            <img
              src="volunteer2.png"
              class="sm:max-w-sm lg:max-w-3xl rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold ">Become A Volunteer!</h1>
            <p className="py-6 ">
              We are here to provide timely information, resources, and
              guidelines to help people prepare for and respond to natural
              disasters, safeguarding lives and minimizing damage.
            </p>
            <button
              className="btn btn-border-0 text-white"
              style={{ backgroundColor: "#EB6855" }}
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
