'use client';

import { createProjectSchema } from "@/types/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createProject } from "@/actions/projects/create-project";
import { toast } from "sonner";

export const CreateProjectForm = () => {
    const form = useForm<z.infer<typeof createProjectSchema>>({
        resolver: zodResolver(createProjectSchema),
        defaultValues: {
            name: "",
            description: "",
        },
    })

    async function onSubmit(data: z.infer<typeof createProjectSchema>) {
        const response = await createProject(data);

        if (!response.success) {
            return toast.error("Error creating project");
        }

        toast.success("Project created successfully");
    }

    return (
        <section className="flex flex-col  gap-y-8">
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
                    <Button className="w-full text-base py-5" type="submit">Create</Button>
                </form>
            </Form>

        </section>
    )
}