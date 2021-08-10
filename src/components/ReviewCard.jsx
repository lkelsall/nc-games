import { Link } from "react-router-dom";
import {
  ReviewCardWrapper,
  ReviewTitle,
  ReviewImage,
  ReviewBody,
} from "./styled/Lib";

const ReviewCard = ({ review }) => {
  return (
    <ReviewCardWrapper>
      <ReviewTitle>{review.title}</ReviewTitle>
      <ReviewImage src={review.review_img_url} alt={review.title} />
      <ReviewBody>
        {review.review_preview.slice(0, 75) + "... "}
        <Link to={`/reviews/id/${review.review_id}`}>more {">>"}</Link>
      </ReviewBody>
    </ReviewCardWrapper>
  );
};

export default ReviewCard;
