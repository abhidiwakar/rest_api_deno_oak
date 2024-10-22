import type { Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";

export const noRouteFound = async (
  context: Context,
  next: () => Promise<unknown>
) => {
  await next();
  if (context.response.status === 404) {
    context.response.status = 404;
    context.response.body = { error: "Route not found" };
    context.response.type = "application/json";
  }
};
