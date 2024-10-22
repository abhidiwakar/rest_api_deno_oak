import type { Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { sql } from "../../db/db.ts";

export const getPosts = async (context: Context) => {
  const posts = await sql`
        SELECT p.title, p.content, p.slug, a.name as author_name, p.created_at FROM post as p JOIN author as a ON p.author_id = a.id
    `;
  context.response.body = posts;
};
