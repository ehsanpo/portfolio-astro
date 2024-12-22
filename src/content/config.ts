import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      status: z.string(),
      permalink: z.string(),
      author: z.string(),
      type: z.string(),
      id: z.number(),
      agancy: z.string(),
      category: z.array(z.string()),
      tag: z.array(z.string()),
      case_link_url: z.array(z.string()),
      client: z.array(z.string()),
      tagline: z.array(z.string()),
      background_image: z.array(z.string()),
      logo: z.array(image()),
      bilder: z.array(image()).optional(),
      port_date: z.array(z.string()),
      onHome: z.boolean().optional(),
    }),
});

export const collections = {
  portfolio,
};
