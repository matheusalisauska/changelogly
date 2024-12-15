import { CircleAlert } from "lucide-react";
import { LuHistory } from "react-icons/lu";
import { Separator } from "../ui/separator";


export const ChangeList = () => {
    return (
        <section className="flex flex-col gap-y-4">
            <div className="flex flex-row items-center gap-x-2">
                <div className="p-1.5 bg-[#fff3e1] size-fit rounded-md"><LuHistory size={16} strokeWidth={1.5} color="#c6863a" /></div>
                <h2 className="font-semibold text-lg">Last Changes</h2>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-4 p-2 rounded-md">
                    <div className="flex flex-row items-start gap-x-2">
                        <CircleAlert color="#f26969" className="mt-1 shrink-0" />
                        <div className="flex flex-col">
                            <p className="font-semibold">Fix Client Creation Error</p>
                            <p className="text-[#9FA1A6] text-sm">Fixed an error when creating a client without address.</p>
                        </div>
                    </div>
                </div>
                <Separator className=" w-full" />
                <div className="flex flex-col gap-y-4 p-2 rounded-md">
                    <div className="flex flex-row items-start gap-x-2">
                        <CircleAlert color="#f26969" className="mt-1 shrink-0" />
                        <div className="flex flex-col">
                            <p className="font-semibold">Fix Client Creation Error</p>
                            <p className="text-[#9FA1A6] text-sm">Fixed an error when creating a client without address.</p>
                        </div>
                    </div>
                </div>
                <Separator className=" w-full" />
                <div className="flex flex-col gap-y-4 p-2 rounded-md">
                    <div className="flex flex-row items-start gap-x-2">
                        <CircleAlert color="#f26969" className="mt-1 shrink-0" />
                        <div className="flex flex-col">
                            <p className="font-semibold">Fix Client Creation Error</p>
                            <p className="text-[#9FA1A6] text-sm">Fixed an error when creating a client without address.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}