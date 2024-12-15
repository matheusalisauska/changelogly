import { cn } from "@/lib/utils";
import React from "react"

interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

export const Section = ({ children, className }: SectionProps) => {
    return (
        <section className={cn(className, 'flex flex-col p-4 bg-white shadow-sm border border-[#e2e8f0] border-opacity-60 rounded-lg')}>
            {children}
        </section>
    )
}