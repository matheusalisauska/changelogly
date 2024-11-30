import 'server-only';
import { env } from '@/lib/env';

export type Project = {
  id: string;
  name: string;
  description: string;
  tags: string[];
};

export async function getProjects(): Promise<Project[]> {
  try {
    const result = await fetch(`${env.API_URL}/projects`, {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await result.json();

    return response;
  } catch (error) {
    return error;
  }
}
