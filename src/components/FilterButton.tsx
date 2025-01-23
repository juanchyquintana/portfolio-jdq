import { ProjectsType, FilterButtonType } from "../types";
import { buttons } from "../data/filterButton";

type FilterButtonProps = {
  projects: ProjectsType[];
  setFilteredProjects: (projects: ProjectsType[]) => void;
};

export default function FilterButton({
  projects,
  setFilteredProjects,
}: FilterButtonProps) {
  const handleFilter = (role: string) => {
    if (role === "Todos") {
      setFilteredProjects(projects);
    } else {
      const filteredProjects = projects.filter(
        (project) => project.role === role
      );
      setFilteredProjects(filteredProjects);
    }
  };
  return (
    <>
      <div className="flex flex-col w-full gap-2 md:flex-row md:justify-center md:gap-4">
        {buttons.map((button) => (
          <button
            className="bg-blue-700 hover:bg-blue-600 p-2 rounded-lg text-white font-bold uppercase shadow-md"
            onClick={() => handleFilter(button.role)}
          >
            {button.name}
            <span className="italic text-black">
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
