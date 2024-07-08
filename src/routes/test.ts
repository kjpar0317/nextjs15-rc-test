import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const timelineSchema = z.object({
  id: z.number().int().positive().min(1).optional(),
  title: z.string(),
  cardTitle: z.string(),
  media: z.string(),
  cardDetailedText: z.string(),
});

type Timeline = z.infer<typeof timelineSchema>;

const createTimelineSchema = timelineSchema.omit({ id: true });
