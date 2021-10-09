import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const StyledContainer = styled.div`
    height: 71px;
    background-color: #577BA8;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-size: 20px;
    gap: 10px;
    max-width: 1440px;
`

const StyledImage = styled.img`
    height: 59px;
`

const StyledTitle = styled.p`
    font-weight: 600;
`

const StyledCopyRight = styled.p`
    font-weight: 400;
    font-size: 15px;
`

export default function Footer() {
    return (
        <StyledContainer>
            <StyledImage src={logo} alt="logo" />
            <StyledTitle>
                Workab
            </StyledTitle>
            <StyledCopyRight>
            Copyright © 2021-2022 Bridgestone. All rights reserved.
            </StyledCopyRight>
        </StyledContainer>
    )
}
