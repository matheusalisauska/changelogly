import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreateChanges() {
  return (
    <main className="flex flex-col flex-1 gap-y-8 h-full px-4 sm:px-8 lg:pr-16 2xl:pr-24 w-full">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">Create Change</h1>
        <p className="text-[#666666]">
          Fill in the details to create your project change log{" "}
        </p>
      </div>
      {/* //FORM */}
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="title" className="text-sm font-semibold">
            Title
          </Label>
          <Input placeholder="Enter change log title" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="title" className="text-sm font-semibold">
            Author's
          </Label>
          <Input placeholder="Enter change log title" />
        </div>
      </div>
    </main>
  );
}
