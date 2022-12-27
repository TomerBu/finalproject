import { Navigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

const NewsDetailsView = () => {
  const { id } = useParams();

  const article = useAppSelector((state) =>
    state.news.articles.find((a) => a.id === id)
  );

  if (!article) {//user messed with the url: send him/her back to news
    return <Navigate to="/news" />;
  }

  //if we got thus far: article is not undefined
  return <div>{article.title}</div>;
};

export default NewsDetailsView;
