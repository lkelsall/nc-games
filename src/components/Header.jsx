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
  background-color: #288046;
`;

const PageTitle = styled(Link)`
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

const UserDetail = styled.span`
  grid-area: user-detail;
  font-size: 80%;
  color: white;
`;

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <HeaderWrapper>
      <PageTitle to="/">NC Games</PageTitle>
      <UserDetail>{user}</UserDetail>
    </HeaderWrapper>
  );
};

export default Header;
