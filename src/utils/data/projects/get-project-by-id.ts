import 'server-only';
import { env } from '@/lib/env';

export type Project = {
  id: string;
  name: string;
  description: string;
  tags: string[];
};

export async function getProjectsById(
  id: string
): Promise<{ success: boolean; data?: Project; error?: string }> {
  try {
    const result = await fetch(`${env.API_URL}/projects/${id}`, {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!result.ok) {
      return {
        success: false,
        error: `Error fetching project: ${result.status} ${result.statusText}`,
      };
    }

    const data = await result.json();
    return { success: true, data };
  } catch (error) {
    console.error('API Error:', error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
