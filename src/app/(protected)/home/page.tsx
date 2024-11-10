import { Projects } from "@/components/home/Projects";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 bg-[#f7f9fb] gap-y-8 h-full px-4 sm:px-8 lg:pr-16 2xl:pr-12 w-full">
      <Projects />
    </main>
  );
}
