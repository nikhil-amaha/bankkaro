"use client";
import React from "react";
import styled from "styled-components";

import { FlexBox, FlexCenter } from "../common/Flex";
import { Circka } from "../common/Text";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const HeadingText = styled(Circka)`
  font-size: 34.02px;
  font-weight: 700;
  line-height: 31.3px;
  letter-spacing: 0.04em;
`;

const TitleText = styled(Circka)`
  font-size: 125.98px;
  font-weight: 700;
  line-height: 115.9px;
  letter-spacing: -0.04em;
  display: inline-block;
  margin-top: 8px;
`;

const TextContainer = styled(FlexBox)`
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 150px;
`;

const VideoContainer = styled(FlexCenter)`
  width: 100%;
  height: 760px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: -1;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 3/2;
  zoom: 0.5;
`;

const RatanImg = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 200px;
  transform: translateX(-50%);
`;

const Review = () => {
  return (
    <Container>
      <HeadingText align="center">WHAT THEY SAY ABOUT BANKKARO</HeadingText>
      <TitleText align="center" color="rgba(29, 29, 29, 1)">
        See the <span style={{ color: "#CCBFAC" }}>Impact</span> in action
      </TitleText>
      <TextContainer>
        <FlexBox column align="center">
          <Circka
            size="90px"
            fontWeight="600"
            lineHeight="100px"
            color="rgba(36, 36, 36, 1)"
          >
            Ratan Tata
          </Circka>
          <Circka
            color="rgba(121, 87, 44, 1)"
            size="48px"
            fontWeight="600"
            lineHeight="44px"
          >
            Chairperson Tata Group
          </Circka>
        </FlexBox>
        <FlexBox column width="25%" align="center">
          <Circka
            color="rgba(84, 84, 84, 1)"
            size="24px"
            fontWeight="500"
            lineHeight="30px"
          >
            “ BankKaro helped me find the perfect credit card that matches my
            spending on groceries and travel. Highly recommend it for
            personalized credit card options. “
          </Circka>
        </FlexBox>
      </TextContainer>

      <VideoContainer>
        <Video
          src="https://s3-figma-videos-production-sig.figma.com/video/1075329090537993606/TEAM/d4ff/89b0/-465c-4a49-ab02-0a949552ef7d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UsM-I2GXjV9wbGpCgHZ1GheZGA9QU12hgwdCluInircIaRf3XZFQR0gsQENrSlLJJWkk4r7LMiO2cMbvnn7O~0BF1FjelLopNLW7p3LrDFXs8-7lUoa1YkNCFm-FwcvW38BPEq3AihdzueZA7vVGnWqmiYrhtgKo5rKSqEHHI6azffct8unZH4nTxgs8qOqF04iJxfXtNDibR1P0IB2uva1yq7MgeAvWX7hnfhRPopiLPbePTOgKcSI4JykzItsy4XS2tz7w7gDeev~JDbeqiWptKEgOMYt3j~T0iazF0l1VzMtj8DyjpIELEkkg0flTrXE5Io1ObKBAa8b2CvBYoQ__"
          autoPlay
          loop
          muted
        />
      </VideoContainer>

      <RatanImg src="/images/review/ratan_tata.png" />
    </Container>
  );
};

export default Review;
