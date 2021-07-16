import styled from "styled-components";

export const MainWrapper = styled.div`
  grid-area: main;
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content min-content auto min-content;
  grid-template-areas: "header" "nav" "main" "footer";
  min-height: 100vh;
`;

export const CommentInput = styled.input`
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

export const CommentButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.25em 1em;
  margin-left: 0.75em;
  font-size: 1em;
  font-family: "Raleway", sans-serif;
`;

export const UpvoteButton = styled.button`
  border: ${(props) => (props.disabled ? "1px solid grey" : "1px solid black")};
  border-radius: 5px;
  padding: 0.5em 1em;
  margin-left: 2em;
  font-size: 1em;
  font-family: "Raleway", sans-serif;
`;
