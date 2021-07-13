import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../utils/api";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    getSingleReview(review_id).then((review) => {
      setReview(review);
    });
  }, [review_id]);

  return (
    <div>
      <h1>{review.title}</h1>
      <p>{review.review_body}</p>
    </div>
  );
};

export default SingleReview;
