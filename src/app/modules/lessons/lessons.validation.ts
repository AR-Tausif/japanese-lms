import { z } from "zod";

const lessonSchema = z.object({
  body: z.object({
    name:z.string(),
    lessonNumber: z.string()
    }),
});
const updateLessonSchema = z.object({
  body: z.object({
    name:z.string().optional(),
    lessonNumber: z.string().optional()
    
  }),
})

export const lessonValidations = {
  lessonSchema,
  updateLessonSchema
};
