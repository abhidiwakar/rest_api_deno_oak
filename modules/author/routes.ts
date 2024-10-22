import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { getAuthors } from "./handler.ts";

export const authorRouter = new Router();

authorRouter.get("/", getAuthors);
