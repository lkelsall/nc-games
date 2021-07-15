import { useState } from "react";
import { patchReviewVotes } from "../utils/api";
import styled from "styled-components";

const UpvoteWrapper = styled.div`
  margin-bottom: 1em;
`;

const UpvoteButton = styled.button`
  border: ${(props) => (props.disabled ? "1px solid grey" : "1px solid black")};
  border-radius: 5px;
  padding: 0.5em 1em;
  margin-left: 2em;
  font-size: 1em;
  font-family: "Raleway", sans-serif;
`;

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
    <UpvoteWrapper>
      <span>
        {`This Review has ${review.votes + votesAdded} Vote(s) `}{" "}
        <UpvoteButton disabled={clicked} onClick={upvote}>
          Vote +1
        </UpvoteButton>
      </span>
    </UpvoteWrapper>
  );
};

export default Upvote;
