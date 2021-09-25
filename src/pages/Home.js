import React, {  } from 'react'
import styled from 'styled-components'
import calendar from '../assets/icon/calendar.png'
import calendarTimes from '../assets/icon/calendar-times.png'
import group from '../assets/icon/group.png'
import wallet from '../assets/icon/account_balance_wallet.png'
import shield from '../assets/icon/shield.png'
import workab from '../assets/workab-bg.png'
import meeting from '../assets/meeting.png'

const StyledContainer = styled.div`
    width: 100%;
` 

const StyledParagraph = styled.p`
    color: #686868;
`

const StyledTitle = styled(StyledParagraph)`
    font-size: 70px;
    color: #686868;
    font-weight: bold;
    margin: 40px 0 0 45px;
`

const StyledDesc = styled(StyledParagraph)`
    font-size: 40px;
    margin: 0 0 0 45px;
`

const StyledConatainerIcon = styled.div`
    display: flex;
    margin: 22px 0 0 45px;
`

const StyledIcon = styled.i`
    width: 100px;
    height: 100px;
    background-size: cover;
    display: block;
    margin-right: 77px;
`

const StyledIconCalendar = styled(StyledIcon)`
     background-image: url(${calendar});
`

const StyledIconCalenderTimes = styled(StyledIcon)`
    background-image: url(${calendarTimes});
`

const StyledIconGroup = styled(StyledIcon)`
    background-image: url(${group});
`

const StyledIconWallet = styled(StyledIcon)`
    background-image: url(${wallet});
`

const StyledIconShield = styled(StyledIcon)`
    background-image: url(${shield});
`

const StyledWorkab = styled.img`
    position: absolute;
    width: 875px;
    height: 714px;
    top: 180px;
    left: 433px;
    z-index: -1;
`

const StyledButton = styled.button`
    display: block;
    width: 286px;
    height: 112px;
    background-color: #577BA8;
    border: none;
    border-radius: 15px;
    margin: 191px auto 359px;
    cursor: pointer;
`

const StyledParagraphButton = styled.p`
    font-size: 30px;
    color: #FFFFFF;
`

const StyledRow = styled.div`
    display: flex;
    height: 256px;
    margin-bottom: 10px;
`

const StyledFeatureContainer = styled.div`
    color: #000000;
    padding-left: 45px;
    flex: 1;
`

const StyledFeatureTitle = styled.p`
    font-size: 30px; 
`

const StyledFeatureDesc = styled.p`
    font-size: 20px; 
    border-top: 3px solid black;
`

const StyledFeatureImageContainer = styled.div`
    flex: 1;
`

const StyledFeatureImage = styled.img`
    display: block;
    margin: auto;
    width: 471px;
    height: 256px;
`

export default function Home() {
    return (
        <StyledContainer>
            <StyledWorkab src={workab}/>
            <StyledTitle>
                SELAMAT DATANG DI WORKAB
            </StyledTitle>
            <StyledDesc>
                Absen kantor mudah dan cepat secara online
            </StyledDesc>
            <StyledConatainerIcon>
                <StyledIconCalendar />
                <StyledIconCalenderTimes />
                <StyledIconGroup />
                <StyledIconWallet />
                <StyledIconShield />
            </StyledConatainerIcon>
            <StyledButton>
                <StyledParagraphButton>
                    Selengkapnya
                </StyledParagraphButton>
            </StyledButton>
            <StyledRow>
                <StyledFeatureContainer>
                    <StyledFeatureTitle>
                        Fitur Meeting
                    </StyledFeatureTitle>
                    <StyledFeatureDesc>
                    Workab mempunyai fitur untuk melakukan absensi via perangkat dan dapat melihat riwayat absensi via website dimanapun dan kapanpun
                    </StyledFeatureDesc>
                </StyledFeatureContainer>
                <StyledFeatureImageContainer>
                    <StyledFeatureImage src={meeting} alt="meeting" />
                </StyledFeatureImageContainer>
            </StyledRow>
            <StyledRow>
                <StyledFeatureImageContainer>
                    <StyledFeatureImage src={meeting} alt="meeting" />
                </StyledFeatureImageContainer>
                <StyledFeatureContainer>
                    <StyledFeatureTitle>
                        Fitur Meeting
                    </StyledFeatureTitle>
                    <StyledFeatureDesc>
                    Workab mempunyai fitur untuk melakukan absensi via perangkat dan dapat melihat riwayat absensi via website dimanapun dan kapanpun
                    </StyledFeatureDesc>
                </StyledFeatureContainer>
            </StyledRow>
        </StyledContainer>
    )
}
