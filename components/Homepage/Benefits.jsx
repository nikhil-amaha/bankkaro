"use client";
import React from "react";
import styled from "styled-components";
import { Circka_44, Poppins_22 } from "../common/Text";
import Image from "next/image";

const BenefitsContainer = styled.div`
  height: 600px;
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  position: relative;
  top: -150px;
  background: linear-gradient(
    to bottom,
    rgba(228, 194, 162, 0.9) 0%,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(15, 15, 15, 1) 100% /* Black */
  );

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(219, 153, 90, 0.5) 10%,
      /* Yellowish gradient start */ rgba(228, 194, 162, 0) 40%
    );

    z-index: 1;
  }
`;

const BenefitsWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: -10px;
`;

const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 22.5rem;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const BenefitsData = [
  {
    title: "Personalised Offers",
    description: "Find best Credit Cards based on your spend pattern",
    image: "/images/benefits/personalised_offers.png",
  },
  {
    title: "Earn Rewards",
    description: "Earn Rewards for every successful Credit Card approval",
    image: "/images/benefits/earn_rewards.png",
  },
  {
    title: "Compare Cards",
    description: "Compare your existing Cards with best in the industry",
    image: "/images/benefits/compare_cards.png",
  },
  {
    title: "Max Benifits",
    description: "Get maximum benefits from your Credit Cards",
    image: "/images/benefits/max_benefits.png",
  },
];

const Benefits = () => {
  return (
    <BenefitsContainer>
      <BenefitsWrapper>
        {BenefitsData?.map((item, index) => (
          <BenefitItem key={index}>
            <Image
              src={item?.image}
              alt="credit-card"
              width={200}
              height={200}
            />
            <Circka_44 color="white">{item.title}</Circka_44>
            <Poppins_22
              align="center"
              color="rgba(177, 177, 177, 1)"
              spacing="2px"
            >
              {item.description}
            </Poppins_22>
          </BenefitItem>
        ))}
      </BenefitsWrapper>
    </BenefitsContainer>
  );
};

export default Benefits;
