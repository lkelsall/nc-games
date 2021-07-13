import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview, getComments } from "../utils/api";
import Upvote from "./Upvote";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Promise.all([getSingleReview(review_id), getComments(review_id)]).then(
      ([review, comments]) => {
        setReview(review);
        setComments(comments);
      }
    );
  }, [review_id]);

  return (
    <div>
      <h1>{review.title}</h1>
      <p>{review.review_body}</p>
      <Upvote review={review} />
      <h4>Comments</h4>
      <ul>
        {comments.map((comment) => {
          return <li key={comment.comment_id}>{comment.body}</li>;
        })}
      </ul>
    </div>
  );
};

export default SingleReview;
