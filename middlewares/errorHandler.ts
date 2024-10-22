import type { Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";

export async function errorHandler(
  context: Context,
  next: () => Promise<unknown>
) {
  try {
    await next();
  } catch (err: unknown) {
    console.error("Unhandled Error:", err);

    context.response.status = 500;
    context.response.body = {
      error: "An unexpected error occurred.",
    };
  }
}
