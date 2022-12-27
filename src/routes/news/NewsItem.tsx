import { Link } from "react-router-dom";
import { NewsItemProps } from "../../@types/types";

const NewsItem = ({ title, urlToImage }: NewsItemProps) => {
  return (
    <div className="w-75 shadow-lg my-5  border-light border-5 rounded card p-3">
      <h3>{title}</h3>
      <img alt={title} src={urlToImage} />
      <Link to={`/news/${title}`}>Read More</Link>
    </div>
  );
};

export default NewsItem;
