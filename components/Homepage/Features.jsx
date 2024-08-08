"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const FeaturesContainer = styled.div`
  width: 100%;
  background-color: rgb(15, 15, 15);
  position: relative;
  top: -150px;
  height: fit-content;
  justify-content: center;
  display: flex;
  padding-bottom: 78px;
`;

const FeaturesWidget = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 22.5rem;
  justify-content: center;
  align-items: center;
`;

const FEATURES_DATA = [
  "/images/features/01.png",
  "/images/features/02.png",
  "/images/features/03.png",
  "/images/features/04.png",
];

const Features = () => {
  return (
    <FeaturesContainer>
      <FeaturesWidget>
        {FEATURES_DATA.map((image, index) => (
          <FeatureItem key={index}>
            <Image src={image} alt="feature" width={300} height={436} />
          </FeatureItem>
        ))}
      </FeaturesWidget>
    </FeaturesContainer>
  );
};

export default Features;
