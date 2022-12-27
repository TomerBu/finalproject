import { Article } from "../features/news/news";

import {v4} from 'uuid';
export const newsApiUrl =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=8f477e48200d4836bb9dd55e0dde859c";

export const defaultImage =
  "https://awlights.com/wp-content/uploads/sites/31/2017/05/placeholder-news.jpg";

export const fetchArticles = () =>
  fetch(newsApiUrl)
    .then((res) => res.json())
    .then((json) => json.articles as Article[])
    .then((articles) => {
      articles.forEach((a) => {
        a.urlToImage = a.urlToImage ?? defaultImage;
        a.id = v4();
      });
      return articles;
    });
