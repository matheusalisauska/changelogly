import { Projects } from "@/components/home/Projects";
import { getProjects } from "@/utils/data/projects/get-projects";

export default async function Home() {
  const projects = await getProjects();


  return (
    <main className="flex flex-col flex-1 gap-y-8 h-full w-full">
      <Projects projects={projects ?? []} />
    </main>
  );
}
