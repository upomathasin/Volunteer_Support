import React from "react";

export default function ContactUs() {
  return (
    <div>
      <div
        className="container  shadow  "
        style={{ backgroundColor: "#F5F7FE" }}
      >
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse  w-100 ">
            <div className="card m-3  w-50">
              <div className="card-body">
                <h1 className="text-3xl font-bold text-center ">Contact Us</h1>
                <h3 className="text  text-center pt-2">
                  If you have any query,contact us.
                </h3>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <input
                    type=""
                    placeholder="Message"
                    className="input input-bordered"
                  />
                  <div className="mt-6 text-center">
                    <button
                      className="btn  w-full"
                      style={{ backgroundColor: "#0D1338", color: "white" }}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
