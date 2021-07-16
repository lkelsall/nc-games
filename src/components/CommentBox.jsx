import { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { postComment } from "../utils/api";
import * as S from "./styled/Lib";

const CommentBox = ({ review_id, comments, setComments }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);

  return (
    <div>
      New Comment:
      <form
        onSubmit={(event) => {
          event.preventDefault();
          postComment(review_id, user, newComment)
            .then((comment) => {
              setNewComment("");
              setErr(null);
              setComments((currentComments) => {
                return [...currentComments, comment];
              });
            })
            .catch(() => {
              setErr("something went wrong");
            });
        }}
      >
        <label htmlFor="new-comment"></label>
        <S.CommentInput
          id="new-comment"
          onChange={(event) => setNewComment(event.target.value)}
          value={newComment}
        ></S.CommentInput>
        <S.CommentButton type="submit">Post</S.CommentButton>
        {err && <p>{err}</p>}
      </form>
    </div>
  );
};

export default CommentBox;
