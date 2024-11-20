import { getProjects } from "@/actions/projects/get-projects";
import { Projects } from "@/components/home/Projects";

export default async function Home() {
  const { error, data: projects } = await getProjects();


  if (error) {
    return <p>error</p>
  }

  return (
    <main className="flex flex-col flex-1 gap-y-8 h-full w-full">
      <Projects projects={projects ?? []} />
    </main>
  );
}
