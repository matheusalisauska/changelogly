'use server';

import { env } from '@/lib/env';
import { createProjectSchema } from '@/types/schema';
import z from 'zod';

type CreateProject = z.infer<typeof createProjectSchema>;

type CreateProjectResponse =
  | { success: true }
  | { success: false; error: string | z.ZodError['errors'] };

export async function createProject(
  data: CreateProject
): Promise<CreateProjectResponse> {
  try {
    const result = createProjectSchema.safeParse(data);

    if (!result.success) {
      return {
        success: false,
        error: result.error.errors,
      };
    }

    const response = await fetch(`${env.API_URL}/projects`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorMessage = `Erro: ${response.status} - ${response.statusText}`;
      return {
        success: false,
        error: errorMessage,
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
    };
  }
}
