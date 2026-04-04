import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			image: z.string(),
			author: z.string(),
			tags: z.array(z.string())
		})
})

const changelog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/changelog' }),
	schema: () =>
		z.object({
			title: z.string(),
			date: z.string(),
			image: z.string().optional()
		})
})

const podcast = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/podcast' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			youtubeId: z.string(),
		})
})

export const collections = {
	blog,
	changelog,
	podcast
}
