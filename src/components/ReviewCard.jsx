import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleReview } from "../utils/api";

const ReviewCardWrapper = styled.div`
  background-color: #f2f2f2;
  margin: 0.5em;
  border-left: 2px solid gold;
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: max-content auto;
  grid-template-areas: "title title" "image body";
`;

const ReviewTitle = styled.h2`
  grid-area: title;
  font-size: 1.25em;
  padding: 0.25em 1em;
`;

const ReviewImage = styled.img`
  grid-area: image;
  height: 10em;
  width: 10em;
  margin-left: 1em;
  margin-bottom: 1em;
  margin-right: 0.5em;
  border-radius: 25px;
`;

const ReviewBody = styled.p`
  grid-area: body;
  margin: 0 0.5em;
`;

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
