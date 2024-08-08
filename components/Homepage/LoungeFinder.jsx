"use client";
import React from "react";
import styled from "styled-components";

import { FlexBox, FlexCenter } from "../common/Flex";
import { Circka } from "../common/Text";

const Container = styled.div`
  width: 100%;
  position: relative;
  top: -150px;
  height: fit-content;
  align-items: center;
  display: flex;
  padding: 50px 0 0;
  flex-direction: column;
`;

const TitleText = styled(Circka)`
  font-size: 96px;
  font-weight: 700;
  line-height: 84.48px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
`;

const DescriptionText = styled(Circka)`
  font-size: 46px;
  font-weight: 700;
  line-height: 55.2px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  margin: 10px 0 60px;
`;

const VideoContainer = styled(FlexCenter)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: -1;
  top: 0;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
`;
const ButtonContainer = styled.button`
  width: fit-content;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  border: 2.16px solid transparent;
  cursor: pointer;
  background: linear-gradient(
    200.74deg,
    rgba(214, 211, 194, 0.2) 0%,
    rgba(92, 92, 92, 0.8) 100%
  );
  backdrop-filter: blur(10px);
`;

const ButtonText = styled(Circka)`
  font-size: 28px;
  font-weight: 600;
  line-height: 25.76px;
  letter-spacing: 2%;
  text-align: center;
`;

const AirportContainer = styled(FlexBox)`
  display: grid;
  grid-template-columns: repeat(3, 460px);
  justify-content: space-between;
  width: 80%;
  margin-top: 110px;
`;

const AirportCard = styled(FlexBox)`
  flex-direction: column;
`;

const Icon = styled.img`
  height: 124px;
  width: 124px;
`;
const AirportImage = styled.img`
  margin-top: 50px;
  width: 120%;
  height: 100%;
  position: relative;
  left: -40px;
`;

const ShadowImg = styled.img`
  position: absolute;
  top: -100px;
  height: 550px;
  width: 600px;
  left: -80px;
`;

const AIRPORT_DATA = [
  {
    main: "/images/lounge/main_01.png",
    icon: "/images/lounge/icon_01.png",
  },
  {
    main: "/images/lounge/main_02.png",
    icon: "/images/lounge/icon_03.png",
  },
  {
    main: "/images/lounge/main_03.png",
    icon: "/images/lounge/icon_03.png",
  },
];

const LoungeFinder = () => {
  return (
    <Container>
      <VideoContainer>
        <Video
          src="https://s3-figma-videos-production-sig.figma.com/video/1075329090537993606/TEAM/4a87/5471/-2e2f-4bd2-a753-22c11196b9a9?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-CM2FX9HxJCO~yCWd4X00zEWyQr4aOn0QTS7LNDxO-8W3f1hIpI~zdB3y~D-blF75ofZ3Wsr6lb7woVsvXEDvmfZTx8EYx9jq3DUePrzAxIiGzeohvraYzdrUvLYiqr-ckyKbaQiGn8XZmuyWRx~i2FRl4m3TzAD2ZxLs~dj-wwP4Q6AwwVO-N-7D2RvKbbkfEyM8k7P8iy-lcKSEtKVhLlcpGUhBqjrJKjtzW1Q73chxwpUhwlbs1GqsJTnffK0JFa8ULKRSuDQqQH~KzjUjSECI8G9M~Er5cmK7P7PHRarCCTl6XEnbtoq22KXMzAblamNabg4gqTE2dEIqDHUA__"
          autoPlay
          loop
          muted
        />
      </VideoContainer>
      <TitleText>Lounge Finder</TitleText>
      <DescriptionText>
        Check which lounges you can access at a click!
      </DescriptionText>
      <ButtonContainer>
        <ButtonText color="rgba(255, 233, 190, 1)" size="24px">
          Try Lounge Finder
        </ButtonText>
      </ButtonContainer>
      <AirportContainer>
        {AIRPORT_DATA?.map((item, index) => (
          <AirportCard key={index}>
            <FlexBox>
              <Icon src={item.icon} />
              <FlexBox column justify="center" margin="0 0 0 20px">
                <Circka
                  size="42px"
                  fontHeight="36px"
                  color="rgba(255, 255, 255, 1)"
                >
                  Indra Gandhi Int’l
                </Circka>
                <Circka
                  size="24px"
                  lineHeight="22px"
                  color="rgba(255, 255, 255, 0.6)"
                >
                  IGI New Delhi
                </Circka>
              </FlexBox>
            </FlexBox>
            <AirportImage src={item.main} />
            <ShadowImg src="/images/lounge/bg.png" />
          </AirportCard>
        ))}
      </AirportContainer>
    </Container>
  );
};

export default LoungeFinder;
