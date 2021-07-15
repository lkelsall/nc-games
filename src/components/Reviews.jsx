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
  padding: 0.5px 1em;
`;

const Dropdown = styled.select`
  font-size: 1em;
  font-family: "Raleway", sans-serif;
  font-size: 0.75em;
  margin-left: 0.75em;
  border: none;
  background-color: #f2f2f2;
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
      <Card>
        <h3>
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
        </h3>
      </Card>
      {reviews.map((review) => {
        return (
          <ReviewCard key={review.review_id} review_id={review.review_id} />
        );
      })}
    </MainWrapper>
  );
};

export default Reviews;
