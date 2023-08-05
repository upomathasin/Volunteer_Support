import React from "react";

export default function NewProject() {
  return (
    <div className="flex justify-center p-5">
      <div className="form-control w-full max-w-md px-5 py-4">
        <p className="h3">Project Detail Form:</p>
        <label className="label">
          <span className="label-text">Project Title:</span>
        </label>
        <input type="text" className="input input-bordered w-full max-w-" />

        <label className="label">
          <span className="label-text">Project Location:</span>
        </label>
        <input type="text" className="input input-bordered w-full max-w-md" />

        <label className="label">
          <span className="label-text">Project Duration:</span>
        </label>
        <input type="text" className="input input-bordered w-full max-w-md" />

        <label className="label">
          <span className="label-text">Project Description:</span>
        </label>
        <textarea
          type="text"
          multiline
          className="input input-bordered w-full max-w-md"
        />

        <label className="label">
          <span className="label-text">Project Image:</span>
        </label>
        <input
          type="file"
          className="py-2 input input-bordered w-full max-w-md"
        />

        <button className="my-3 btn bg-sky-950 text-white">Add Project</button>
      </div>
    </div>
  );
}
