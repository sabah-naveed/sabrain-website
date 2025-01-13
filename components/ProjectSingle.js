import React from "react";

export default function ProjectSingle({ project }) {
  return (
    <div className="card bg-base-100 image-full w-96 shadow-xl">
      {/* Project Image */}
      <figure>
        <img
          src={project.image}
          alt={project.name}
          className="object-cover w-full h-full"
        />
      </figure>
      {/* Card Content */}
      <div className="card-body">
        <h2 className="card-title text-white">{project.name}</h2>
        <p>{project.description}</p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-sm rounded-lg ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        {/* Button */}
        <div className="card-actions justify-end mt-4">
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
