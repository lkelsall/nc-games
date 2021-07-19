import { UpvoteButton } from "./styled/Lib";
import { patchCommentVotes } from "../utils/api";
import { useState } from "react";

const UpvoteComment = ({ comment }) => {
  const [clicked, setClicked] = useState(false);

  function upvote() {
    setClicked(true);
    patchCommentVotes(comment.comment_id).catch(() => {
      setClicked(false);
    });
  }

  return (
    <div>
      <p>
        {`${clicked ? comment.votes + 1 : comment.votes} Votes`}
        <UpvoteButton disabled={clicked} onClick={upvote}>
          +1
        </UpvoteButton>
      </p>
    </div>
  );
};

export default UpvoteComment;
