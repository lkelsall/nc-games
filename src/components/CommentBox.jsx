import { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { postComment } from "../utils/api";

const CommentBox = ({ review }) => {
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
              // review.comments.push(comment);
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
