import { useState } from "react";
import { patchReviewVotes } from "../utils/api";
import styled from "styled-components";
import * as S from "./styled/Lib";

const UpvoteWrapper = styled.div`
  margin-bottom: 1em;
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
        <S.UpvoteButton disabled={clicked} onClick={upvote}>
          Vote +1
        </S.UpvoteButton>
      </span>
    </UpvoteWrapper>
  );
};

export default Upvote;
