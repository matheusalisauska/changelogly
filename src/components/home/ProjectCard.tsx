import { Button } from "@/components/ui/button";
import { ChevronRight, UsersRound } from "lucide-react";

interface ProjectCardProps {
  name: string;
  href: string;
  description: string;
  tags: string[];
}

export const ProjectCard = ({
  name,
  description,
  href,
  tags,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-y-4 w-full bg-white shadow-md  shadow-black/5 p-3 rounded-xl">
      <div className="flex flex-row">
        <div className="flex flex-col gap-y-1">
          <p className="text-xl text-[#1C1C1C] font-semibold">{name}</p>
          <p className="text-[#9FA1A6] text-sm">{description}</p>
          <div className="flex flex-row gap-x-1">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="rounded-[5px] border-[1px] px-1 border-gray-400"
              >
                <p className="text-sm text-gray-400">{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-400">19:04</p>
      </div>
      <div className="w-full h-[1px] bg-white/30"></div>
      <div className="flex flex-row items-center">
        <div className="flex flex-row gap-x-2 items-center w-1/2">
          <UsersRound size={18} />
          <p className="text-sm">2 Members</p>
        </div>
        <div className="flex flex-row gap-x-2 items-center w-1/2">
          <Button>
            <p className="text-sm">Open</p>
          </Button>
        </div>
      </div>
    </div>
  );
};
