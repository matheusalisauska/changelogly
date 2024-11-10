import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { Input } from "@/components/ui/input";

export const Projects = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl font-medium sm:text-2xl">All Projects</h2>
          <Button className="flex gap-x-1">
            <Plus />
            Create
          </Button>
        </div>
        <Input placeholder="Search your project" className="sm:max-w-[300px]" />
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 2xl:grid-cols-3 sm:gap-x-4 gap-y-10">
        <ProjectCard
          name="Plataforma Comercial"
          description="Plataforma de cadastro e criação de propostas comerciais"
          tags={["Next.js", "TypeScript"]}
          href="https://www.youtube.com/watch?v=HiG8tI-My64"
        />
        <ProjectCard
          name="Site Institucional"
          description="Plataforma de cadastro e criação de propostas comerciais"
          tags={["Astro.js", "TypeScript"]}
          href="https://www.youtube.com/watch?v=HiG8tI-My64"
        />
        <ProjectCard
          name="Site Institucional"
          description="Plataforma de cadastro e criação de propostas comerciais"
          tags={["Astro.js", "TypeScript"]}
          href="https://www.youtube.com/watch?v=HiG8tI-My64"
        />
        <ProjectCard
          name="Site Institucional"
          description="Plataforma de cadastro e criação de propostas comerciais"
          tags={["Astro.js", "TypeScript"]}
          href="https://www.youtube.com/watch?v=HiG8tI-My64"
        />
        <ProjectCard
          name="Site Institucional"
          description="Plataforma de cadastro e criação de propostas comerciais"
          tags={["Astro.js", "TypeScript"]}
          href="https://www.youtube.com/watch?v=HiG8tI-My64"
        />
        <ProjectCard
          name="Site Institucional"
          description="Plataforma de cadastro e criação de propostas comerciais"
          tags={["Astro.js", "TypeScript"]}
          href="https://www.youtube.com/watch?v=HiG8tI-My64"
        />
        <ProjectCard
          name="Site Institucional"
          description="Plataforma de cadastro e criação de propostas comerciais"
          tags={["Astro.js", "TypeScript"]}
          href="https://www.youtube.com/watch?v=HiG8tI-My64"
        />
        <ProjectCard
          name="Site Institucional"
          description="Plataforma de cadastro e criação de propostas comerciais"
          tags={["Astro.js", "TypeScript"]}
          href="https://www.youtube.com/watch?v=HiG8tI-My64"
        />
        <ProjectCard
          name="Site Institucional"
          description="Plataforma de cadastro e criação de propostas comerciais"
          tags={["Astro.js", "TypeScript"]}
          href="https://www.youtube.com/watch?v=HiG8tI-My64"
        />
        <ProjectCard
          name="Site Institucional"
          description="Plataforma de cadastro e criação de propostas comerciais"
          tags={["Astro.js", "TypeScript"]}
          href="https://www.youtube.com/watch?v=HiG8tI-My64"
        />
      </div>
    </div>
  );
};