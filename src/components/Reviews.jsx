import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviews, getSingleReview, getComments } from "../utils/api";
import CommentBox from "./CommentBox";
import Expandable from "./Expandable";
import Upvote from "./Upvote";
import styled from "styled-components";
import { MainWrapper } from "./styled/Lib";

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
    <MainWrapper>
      {category_slug ? <h2>{category_slug}</h2> : null}
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <h4>{review.title} </h4>
              <p>{review.review_body}</p>
              <Upvote review={review} />
              <h5>Comments</h5>
              <Expandable>
                {review.comments.map((comment) => {
                  return <p key={comment.comment_id}>{comment.body}</p>;
                })}
                <CommentBox review={review} setReviews={setReviews} />
              </Expandable>
              <Link to={`/reviews/id/${review.review_id}`}>
                <h5>Review Page</h5>
              </Link>
            </li>
          );
        })}
      </ul>
    </MainWrapper>
  );
};

export default Reviews;
