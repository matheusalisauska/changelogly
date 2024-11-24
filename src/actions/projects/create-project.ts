'use server';

import { env } from '@/lib/env';
import { createProjectSchema } from '@/types/schema';
import z from 'zod';

type CreateProject = z.infer<typeof createProjectSchema>;

export async function createProject(data: CreateProject) {
  try {
    const result = createProjectSchema.safeParse(data);

    if (!result.success) {
      return {
        error: result.error.errors,
      };
    }

    await fetch(`${env.API_URL}/projects`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return 'success';
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}
