import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviews, getSingleReview, getComments } from "../utils/api";
import Expandable from "./Expandable";
import ReviewVotes from "./ReviewVotes";

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
        const reviews = comments.pop();
        reviews.forEach((review, i) => {
          review.comments = comments[i];
        });
        setReviews(reviews);
      });
  }, [category_slug]);

  return (
    <div className="Reviews">
      {category_slug ? <h2>{category_slug}</h2> : null}
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <h4>{review.title} </h4>
              <p>{review.review_body}</p>
              <ReviewVotes review={review} />
              <h5>Comments</h5>
              <Expandable>
                {review.comments.map((comment) => {
                  return <p key={comment.comment_id}>{comment.body}</p>;
                })}
              </Expandable>
              <Link to={`/reviews/id/${review.review_id}`}>
                <h5>Review Page</h5>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
