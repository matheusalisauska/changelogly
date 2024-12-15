import { Section } from "@/components/Section";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <main className="flex flex-col gap-y-8 mt-8">
            <Section className="flex flex-col gap-y-4">
                <div className="flex items-center gap-x-4">
                    <Skeleton className="size-8" />
                    <Skeleton className="h-6 w-36" />
                </div>
                <div className="flex flex-col gap-y-1">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-full" />
                </div>
                <div className="flex gap-x-2">
                    <Skeleton className="h-6 w-14" />
                    <Skeleton className="h-6 w-14" />
                    <Skeleton className="h-6 w-14" />
                </div>
                <div className="flex flex-col gap-y-2 mt-4">
                    <Skeleton className="h-5 w-16" />
                    <div className="flex">
                        <Skeleton className="size-9 rounded-full" />
                        <Skeleton className="size-9 rounded-full -ml-2" />
                        <Skeleton className="size-9 rounded-full -ml-2" />
                        <Skeleton className="size-9 rounded-full -ml-2" />
                    </div>
                </div>
            </Section>
        </main>
    )
}