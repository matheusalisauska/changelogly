import { IoCheckmarkDoneSharp, IoHomeSharp } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-80 pt-8 2xl:w-64 pr-6 h-full bg-white lg:pl-16 2xl:pl-6 lg:py-0 z-50 drop-shadow-[rgba(0,_0,_0,_0.05)_0px_1px_2px]">
      <div className="flex items-center gap-x-2 lg:h-[80px]">
        <div className="size-8 rounded-xl bg-orange-500"></div>
        <p className="text-xl text-black font-bold">Changelogly</p>
      </div>
      <div className="flex flex-col gap-y-8 w-full mt-12">
        <div className="flex flex-col gap-y-4">
          <p className="text-sm text-[#969696]">FILTERS</p>
          <div className="flex flex-col gap-y-1">
            <button className="hover:bg-[#ebeef0] rounded-[6px]">
              <div className="flex gap-x-3 items-center px-5  py-2">
                <IoHomeSharp size={20} color="#181616" />
                <p className="mt-[2px] text-[#181616] font-medium">All</p>
              </div>
            </button>
            <button className="hover:bg-[#ebeef0] rounded-[6px]">
              <div className="flex gap-x-3 items-center px-5  py-2">
                <IoCheckmarkDoneSharp size={20} color="#181616" />
                <p className="mt-[2px] text-[#181616] font-medium">Published</p>
              </div>
            </button>
            <button className="hover:bg-[#ebeef0] rounded-[6px]">
              <div className="flex gap-x-3 items-center px-5  py-2">
                <RiPencilFill size={20} color="#181616" />
                <p className="mt-[2px] text-[#181616] font-medium">Drafts</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
