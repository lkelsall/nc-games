import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews, getSingleReview, getComments } from "../utils/api";

const Reviews = () => {
  const { category_slug } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(category_slug)
      .then((reviews) => {
        return Promise.all(
          reviews.map((review) => {
            return getSingleReview(review.review_id);
          })
        );
      })
      .then((reviews) => {
        const commentReqs = reviews.map((review) => {
          return getComments(review.review_id);
        });
        return Promise.all([...commentReqs, reviews]);
      })
      .then((comments) => {
        // combine the reviews and comments objects (using their indices?) and setReviews to that
        setReviews(comments.pop());
      });
  }, [category_slug]);

  return (
    <div className="Reviews">
      {category_slug ? <h2>{category_slug}</h2> : null}
      <ul>
        {reviews.map((review) => {
          return <li key={review.review_id}>{review.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Reviews;
