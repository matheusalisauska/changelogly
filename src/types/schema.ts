import z from 'zod';

export const createProjectSchema = z.object({
  name: z.string().min(1, { message: 'Project Name is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  tags: z
    .array(z.object({ label: z.string(), value: z.string() }))
    .min(1, 'At least one tag is required'),
});
