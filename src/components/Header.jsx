import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/user";

const HeaderWrapper = styled.div`
  grid-area: header;
  display: grid;
  grid-template-columns: max-content auto max-content;
  grid-template-rows: 100%;
  grid-template-areas: "page-title . user-detail";
  padding: 5%;
`;

const PageTitle = styled.h1`
  grid-area: page-title;
  display: inline;
`;

const UserDetail = styled.span`
  grid-area: user-detail;
`;

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <HeaderWrapper>
      <Link to="/">
        <PageTitle>NC Games</PageTitle>
      </Link>
      <UserDetail>{user}</UserDetail>
    </HeaderWrapper>
  );
};

export default Header;
