import { useParams } from "react-router-dom";

const Reviews = () => {
  const { category_slug } = useParams();
  return (
    <div className="Reviews">
      {category_slug ? <h2>{category_slug}</h2> : null}
      <ul>
        <li>Review</li>
        <li>Review</li>
        <li>Review</li>
      </ul>
    </div>
  );
};

export default Reviews;
