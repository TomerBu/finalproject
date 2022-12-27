import { Link } from "react-router-dom";
import { NewsItemProps } from "../../@types/types";
import { defaultImage } from "../../services/news-service";
import css from "./NewsItem.module.scss";

const NewsItem = ({ title, urlToImage, id }: NewsItemProps) => {
  return (
    <div className="w-75 shadow-lg my-5  border-light border-5 rounded  p-3 d-flex flex-column align-items-center">
      <h3 className={css.title}>{title}</h3>
      <img
        onError={({ currentTarget }) => {
          currentTarget.src = defaultImage;
          currentTarget.onerror = null; //prevent loops
        }}
        className="w-50 shadow-lg bg-white rounded card p-3"
        alt={title}
        src={urlToImage}
      />
      <Link className={css.link} to={`/news/${id}`}>
        Read More
      </Link>
    </div>
  );
};

export default NewsItem;
