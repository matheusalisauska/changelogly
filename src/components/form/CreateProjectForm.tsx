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
import { ArrowLeft } from "lucide-react";
import { Section } from "../Section";
import { useRouter } from "next/navigation";

export const CreateProjectForm = () => {
    const router = useRouter();
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
        try {
            await createProject(data);
            toast.success("Project created successfully");
        } catch (error) {
            return toast.error(`Error creating project ${error}`);
        }
        router.push('/home')
    }


    function handleTagSelect(tag: { label: string; value: string }) {
        if (!selectedTags.find((t) => t.value === tag.value)) {
            const updatedTags = [...selectedTags, tag];
            setSelectedTags(updatedTags);

            form.setValue("tags", updatedTags.map(tag => tag.value));
        }
    }

    function handleTagRemove(tagValue: string) {
        const updatedTags = selectedTags.filter((tag) => tag.value !== tagValue);
        setSelectedTags(updatedTags);

        form.setValue("tags", updatedTags.map(tag => tag.value));
    }

    return (
        <section className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-1">
                <ArrowLeft size={16} />
                <Link href='/home' className="text-sm">
                    Back to home
                </Link>
            </div>
            <Section className="gap-y-4">
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
                            {
                                form.formState.errors.tags?.message && (
                                    <FormMessage>{form.formState.errors.tags?.message}</FormMessage>
                                )
                            }
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
            </Section>
        </section>
    );
};
