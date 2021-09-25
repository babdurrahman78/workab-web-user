import styled from 'styled-components'
import logo from '../assets/logo.png'

const NavbarContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    background-color: #577BA8;
    box-sizing: border-box;
`

const StyledImg = styled.img`
    margin-top: 17px;
    width: 81px;
    height: 66px;
    display: block;
    margin-left: 85px;
`

const StyledList = styled.ul`
    height: 45px;
    margin: 0;
    margin-top: 30px;
    padding: 0;
`

const StyledListItem = styled.li`
    display: inline;
    font-size: 30px;
    color: #FFFFFF;
    margin-left: 90px;
    cursor: pointer;
`

const StyledButton = styled.div`
    width: 164px;
    height: 74px;
    background-color: #79AAF3;
    margin-top: 15px;
    margin-left: 50px;
    border-radius: 20px;
    cursor: pointer;
`

const StyledParagraph = styled.p`
    font-size: 30px;
    color: #FFFFFF;
    text-align: center;
    height: 100%;
    line-height: 70px;
`

export default function Navbar() {
    return (
        <NavbarContainer>
            <StyledImg src={logo} />
            <StyledList>
                <StyledListItem>Home</StyledListItem>
                <StyledListItem>Fitur</StyledListItem>
                <StyledListItem>Mobile</StyledListItem>
                <StyledListItem>Kemitraan</StyledListItem>
                <StyledListItem>Biaya</StyledListItem>
            </StyledList>
            <StyledButton>
                <StyledParagraph>
                    Login
                </StyledParagraph>
            </StyledButton>
        </NavbarContainer>
    )
}
