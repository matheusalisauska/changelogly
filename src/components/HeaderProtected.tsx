import { ChevronRight, Menu } from "lucide-react";
import { SidebarMobile } from "./SidebarMobile";

export const HeaderProtected = () => {

  return (
    <header className="fixed lg:static rounded-lg top-0 right-0 bg-white flex flex-row justify-between items-center w-full px-4 sm:px-8 lg:px-16 2xl:px-12 py-5 lg:pt-8 lg:h-20 z-20 ">
      <SidebarMobile />

      <p className=" font-semibold lg:hidden text-primary">changelogly</p>
      <div className="items-center gap-x-12 hidden lg:flex">
        <div className="flex items-center gap-x-2 text-[#130101]">
          <p className="font-semibold">Home</p>
          <ChevronRight size={18} />
          <p className="font-semibold">Projects</p>
        </div>
      </div>
      <div className="size-8 lg:size-8 bg-white rounded-full"></div>
    </header>
  );
};
