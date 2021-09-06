import styled from 'styled-components'
import logo from '../assets/Vector.png'

const NavbarContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    background: red;
    box-sizing: border-box;
`

const StyledIcon = styled.i`
    margin-top: 17px;
    background: url(${logo});
    width: 81px;
    height: 66px;
    display: block;
    margin-left: 85px;
`

const StyledList = styled.ul`
    height: 45px;
    margin: 0;
    margin-top: 30px;
    margin-left: 239px;
    padding: 0;
`

const StyledListItem = styled.li`
    display: inline;
    margin-right: 30px;
    font-size: 30px;
`

export default function Navbar() {
    return (
        <NavbarContainer>
            <StyledIcon />
            <StyledList>
                <StyledListItem>Home</StyledListItem>
                <StyledListItem>Absen</StyledListItem>
                <StyledListItem>Meeting</StyledListItem>
                <StyledListItem>Izin</StyledListItem>
                <StyledListItem>Gaji</StyledListItem>
            </StyledList>
        </NavbarContainer>
    )
}
