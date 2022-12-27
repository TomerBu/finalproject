import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleFavorite } from "../../features/news/newsSlice";
import css from "./NewsDetailsView.module.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const NewsDetailsView = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const navigate = useNavigate();

  const article = useAppSelector((state) =>
    state.news.articles.find((a) => a.id === id)
  );

  if (!article) {
    //user messed with the url: send him/her back to news
    return <Navigate to="/news" />;
  }

  const { title, description, urlToImage, isFavorite } = article;

  //if we got thus far: article is not undefined
  return (
    <div className="w-75 mx-auto d-flex flex-column justify-content-center align-items-center">
      <h3>{title}</h3>

      <button
        className="btn"
        onClick={() => dispatch(toggleFavorite(article.id))}
      >
        {isFavorite && <FaHeart />}
        {!isFavorite && <FaRegHeart />}
      </button>

      <img
        className="w-100 shadow-lg p-3 bg-white rounded"
        src={urlToImage}
        alt={title}
      />
      <p className={css.p}>{description}</p>
      <button
        className="btn btn-primary w-100"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default NewsDetailsView;
