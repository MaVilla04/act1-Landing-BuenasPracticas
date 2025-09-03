import { file } from 'astro/loaders';
import {z, defineCollection } from 'astro:content';

const peliculas = defineCollection({
    loader: file('src/data/peliculas.json'),
    schema: z.object({
        img: z.string(),
        titulo: z.string(),
        fechaEstreno: z.string(),
        director: z.string(),
    })
})

export const collections = {peliculas}