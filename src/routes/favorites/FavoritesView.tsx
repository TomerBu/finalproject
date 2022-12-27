import { useAppSelector } from "../../app/hooks";
import NewsItem from "../news/NewsItem";

const FavoritesView = () => {
  const { articles } = useAppSelector((state) => state.news);
  const favoriteArticles = articles.filter((a) => a.isFavorite);
  return (
    <div>
      <h2 className="text-center">Favorites: </h2>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {favoriteArticles.map((a) => (
          <NewsItem key={a.url} {...a} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesView;
