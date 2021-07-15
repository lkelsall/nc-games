import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api";
import { MainWrapper } from "./styled/Lib";
import ReviewCard from "./ReviewCard";
import styled from "styled-components";

const Card = styled.div`
  background-color: #f2f2f2;
  margin: 2%;
  border-left: 2px solid gold;
  padding: 0 1em;
`;

const Dropdown = styled.select`
  margin: 0.5em;
`;

const Reviews = () => {
  const { category_slug } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("DESC");

  useEffect(() => {
    setLoading(true);
    getReviews(category_slug, sortBy, sortOrder).then((reviews) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, [category_slug, sortBy, sortOrder]);

  if (loading) return <div></div>;
  return (
    <MainWrapper>
      {category_slug ? (
        <Card>
          <h3>
            {category_slug[0].toUpperCase() + category_slug.slice(1)}
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
          </h3>
        </Card>
      ) : null}
      {reviews.map((review) => {
        return (
          <ReviewCard key={review.review_id} review_id={review.review_id} />
        );
      })}
    </MainWrapper>
  );
};

export default Reviews;
