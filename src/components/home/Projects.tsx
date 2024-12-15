import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Project } from "@/utils/data/projects/get-projects";
import { Section } from "../Section";

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="flex flex-col gap-y-6 mt-8">
      <Section className="flex flex-col gap-y-6">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl font-medium sm:text-2xl">All Projects</h2>
          <Link href={'/create-project'}>
            <Button className="flex gap-x-1">
              <Plus />
              Create
            </Button>
          </Link>
        </div>
        <Input placeholder="Search your project" className="sm:max-w-[300px]" />
      </Section>
      {projects.length === 0 ? (
        <p className="text-sm  text-center text-gray-400">No projects found</p>
      ) : (
        <div className="flex flex-col sm:grid sm:grid-cols-2 2xl:grid-cols-3 sm:gap-x-4 gap-y-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      )}
    </div>
  );
};
