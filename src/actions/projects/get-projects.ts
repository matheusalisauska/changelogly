'use server';

import { env } from '@/lib/env';

export type Project = {
  id: string;
  name: string;
  description: string;
  tags: string[];
};

export type GetProjectsResponse = {
  success: boolean;
  data?: Project[];
  error?: string;
};

export async function getProjects(): Promise<GetProjectsResponse> {
  try {
    const response = await fetch(`${env.API_URL}/projects`, {
      cache: 'no-cache',
      method: 'GET',
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

    const data = (await response.json()) as Project[];
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido.',
    };
  }
}
