import { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { postComment } from "../utils/api";
import styled from "styled-components";

const CommentInput = styled.input`
  width: 70%;
  padding: 0.5em;
  margin: 0.75em 0;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  :focus {
    outline: none;
  }
`;

const CommentButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.25em 1em;
  margin-left: 0.75em;
  font-size: 1em;
  font-family: "Raleway", sans-serif;
`;

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
        <CommentInput
          id="new-comment"
          onChange={(event) => setNewComment(event.target.value)}
          value={newComment}
        ></CommentInput>
        <CommentButton type="submit">Post</CommentButton>
        {err && <p>{err}</p>}
      </form>
    </div>
  );
};

export default CommentBox;
