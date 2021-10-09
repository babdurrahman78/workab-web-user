import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: auto;
  height: 71px;
  background-color: #577ba8;
  box-sizing: border-box;
`;

const StyledImg = styled.img`
  width: 77px;
  height: 48px;
  display: block;
  margin: 10.64px 0 12px 34px;
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  font-size: 20px;
  list-style: none;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #ffffff;
  }
`;

const StyledButton = styled.div`
  width: 140px;
  height: 40px;
  background-color: #79aaf3;
  margin: 17px 24px 0 0;
  border-radius: 10px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledParagraph = styled.p`
  font-size: 20px;
  line-height: 35px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
`

export default function Navbar() {
  return (
      <NavbarContainer>
        <StyledImg src={logo} />
        <StyledList>
          <StyledListItem>
            <StyledLink to="/">Home</StyledLink>
          </StyledListItem>
          <StyledListItem>Fitur</StyledListItem>
          <StyledListItem>Mobile</StyledListItem>
          <StyledListItem>Kemitraan</StyledListItem>
          <StyledListItem>Biaya</StyledListItem>
        </StyledList>
        <StyledButton>
          <StyledParagraph>
            <StyledLink to="/login">Login</StyledLink>
          </StyledParagraph>
        </StyledButton>
      </NavbarContainer>
  );
}
