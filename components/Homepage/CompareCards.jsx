"use client";
import React from "react";
import styled from "styled-components";

import { FlexBox, FlexCenter } from "../common/Flex";
import { Circka } from "../common/Text";
import CompareButton from "../common/Button";

const Container = styled.div`
  width: 100%;
  position: relative;
  top: -150px;
  height: fit-content;
  align-items: center;
  display: flex;
  padding: 50px 0 150px;
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
`;
const Wrapper = styled(FlexBox)`
  position: absolute;
  left: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const TitleText = styled(Circka)`
  width: 100%;
  font-size: 248.65px;
  font-weight: 700;
  line-height: 273.51px;
  text-align: center;
  background: linear-gradient(180deg, #4a4949 46.48%, #d1ad83 70.23%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  padding: 10px;
  display: inline-block;
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

const BackgroundContainer = styled.div``;
const Background = styled.img`
  height: 500px;
  width: 100vw;
`;

const PodiumImg = styled.img`
  position: absolute;
  z-index: 10;
  height: 590px;
  top: 260px;
`;

const ImageContainer = styled.div`
  position: absolute;
  z-index: 12;
  top: 510px;
`;

const Image1 = styled.img`
  width: 205.34px;
  height: 130.31px;
  position: relative;
  left: -40px;
`;
const Image2 = styled.img`
  width: 281.96px;
  height: 175.68px;
`;
const Image3 = styled.img`
  width: 205.34px !important;
  height: 130.31px !important;
  position: relative;
  left: 40px;
  object-fit: contain;
`;

const TextContainer = styled(FlexBox)`
  top: 120px;
  width: 40%;
  flex-direction: column;
`;
const ButtonText = styled(Circka)`
  font-size: 28px;
  font-weight: 600;
  line-height: 25.76px;
  letter-spacing: 2%;
  text-align: center;
`;

const ButtonContainer = styled.button`
  background: linear-gradient(
    200.74deg,
    rgba(214, 211, 194, 0.2) 0%,
    rgba(92, 92, 92, 0.14) 100%
  );
  width: fit-content;
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  border: 2.16px solid transparent;
  cursor: pointer;
  border-image: linear-gradient(
      200.74deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    )
    1;
  margin: 20px auto;
`;

const CompareCards = () => {
  return (
    <Container>
      <TitleTextContainer>
        <Wrapper>
          <TitleText>Compare Cards</TitleText>
        </Wrapper>
      </TitleTextContainer>
      <BackgroundContainer>
        <Background src="/images/compare_cards/background.png"></Background>
      </BackgroundContainer>
      <PodiumImg src="/images/compare_cards/podium.png"></PodiumImg>
      <BelowShape />
      <ImageContainer>
        <Image1 src="/images/compare_cards/card_01.png"></Image1>
        <Image2 src="/images/compare_cards/card_02.png"></Image2>
        <Image3 src="/images/compare_cards/card_01.png"></Image3>
      </ImageContainer>
      <TextContainer>
        <Circka color="white" size="46px" align="center" lineHeight="60px">
          Uncover hidden benefits and find the perfect card for your financial
          goals.
        </Circka>
        <ButtonContainer column>
          <ButtonText color="rgba(255, 233, 190, 1)" size="24px">
            Compare Cards
          </ButtonText>
        </ButtonContainer>
        <FlexCenter>
          <CompareButton />
        </FlexCenter>
      </TextContainer>
    </Container>
  );
};

export default CompareCards;
