import { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { postComment } from "../utils/api";

const CommentBox = ({ review, setReviews }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);

  return (
    <div>
      New Comment:
      <form
        onSubmit={(event) => {
          event.preventDefault();
          postComment(review.review_id, user, newComment)
            .then((comment) => {
              setNewComment("");
              setErr(null);
              setReviews((currentReviews) => {
                const updatedReviews = [...currentReviews];
                updatedReviews.forEach((gameReview, i) => {
                  if (gameReview.review_id === review.review_id) {
                    updatedReviews[i].comments = [
                      ...updatedReviews[i].comments,
                      comment,
                    ];
                  }
                });
                return updatedReviews;
              });
            })
            .catch(() => {
              setErr("something went wrong");
            });
        }}
      >
        <label htmlFor="new-comment"></label>
        <input
          id="new-comment"
          onChange={(event) => setNewComment(event.target.value)}
          value={newComment}
        ></input>
        <button type="submit">Post Comment</button>
        {err && <p>{err}</p>}
      </form>
    </div>
  );
};

export default CommentBox;
