import { useState } from "react";
import { patchReviewVotes } from "../utils/api";
import { UpvoteButton } from "./styled/Lib";

const Upvote = ({ review }) => {
  const [clicked, setClicked] = useState(false);

  function upvote() {
    setClicked(true);
    patchReviewVotes(review.review_id).catch(() => {
      setClicked(false);
    });
  }

  return (
    <div>
      <span>
        {`This Review has ${
          clicked ? review.votes + 1 : review.votes
        } Vote(s) `}
        <UpvoteButton disabled={clicked} onClick={upvote}>
          Vote +1
        </UpvoteButton>
      </span>
    </div>
  );
};

export default Upvote;
