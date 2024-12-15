import { ChangeList } from "@/components/changes/ChangeList";
import { Section } from "@/components/Section";
import TagBadge from "@/components/TagBadge";
import { UsersAvatarStack } from "@/components/UsersAvatarStack";
import { getProjectsById } from "@/utils/data/projects/get-project-by-id";
import { LuPackage } from "react-icons/lu";

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id;
    const { success, data: project } = await getProjectsById(id);

    if (!success || !project) {
        return <div>Project not found</div>
    }

    return (
        <main className="flex flex-col gap-y-8 mt-8">
            <Section className="gap-y-2">
                <div className="flex flex-row items-center gap-x-3">
                    <div className="p-1.5 bg-[#eaebff] size-fit rounded-md"><LuPackage size={20} strokeWidth={1.5} color="#5d54eb" /></div>
                    <h2 className="text-xl font-bold sm:text-2xl ">{project.name}</h2>
                </div>
                <p className="text-[#9FA1A6] text-sm">{project.description}</p>
                <div className="flex flex-row gap-x-2 mt-2">
                    {project.tags.map((tag, index) => (
                        <TagBadge key={index} label={tag} />
                    ))}
                </div>
                <div className="flex flex-col gap-y-1 mt-4">
                    <p className="font-semibold">Members</p>
                    <UsersAvatarStack />
                </div>
            </Section>
            <Section>
                <ChangeList />
            </Section>
        </main>
    )
}