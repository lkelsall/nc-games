import { deleteComment } from "../utils/api";
import { UserContext } from "../contexts/user";
import { useContext } from "react";
import styled from "styled-components";

const DeleteText = styled.span`
  color: blue;
  margin-left: 0.5em;
`;

const DeleteComment = ({ comment, setComments }) => {
  const { user } = useContext(UserContext);
  function removeComment() {
    setComments((currComments) => {
      const newComments = [...currComments];
      return newComments.filter(
        (item) => item.comment_id !== comment.comment_id
      );
    });
    deleteComment(comment.comment_id).then(() => {});
  }

  return (
    user === comment.author && (
      <DeleteText onClick={removeComment}>delete</DeleteText>
    )
  );
};

export default DeleteComment;
