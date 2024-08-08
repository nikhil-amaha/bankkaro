"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";

import { Circka, Circka_82 } from "../common/Text";
import { FlexBox } from "../common/Flex";

const BannerContainer = styled.div`
  height: 800px;
  border-radius: 0 0 120px 120px;
  overflow: hidden;
  display: flex;
  position: relative;
  overflow: hidden;
  z-index: 100;
`;

const BannerTextContainer = styled(FlexBox)`
  justify-content: center;
  gap: 32px;
  position: absolute;
  z-index: 10;
  top: 50%;
  height: 100%;
  width: 100%;
  padding-left: 10rem;
  transform: translateY(-50%);
  background: radial-gradient(
    75.73% 238.9% at 100% 60.92%,
    rgba(46, 46, 46, 0) 54.75%,
    #1a1a1a 80.72%,
    #131313 100%
  );
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
`;

const ButtonText = styled(Circka)`
  font-size: 28px;
  font-weight: 600;
  line-height: 25.76px;
  letter-spacing: 2%;
  text-align: center;
`;

const VideoContainer = styled.div`
  border: 2px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  border-radius: 0 0 120px;
  z-index: 0;
  border: none;
  z-index: -1;
  flex: 1;
  height: 100%;
`;

const Video = styled.video`
  height: 100%;
  z-index: -1;
  position: absolute;
  right: -200px;
  bottom: 0;
`;

const CreditCardContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 190px;
  right: 200px;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerTextContainer column>
        <FlexBox column>
          <Circka_82 color="white"> We find the Best</Circka_82>
          <Circka_82 color="white"> Credit Cards for You</Circka_82>
        </FlexBox>
        <ButtonContainer>
          <ButtonText color="rgba(255, 233, 190, 1)" size="24px">
            Find a credit card
          </ButtonText>
        </ButtonContainer>
      </BannerTextContainer>
      <VideoContainer>
        <Video
          src="https://s3-figma-videos-production-sig.figma.com/video/1075329090537993606/TEAM/13ff/3422/-d3eb-4e5e-bba0-ee57afbda338?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jF3DSXkdJbCPe3j7hcSBPFy76-NK~d3PQQmsSeD6hWygJZ9wdpzJFt2mAsuKIC8EsXvKX49pLH6wjAfKvqy2XFZR2AZyTopYyZYWWFf6Aj0B14sPLbm7tMCe3-maeEWZUauiXtlRUj5YdoColCapYCZbhv5ustcBcRC2aOF~RfOD01nfCYjIUlSXwD1WUycFmYIphwqjnQq4ntJCNqjbVmJnPzds8RJazEdtEyqNva71wXaBm-jFUaWt-wiFMYezjfWVKZlONg7Xxano5PdaIQQFMmnI97OtTmz3O-GtaIAbsuZ9Zij0Z9y9LOPciX0P6cL7fGJU3RybqdoDgNuHXQ__"
          autoPlay
          loop
          muted
        />
        <CreditCardContainer>
          <Image
            src="/images/banner/credit_card.png"
            alt="Logo"
            width={500}
            height={310}
          />
        </CreditCardContainer>
      </VideoContainer>
    </BannerContainer>
  );
};

export default Banner;
