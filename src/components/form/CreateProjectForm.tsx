'use client';

import { createProject } from "@/actions/projects/create-project";
import { createProjectSchema } from "@/types/schema";
import { ProjectTagsOptions } from "@/utils/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Combobox } from "../ui/combobox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import TagBadge from "../TagBadge";
import { useState } from "react";
import Link from "next/link";

export const CreateProjectForm = () => {
    const [selectedTags, setSelectedTags] = useState<{ label: string; value: string }[]>([]);

    const form = useForm<z.infer<typeof createProjectSchema>>({
        resolver: zodResolver(createProjectSchema),
        defaultValues: {
            name: "",
            description: "",
            tags: [],
        },
    });

    async function onSubmit(data: z.infer<typeof createProjectSchema>) {
        const tagValues = selectedTags.map((tag) => tag.value)

        const dataWithTags = {
            ...data,
            tags: tagValues,
        };

        try {
            await createProject(dataWithTags);

            toast.success("Project created successfully");
        } catch (error) {
            return toast.error(`Error creating project ${error}`);
        }
    }


    function handleTagSelect(tag: { label: string; value: string }) {
        if (!selectedTags.find((t) => t.value === tag.value)) {
            setSelectedTags((prev) => [...prev, tag]);
        }
    }

    function handleTagRemove(tagValue: string) {
        setSelectedTags((prev) => prev.filter((tag) => tag.value !== tagValue));
    }

    return (
        <section className="flex flex-col gap-y-6">
            <h1 className="font-bold text-xl">Create your Project</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Project Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter a project name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter a description" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormItem className="flex flex-col">
                        <FormLabel>Tags</FormLabel>
                        <FormControl>
                            <Combobox
                                options={ProjectTagsOptions}
                                placeholder="Select the project tags"
                                onSelect={handleTagSelect}
                                disabledOptions={selectedTags}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    {selectedTags.length > 0 && (
                        <div className="flex flex-row gap-x-2 items-center">
                            {selectedTags.map((tag) => (
                                <TagBadge
                                    key={tag.value}
                                    label={tag.label}
                                    value={tag.value}
                                    onDelete={() => handleTagRemove(tag.value)}
                                />
                            ))}
                        </div>
                    )}
                    <div className="flex flex-col gap-y-4">
                        <Button className="w-full text-base py-5" type="submit">Create</Button>
                        <Link href={'/home'}>
                            <Button className="w-full text-base py-5" variant={'outline'} type="button">
                                Back to home
                            </Button>
                        </Link>
                    </div>
                </form>
            </Form>
        </section>
    );
};
