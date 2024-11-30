import Link from "next/link";
import TagBadge from "../TagBadge";

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  tags: string[];
}

export const ProjectCard = ({
  id,
  name,
  description,
  tags,
}: ProjectCardProps) => {
  return (
    <Link href={`/project/${id}`}>
      <div className="flex flex-col gap-y-4 w-full bg-white border border-[#e4e4e7] p-3 rounded-xl">
        <div className="flex flex-row">
          <div className="flex flex-col gap-y-4">
            <div className="space-y-1">
              <p className="text-xl text-[#1C1C1C] font-semibold">{name}</p>
              <p className="text-[#9FA1A6] text-sm">{description}</p>
            </div>
            <div className="flex flex-row gap-x-2">
              {tags.map((tag, index) => (
                <TagBadge key={index} label={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
};
