import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { getPosts } from "./handler.ts";

export const postRouter = new Router();

postRouter.get("/", getPosts);
