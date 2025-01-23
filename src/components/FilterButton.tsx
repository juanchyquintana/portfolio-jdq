import { ProjectsType } from "../types";
import { buttons } from "../data/filterButton";
import { useState } from "react";

type FilterButtonProps = {
  projects: ProjectsType[];
  setFilteredProjects: (projects: ProjectsType[]) => void;
};

export default function FilterButton({
  projects,
  setFilteredProjects,
}: FilterButtonProps) {
  const [activeRole, setActiveRole] = useState("Todos");

  const handleFilter = (role: string) => {
    if (role === "Todos") {
      setFilteredProjects(projects);
      setActiveRole("Todos");
    } else {
      const filteredProjects = projects.filter(
        (project) => project.role === role
      );
      setFilteredProjects(filteredProjects);
      setActiveRole(role);
    }
  };
  return (
    <>
      <div className="flex flex-col w-full gap-2 md:flex-row md:justify-center md:gap-4">
        {buttons.map((button) => (
          <button
            key={button.role}
            className={`px-4 py-2 rounded-lg text-md font-bold uppercase transition-colors hover:scale-105 hover:text-gray-300 ${
              activeRole === button.role
                ? "bg-blue-600 text-white"
                : "bg-blue-400 hover:bg-blue-500 text-white"
            }`}
            onClick={() => handleFilter(button.role)}
          >
            {button.name}
            <span className="italic">
              {button.role !== "Todos" &&
                " (" +
                  projects.filter((project) => project.role === button.role)
                    .length +
                  ")"}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
