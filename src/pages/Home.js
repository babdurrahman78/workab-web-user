import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import visiting from "../assets/visiting.png";
import clock from "../assets/clock.png";
import girl from "../assets/girl-laptop.png";

const StyledContainer = styled.div`
  background-color: #ffffff;
  max-width: 1440px;
  margin: auto;
  padding: 50px 87px 0 87px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const StyledParagraph = styled.p`
  color: #686868;
`;

const StyledTitle = styled(StyledParagraph)`
  font-size: 70px;
  color: #686868;
  font-weight: bold;
`;

const StyledDesc = styled(StyledParagraph)`
  font-size: 25px;
`;

const StyledButton = styled.button`
  display: block;
  width: 262px;
  height: 111px;
  margin-top: 16px;
  background-color: #577ba8;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

const StyledParagraphButton = styled.p`
  font-size: 25px;
  color: #ffffff;
`;

const StyledRow = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const StyledFeatureContainer = styled.div`
  color: #000000;
  width: 640px;
`;

const StyledFeatureTitle = styled.p`
  font-size: 30px;
`;

const StyledFeatureDesc = styled.p`
  font-size: 20px;
  font-weight: 400px;
  border-top: 3px solid black;
`;

const StyledFeatureImageContainer = styled.div`
  flex: 1;
`;

const StyledLeftImage = styled.img`
  width: 350px;
  display: block;
  margin-right: auto;
`;

const StyledRightImage = styled.img`
  width: 350px;
  display: block;
  margin-left: auto;
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <StyledContainer>
        <StyledRow>
          <StyledFeatureContainer>
            <StyledTitle>SELAMAT DATANG DI WORKAB</StyledTitle>
            <StyledDesc>Absen kantor mudah dan cepat secara online</StyledDesc>
            <StyledButton>
              <StyledParagraphButton>Selengkapnya</StyledParagraphButton>
            </StyledButton>
          </StyledFeatureContainer>
          <StyledFeatureImageContainer>
            <StyledRightImage src={girl} alt="girl" />
          </StyledFeatureImageContainer>
        </StyledRow>
        <StyledRow>
          <StyledFeatureContainer>
            <StyledFeatureTitle>Fitur Attendance</StyledFeatureTitle>
            <StyledFeatureDesc>
              Workab mempunyai fitur untuk melakukan absensi via perangkat dan
              dapat melihat riwayat absensi via website dimanapun dan kapanpun
            </StyledFeatureDesc>
          </StyledFeatureContainer>
          <StyledFeatureImageContainer>
            <StyledRightImage src={clock} alt="clock" />
          </StyledFeatureImageContainer>
        </StyledRow>
        <StyledRow>
          <StyledFeatureImageContainer>
            <StyledLeftImage src={visiting} alt="visiting" />
          </StyledFeatureImageContainer>
          <StyledFeatureContainer>
            <StyledFeatureTitle>Fitur Visiting</StyledFeatureTitle>
            <StyledFeatureDesc>
              Workab mempunyai fitur untuk melakukan absensi via perangkat dan
              dapat melihat riwayat absensi via website dimanapun dan kapanpun
            </StyledFeatureDesc>
          </StyledFeatureContainer>
        </StyledRow>
      </StyledContainer>
      <Footer />
    </>
  );
}
