import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleReview } from "../utils/api";
import {
  ReviewCardWrapper,
  ReviewTitle,
  ReviewImage,
  ReviewBody,
} from "./styled/Lib";

const ReviewCard = ({ review_id }) => {
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getSingleReview(review_id).then((review) => {
      setReview(review);
      setLoading(false);
    });
  }, [review_id]);

  if (loading) return <div></div>;
  return (
    <ReviewCardWrapper>
      <ReviewTitle>{review.title}</ReviewTitle>
      <ReviewImage src={review.review_img_url} alt={review.title} />
      <ReviewBody>
        {review.review_body.slice(0, 121) + "... "}
        <Link to={`/reviews/id/${review.review_id}`}>more {">>"}</Link>
      </ReviewBody>
    </ReviewCardWrapper>
  );
};

export default ReviewCard;
