import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content min-content auto min-content;
  grid-template-areas: "header" "nav" "main" "footer";
  min-height: 100vh;
`;

export const TextInput = styled.input`
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

const Button = styled.button`
  border: ${(props) => (props.disabled ? "1px solid grey" : "1px solid black")};
  border-radius: 5px;
  font-size: 1em;
  font-family: "Raleway", sans-serif;
`;

export const PostButton = styled(Button)`
  padding: 0.25em 1em;
  margin-left: 0.75em;
`;

export const UpvoteButton = styled(Button)`
  padding: 0.5em 1em;
  margin-left: 2em;
  margin-bottom: 0.75em;
`;

export const Dropdown = styled.select`
  font-family: "Raleway", sans-serif;
  font-size: 8pt;
  margin-left: 0.75em;
  border: none;
  background-color: #f2f2f2;
`;

export const Card = styled.div`
  background-color: #f2f2f2;
  margin: 0.5em;
  border-left: 2px solid gold;
  padding: 0.5px 1em;
`;

// styled components used in Header
export const HeaderWrapper = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: max-content auto max-content;
  grid-template-rows: 100%;
  grid-template-areas: "page-title . user-detail";
  padding: 5%;
  background-color: #288046;
`;

export const PageTitle = styled(Link)`
  grid-area: page-title;
  font-family: "Otomanopee One", sans-serif;
  font-size: 200%;
  :link {
    color: white;
    text-decoration: none;
  }
  :visited {
    color: white;
    text-decoration: none;
  }
`;

export const UserText = styled.span`
  grid-area: user-detail;
  font-size: 80%;
  color: white;
`;

// styled components used in Nav
export const NavWrapper = styled.nav`
  grid-area: nav;
  padding: 3.5% 2%;
  border-top: 2px solid gold;
  background-color: #288046;
`;

export const HorizontalScroll = styled.div`
  overflow: auto;
  white-space: nowrap;
`;

export const CategoryLink = styled(Link)`
  padding: 0 0.5em;
  :link {
    color: white;
    text-decoration: none;
  }
  :visited {
    color: white;
    text-decoration: none;
  }
`;

// styled components used in Reviews
export const ReviewsWrapper = styled.main`
  grid-area: main;
`;

export const CategoryHeading = styled.h4`
  font-size: 12pt;
`;

// styled components used in ReviewCard
export const ReviewCardWrapper = styled.article`
  background-color: #f2f2f2;
  margin: 0.5em;
  border-left: 2px solid gold;
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: max-content auto;
  grid-template-areas: "title title" "image body";
`;

export const ReviewTitle = styled.h2`
  grid-area: title;
  font-size: 1.25em;
  padding: 0.25em 1em;
`;

export const ReviewImage = styled.img`
  grid-area: image;
  height: 10em;
  width: 10em;
  margin-left: 1em;
  margin-bottom: 1em;
  margin-right: 0.5em;
`;

export const ReviewBody = styled.p`
  grid-area: body;
  margin: 0 0.5em;
`;

// styled components used in SingleReview
export const SingleReviewWrapper = styled.article`
  grid-area: main;
  display: grid;
  grid-template-areas: "image" "review" "comments";
  grid-template-rows: max-content min-content auto;
  grid-template-columns: 100%;
`;

export const BigReviewImage = styled.img`
  grid-area: image;
  width: 90%;
  height: 20em;
  padding: 2.75%;
  background-color: #f2f2f2;
  margin: 2%;
  border-left: 2px solid gold;
`;

export const ReviewText = styled.section`
  grid-area: review;
  background-color: #f2f2f2;
  margin: 2%;
  border-left: 2px solid gold;
  padding: 0.25em 1em;
`;

export const CommentsSection = styled.section`
  grid-area: comments;
  background-color: #f2f2f2;
  margin: 2%;
  border-left: 2px solid gold;
  padding: 0.25em 1em;
`;

export const CommentsList = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const SingleComment = styled.li`
  padding: 0;
`;

export const CommentAuthor = styled.p`
  margin: 0.5em 0 1em; 0;
  padding: 0;
  text-align: right;
  font-style: italic;
`;
