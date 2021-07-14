import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api";
import { MainWrapper } from "./styled/Lib";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const { category_slug } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getReviews(category_slug).then((reviews) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, [category_slug]);

  if (loading) return <div></div>;
  return (
    <MainWrapper>
      {reviews.map((review) => {
        return (
          <ReviewCard key={review.review_id} review_id={review.review_id} />
        );
      })}
    </MainWrapper>
  );
};

export default Reviews;
