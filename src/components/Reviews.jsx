import { useParams } from "react-router-dom";

const Reviews = () => {
  const { category } = useParams();
  return (
    <div className="Reviews">
      {category ? <h2>{category}</h2> : null}
      <ul>
        <li>Review</li>
        <li>Review</li>
        <li>Review</li>
      </ul>
    </div>
  );
};

export default Reviews;
