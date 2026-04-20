/* Date: 4/20/2026 | Developer: Yahia Saad | License: First Stand Studio. All rights reserved. */
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const devlogs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/devlogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    project: z.string().optional()
  })
});

export const collections = { devlogs };
