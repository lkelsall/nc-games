import { useContext } from "react";
import { UserContext } from "../contexts/user";
import { HeaderWrapper, UserText, PageTitle } from "./styled/Lib";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <HeaderWrapper>
      <PageTitle to="/">NC Games</PageTitle>
      <UserText>{user}</UserText>
    </HeaderWrapper>
  );
};

export default Header;
