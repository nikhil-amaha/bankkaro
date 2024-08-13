"use client";
import React from "react";
import styled from "styled-components";

import { FlexBox } from "../common/Flex";
import { DM_SANS_SERIF, Poppins } from "../common/Text";
import CompareButton from "../common/Button";

const Container = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  height: fit-content;
  align-items: center;
  display: flex;
  padding: 0 0 300px;
  flex-direction: column;
  background-color: rgb(15, 15, 15);
`;

const TitleTextContainer = styled(FlexBox)`
  width: 100%;
  justify-content: center;
  border-radius: 100%;
  position: relative;
  height: 100px;
  background-color: rgb(15, 15, 15);
  top: 50px;
  z-index: 2;
`;
const Wrapper = styled(FlexBox)`
  position: absolute;
  left: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const BelowShape = styled(FlexBox)`
  width: 100%;
  justify-content: center;
  border-radius: 100%;
  position: relative;
  height: 100px;
  background-color: rgb(15, 15, 15);
  top: -55px;
`;

const BackgroundContainer = styled.div`
  position: relative;
`;

const PodiumImg = styled.img`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 50%;
  max-height: 650px;
  height: 100%;
  transform: translateX(-50%);
  top: 0;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 120;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-25%, -50%);
  overflow: hidden;
`;

const Video = styled.video`
  z-index: -1;
  aspect-ratio: 3 / 1;
  width: 100%;
  object-fit: cover;
`;

const CardScrollGif = styled.img`
  width: 50%;
  z-index: 10;
  overflow: hidden;
  object-fit: cover;
`;

const GridBackground = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const TextContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonContainer = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

const CompareCards = () => {
  return (
    <Container>
      <TitleTextContainer>
        <Wrapper>{/* <TitleText>Compare Cards</TitleText> */}</Wrapper>
      </TitleTextContainer>
      <BackgroundContainer>
        <Video
          src="/images/compare_cards/backgroundVideo.mp4"
          autoPlay
          loop
          muted
        />
        <PodiumImg src="/images/compare_cards/podium.png" />
        <ImageContainer>
          <CardScrollGif src="/images/compare_cards/card_scroll.gif" />
        </ImageContainer>
      </BackgroundContainer>
      <BelowShape />
      <GridBackground src="/images/compare_cards/grid_background.svg" />
      <TextContainer>
        <DM_SANS_SERIF
          color="rgba(255, 255, 255, 1)"
          size="80px"
          align="center"
          fontWeight="400"
          spacing="1.2px"
        >
          Compare Cards
        </DM_SANS_SERIF>
        <Poppins
          align="center"
          color="rgba(255, 255, 255, 0.5)"
          size="30px"
          lineHeight="51px"
          fontWeight="300"
        >
          Uncover hidden benefits and find the perfect card for your financial
          goals.
        </Poppins>
        <ButtonContainer margin="30px 0 0 0">
          <CompareButton />
        </ButtonContainer>
      </TextContainer>
    </Container>
  );
};

export default CompareCards;
