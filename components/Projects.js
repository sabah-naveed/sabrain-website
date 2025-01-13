import React from "react";
import ProjectSingle from "./ProjectSingle";
import { projects } from "/public/constants/index.js";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-950 text-slate-950 ">
      <h1 className="text-4xl text-center text-white font-bold mb-10 mt-10">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <ProjectSingle key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
