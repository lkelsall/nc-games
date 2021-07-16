import { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { postComment } from "../utils/api";
import { TextInput, PostButton } from "./styled/Lib";

const CommentBox = ({ review_id, comments, setComments }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);

  return (
    <div>
      <span>New Comment:</span>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setErr(null);
          if (newComment.length > 0) {
            postComment(review_id, user, newComment)
              .then((comment) => {
                setNewComment("");
                setComments((currentComments) => {
                  return [...currentComments, comment];
                });
              })
              .catch(() => {
                setErr("something went wrong");
              });
          } else {
            setErr("new comments must not be blank");
          }
        }}
      >
        <label htmlFor="new-comment"></label>
        <TextInput
          id="new-comment"
          onChange={(event) => setNewComment(event.target.value)}
          value={newComment}
        ></TextInput>
        <PostButton type="submit">Post</PostButton>
        {err && <p>{err}</p>}
      </form>
    </div>
  );
};

export default CommentBox;
