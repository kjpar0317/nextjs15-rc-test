import { Hono } from "hono";
import { logger } from "hono/logger";
import { handle } from "hono/vercel";

// import { timelineRoute } from "@/routes/test";

// export const runtime = "edge";

const app = new Hono().basePath("/api");

app.use("*", logger());

// app.route("/timeline", timelineRoute);

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
