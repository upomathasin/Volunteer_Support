import React from "react";
import Service from "../Service/Service";

export default function Services() {
  const services = [
    {
      title: "We are 24 hours avaiable ",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "clock.png",
    },
    {
      title: "Provide Support to the poor",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "hand.png",
    },
    {
      title: "Emergency Reliefs for the people who need ",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "phone.png",
    },
  ];
  return (
    <div
      className="container-fluid  d-flex align-items-center justify-content-center min-h-screen "
      style={{ backgroundColor: "#F5F7FE" }}
    >
      <div className="row  gap-2   ">
        {services.map((service) => (
          <Service
            title={service.title}
            description={service.description}
            image={service.image}
          ></Service>
        ))}
      </div>
    </div>
  );
}
