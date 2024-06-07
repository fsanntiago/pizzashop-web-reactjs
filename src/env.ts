import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['test', 'development', 'production']).default('development'),
  VITE_API_URL: z.string().url().min(1),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
