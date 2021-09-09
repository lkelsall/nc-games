import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api";
import {
  ReviewsWrapper,
  Card,
  Dropdown,
  CategoryHeading,
  LoadingText,
} from "./styled/Lib";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const { category_slug } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("DESC");
  const [err, setErr] = useState(false);

  useEffect(() => {
    setErr(false);
    setLoading(true);
    getReviews(category_slug, sortBy, sortOrder)
      .then((reviews) => {
        setReviews(reviews);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [category_slug, sortBy, sortOrder]);

  if (err) {
    return <p>{err.message}</p>;
  }
  if (loading) return <LoadingText>Loading...</LoadingText>;
  return (
    <ReviewsWrapper>
      <Card>
        <CategoryHeading>
          {category_slug
            ? category_slug[0].toUpperCase() + category_slug.slice(1)
            : "All Categories"}
          <Dropdown
            name="sort-by"
            value={sortBy}
            onChange={(event) => {
              setSortBy(event.target.value);
            }}
          >
            <option value="created_at">Date Created</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </Dropdown>
          <Dropdown
            name="sort-order"
            value={sortOrder}
            onChange={(event) => {
              setSortOrder(event.target.value);
            }}
          >
            <option value="DESC">Desc</option>
            <option value="ASC">Asc</option>
          </Dropdown>
        </CategoryHeading>
      </Card>
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </ReviewsWrapper>
  );
};

export default Reviews;
