import { useState } from "react";
import { incrementReviewVotes } from "../utils/api";

const ReviewVotes = ({ review }) => {
  const [votesAdded, setVotesAdded] = useState(0);

  function upvote() {
    setVotesAdded((added) => added + 1);
    incrementReviewVotes(review.review_id).catch(() => {
      setVotesAdded((added) => added - 1);
    });
  }

  return (
    <div>
      {review.votes + votesAdded}
      <button onClick={upvote}>Upvote</button>
    </div>
  );
};

export default ReviewVotes;
