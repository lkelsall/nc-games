import styled from "styled-components";

const StyledFooter = styled.footer`
  grid-area: footer;
  height: 2em;
  background-color: #288046;
  border-top: 2px solid gold;
  margin-top: 1.5em;
`;

const Footer = () => {
  return <StyledFooter />;
};

export default Footer;
