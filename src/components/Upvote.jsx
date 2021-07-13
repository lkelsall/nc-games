import { useState } from "react";
import { incrementReviewVotes } from "../utils/api";

const Upvote = ({ review }) => {
  const [votesAdded, setVotesAdded] = useState(0);
  const [clicked, setClicked] = useState(false);

  function upvote() {
    setVotesAdded((added) => added + 1);
    setClicked(true);
    incrementReviewVotes(review.review_id).catch(() => {
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
