import postgres from "https://deno.land/x/postgresjs@v3.4.4/mod.js";
import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

const envVars = await load();

export const DB_NAME = envVars.DATABASE_NAME;
export const DB_USERNAME = envVars.DATABASE_USER;
export const DB_PORT = Number(envVars.DATABASE_PORT);
export const DB_HOST = envVars.DATABASE_HOST;
export const DB_PASS = envVars.DATABASE_PASS;

export const sql = postgres({
  user: DB_USERNAME,
  port: DB_PORT,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASS,
});
