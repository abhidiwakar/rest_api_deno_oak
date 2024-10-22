export type Author = {
  id: number;
  name: string;
  age?: number;
  created_at: Date;
};

export type AuthorCreateInput = Omit<Author, "id" | "created_at">;
