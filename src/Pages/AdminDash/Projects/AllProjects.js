import React from "react";

export default function AllProjects() {
  const projects = [
    {
      image: "./sylhet_flood.jpg",
      title: "Relief for Flood affected people in Sylhet",
      description:
        "Volunteer support and relief distribution is required in the flood-affected regions to provide necessary assistance to the survivors.",
      location: "Sylhet Sadar",
      duration: "5 June to untill flood ends",
    },
    {
      image: "./sylhet_flood.jpg",
      title: "Relief for Flood affected people in Sylhet",
      description:
        "Volunteer support and relief distribution is required in the flood-affected regions to provide necessary assistance to the survivors.",
      location: "Sylhet Sadar",
      duration: "5 June to untill flood ends",
    },

    {
      image: "./sylhet_flood.jpg",
      title: "Relief for Flood affected people in Sylhet",
      description:
        "Volunteer support and relief distribution is required in the flood-affected regions to provide necessary assistance to the survivors.",
      location: "Sylhet Sadar",
      duration: "5 June to untill flood ends",
    },
    {
      image: "./sylhet_flood.jpg",
      title: "Relief for Flood affected people in Sylhet",
      description:
        "Volunteer support and relief distribution is required in the flood-affected regions to provide necessary assistance to the survivors.",
      location: "Sylhet Sadar",
      duration: "5 June to untill flood ends",
    },
  ];

  return (
    <div
      className="py-6 grid grid-cols-3"
      style={{ maxHeight: "100vh", overflowY: "scroll" }}
    >
      {projects.map((project) => {
        return (
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
            <img
              className="w-full"
              src={require(`${project.image}`)}
              alt="card img"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <p className=" mt-3 ">
                <strong>Location: </strong>
                {project.location}
              </p>
              <p className=" mt-3 ">
                <strong>Duration: </strong>
                {project.duration}
              </p>
              <p className="text-gray-700 text-base mt-3">
                <strong>
                  Description: <br />
                </strong>
                {project.description}
              </p>

              <button className="btn bg-emerald-400 mt-2">Edit</button>
              <button className="btn bg-gray-400 mt-2">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
