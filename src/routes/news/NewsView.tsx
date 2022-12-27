import {useAppSelector } from "../../app/hooks";
import NewsItem from "./NewsItem";
const NewsView = () => {
 
  const { articles, error, loading } = useAppSelector((state) => state.news);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {articles.length > 0 && <h2 className="text-center">News: </h2>}
      {articles.length > 0 && (
        <div className="d-flex flex-column justify-content-center align-items-center">
          {articles.map((a) => (
            <NewsItem key={a.url} {...a} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsView;
