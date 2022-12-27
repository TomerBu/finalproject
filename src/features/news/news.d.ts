export type Article = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
  id:string;
};

export type Articles = {
    loading: boolean;
    error: string;
    articles: Article[]
}