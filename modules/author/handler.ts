import type { Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { sql } from "../../db/db.ts";

export const getAuthors = async (context: Context) => {
  const authors = await sql`
        SELECT * FROM author
    `;
  context.response.body = authors;
};
