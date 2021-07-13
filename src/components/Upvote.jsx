import { useState } from "react";
import { patchReviewVotes } from "../utils/api";

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
      {review.votes + votesAdded}
      <button disabled={clicked} onClick={upvote}>
        Upvote
      </button>
    </div>
  );
};

export default Upvote;
