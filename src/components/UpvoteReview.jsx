import { useState } from "react";
import { patchReviewVotes } from "../utils/api";
import { UpvoteButton } from "./styled/Lib";

const Upvote = ({ review }) => {
  const [votesAdded, setVotesAdded] = useState(0);
  const [clicked, setClicked] = useState(false);

  function upvote() {
    setVotesAdded((added) => added + 1);
    setClicked(true);
    patchReviewVotes(review.review_id).catch(() => {
      setVotesAdded((added) => added - 1);
      setClicked(false);
    });
  }

  return (
    <div>
      <span>
        {`This Review has ${review.votes + votesAdded} Vote(s) `}
        <UpvoteButton disabled={clicked} onClick={upvote}>
          Vote +1
        </UpvoteButton>
      </span>
    </div>
  );
};

export default Upvote;
