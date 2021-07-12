import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api";

const Reviews = () => {
  const { category_slug } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews(category_slug).then((reviews) => {
      setReviews(reviews);
    });
  }, [category_slug]);
  return (
    <div className="Reviews">
      {category_slug ? <h2>{category_slug}</h2> : null}
      <ul>
        {reviews.map((review) => {
          return <li>{review.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Reviews;
