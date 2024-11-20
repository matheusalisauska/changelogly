"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCheckmarkDoneSharp, IoHomeSharp } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";

const routes = [
  {
    name: "All",
    icon: <IoHomeSharp size={24} color="#2B2E48" />,
    iconSelected: <IoHomeSharp size={24} color="#7B57E0" />,
    href: "/home",
  },
  {
    name: "Published",
    icon: <IoCheckmarkDoneSharp size={24} color="#2B2E48" />,
    iconSelected: <IoCheckmarkDoneSharp size={24} color="#7B57E0" />,
    href: "/published",
  },
  {
    name: "Drafts",
    icon: <RiPencilFill size={24} color="#2B2E48" />,
    iconSelected: <RiPencilFill size={24} color="#7B57E0" />,
    href: "/drafts",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="hidden lg:flex flex-col w-80 pt-8 2xl:w-64  h-full bg-white lg:py-0 z-50">
      <div className="flex items-center gap-x-2 lg:h-[80px] lg:pl-16 2xl:pl-6">
        <div className="size-8 rounded-xl bg-orange-500"></div>
        <p className="text-xl text-black font-bold">Changelogly</p>
      </div>
      <div className="flex flex-col gap-y-8 w-full mt-12">
        <div className="flex flex-col gap-y-2">
          {routes.map((route, index) => (
            <Link
              href={route.href}
              key={index}
              className={cn(
                route.href === pathname && "bg-[#f3f2fc]",
                "hover:bg-[#f3f2fc]"
              )}
            >
              <div className="flex gap-x-3 items-center pr-5 pl-10  py-4">
                {pathname === route.href ? route.iconSelected : route.icon}
                <p className="mt-[2px] text-[#2B2E48] font-medium">
                  {route.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};
