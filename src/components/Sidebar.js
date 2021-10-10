import React from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.png";

const StyledContainer = styled.div`
    width: 188px;
    height: 100vh;
    background-color: #577BA8;
`

const StyledImg = styled.img`
  width: 116px;
  height: auto;
  display: block;
  margin: auto;
  padding-top: 20px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 100px;
  padding: 0;
`;

const StyledListItem = styled.li`
  text-transform: capitalize;
  width: 100%;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  list-style: none;
  color: #FFFFFF;
  cursor: pointer;
  border-radius: 20px 0px 0px 20px;

  &:hover {
    color: #000000;
    background-color: #FFFFFF;
  }
`;

export default function Sidebar() {
    return (
        <StyledContainer>
            <StyledImg src={logo} alt="workab-logo" />
            <StyledList>
                <StyledListItem>dashboard</StyledListItem>
                <StyledListItem>attendance</StyledListItem>
                <StyledListItem>visiting</StyledListItem>
            </StyledList>
        </StyledContainer>
    )
}
