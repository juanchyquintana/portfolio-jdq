export type ProjectsType = {
    id: number,
    name: string,
    description: string,
    technologies: string[],
    projectLink: string,
    repositoryLink: string,
    role: string,
    image?: string,
}

export type FilterButtonType = {
    name: string;
    role: string;
}