import type { Author, AuthorCreateInput } from "../types/author.ts";
import type { Post, PostCreateInput } from "../types/post.ts";
import { sql } from "./db.ts";
import { faker } from "https://esm.sh/@faker-js/faker@9.0.3";

// Create Author table
await sql`
    CREATE TABLE IF NOT EXISTS author (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        age INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

// Create post table
await sql`
    CREATE TABLE IF NOT EXISTS post (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        slug TEXT NOT NULL,
        author_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (author_id) REFERENCES author (id) ON DELETE CASCADE
    );
`;

// Create fake authors
const authors: AuthorCreateInput[] = Array(4)
  .fill(null)
  .map(() => ({
    name: faker.person.fullName(),
    age: faker.number.int({ min: 10, max: 100 }),
  }));

// Insert author details into author table
const authorInsertResult: Author[] = await sql`
    INSERT INTO author ${sql(authors)} returning id,name,age,created_at`;

console.log(authorInsertResult);

// Create fake posts
const postsToCreate: PostCreateInput[] = [];
authorInsertResult.forEach((author) => {
  const posts: PostCreateInput[] = [];
  const numberOfPosts = Math.floor(Math.random() * 10) + 1;
  for (let i = 0; i < numberOfPosts; i++) {
    posts.push({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
      author_id: author.id,
      slug: faker.lorem.slug(),
    });
  }
  postsToCreate.push(...posts);
});

// Insert post details into post table
const postInsertResult: Pick<Post, "id">[] = await sql`
    INSERT INTO post ${sql(postsToCreate)} returning id, slug`;

console.log(postInsertResult);

self.close();
