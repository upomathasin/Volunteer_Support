import React from "react";

export default function Service({ title, description, image }) {
  return (
    <div
      className="card mb-3 col-md-4 col-sm-12 align-middle"
      style={{ maxWidth: "400px" }}
    >
      <div className="row g-0 p-3">
        <div className="col-md-4 my-auto p-2 ">
          <img
            src={image}
            className="img-fluid img-center "
            alt="..."
            style={{ maxHeight: "150px" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
