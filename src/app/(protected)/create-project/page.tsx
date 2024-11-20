import { CreateProjectForm } from "@/components/form/CreateProjectForm";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";


export default function CreateProjectPage() {
    return (
        <div className="flex flex-col gap-4 mt-4">
            <Link href={'/home'} className="flex items-center text-sm">
                <ChevronLeft size={20} />
                Back to home
            </Link>
            <CreateProjectForm />
        </div>
    )
}