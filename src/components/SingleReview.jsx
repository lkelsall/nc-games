import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview, getComments } from "../utils/api";
import { MainWrapper } from "./styled/Lib";
import Upvote from "./Upvote";
import styled from "styled-components";

const SingleReviewWrapper = styled(MainWrapper)`
  display: grid;
  grid-template-areas: "image" "review" "comments";
  grid-template-rows: max-content min-content auto;
  grid-template-columns: 100%;
`;

const ReviewImage = styled.img`
  grid-area: image;
  width: 90%;
  height: 20em;
  padding: 2.75%;
  background-color: #f2f2f2;
  margin: 2%;
  border-left: 2px solid gold;
`;

const ReviewText = styled.article`
  grid-area: review;
  background-color: #f2f2f2;
  margin: 2%;
  border-left: 2px solid gold;
  padding: 0.25em 1em;
`;

const CommentsSection = styled.section`
  grid-area: comments;
  background-color: #f2f2f2;
  margin: 2%;
  border-left: 2px solid gold;
  padding: 0.25em 1em;
`;

const CommentsList = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const SingleComment = styled.li`
  padding: 0;
`;

const CommentAuthor = styled.p`
  margin: 0.5em 0 1em; 0;
  padding: 0;
  text-align: right;
  font-style: italic;
`;

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([getSingleReview(review_id), getComments(review_id)]).then(
      ([review, comments]) => {
        setReview(review);
        setComments(comments);
        setLoading(false);
      }
    );
  }, [review_id]);

  if (loading) return <div></div>;
  return (
    <SingleReviewWrapper>
      <ReviewImage src={review.review_img_url} alt={review.title} />
      <ReviewText>
        <h2>{review.title}</h2>
        <p>{review.review_body}</p>
        <Upvote review={review} />
      </ReviewText>
      <CommentsSection>
        <h3>Comments</h3>
        <CommentsList>
          {comments.map((comment) => {
            return (
              <SingleComment key={comment.comment_id}>
                {comment.body}
                <CommentAuthor>- {comment.author}</CommentAuthor>
              </SingleComment>
            );
          })}
        </CommentsList>
      </CommentsSection>
    </SingleReviewWrapper>
  );
};

export default SingleReview;
