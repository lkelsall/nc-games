import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview, getComments } from "../utils/api";
import UpvoteReview from "./UpvoteReview";
import UpvoteComment from "./UpvoteComment";
import DeleteComment from "./DeleteComment";
import CommentBox from "./CommentBox";
import {
  SingleReviewWrapper,
  BigReviewImage,
  ReviewText,
  CommentsSection,
  CommentsList,
  SingleComment,
  CommentAuthor,
} from "./styled/Lib";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    setErr(false);
    setLoading(true);
    Promise.all([getSingleReview(review_id), getComments(review_id)])
      .then(([review, comments]) => {
        setReview(review);
        setComments(comments);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [review_id]);

  if (err) {
    return <p>{err.message}</p>;
  }
  if (loading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  return (
    <SingleReviewWrapper>
      <BigReviewImage src={review.review_img_url} alt={review.title} />
      <ReviewText>
        <h2>{review.title}</h2>
        <p>{review.review_body}</p>
        <UpvoteReview review={review} />
      </ReviewText>
      <CommentsSection>
        <h3>Comments</h3>
        <CommentsList>
          {comments.map((comment) => {
            return (
              <SingleComment key={comment.comment_id}>
                {comment.body}
                <DeleteComment setComments={setComments} comment={comment} />
                <CommentAuthor>- {comment.author}</CommentAuthor>
                <UpvoteComment comment={comment} />
              </SingleComment>
            );
          })}
        </CommentsList>
        <CommentBox
          review_id={review_id}
          comments={comments}
          setComments={setComments}
        />
      </CommentsSection>
    </SingleReviewWrapper>
  );
};

export default SingleReview;
