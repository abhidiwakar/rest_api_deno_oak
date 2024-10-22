export type Post = {
  id: number;
  title: string;
  content: string;
  slug: string;
  author_id: number;
  created_at: Date;
};

export type PostCreateInput = Omit<Post, "id" | "created_at">;
