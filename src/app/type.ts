export type Article = {
  id: number;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

export type Comment = {
  id: number;
  body: String;
  articleId: number;
  createdAt: string;
  updatedAt: string;
  author: Author;
};

export type Author = {
  name: string;
  avatarUrl: string;
};
