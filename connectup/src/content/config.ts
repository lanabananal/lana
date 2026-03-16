import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['en', 'pt-br', 'pl', 'es']),
    postSlug: z.string(),
    author: z.string().default('ConnectUp'),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
