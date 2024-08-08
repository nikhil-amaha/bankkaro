"use client";
import React from "react";
import styled from "styled-components";

import { FlexBox, FlexCenter } from "../common/Flex";
import {
  Circka,
  Circka_36,
  Circka_82,
  Poppins,
  Poppins_13,
} from "../common/Text";

const Container = styled.div`
  width: 100%;
  background-color: rgb(15, 15, 15);
  position: relative;
  top: -150px;
  height: fit-content;
  align-items: center;
  display: flex;
  padding: 150px 0 100px;
  flex-direction: column;
`;

const Option = styled(FlexCenter)`
  border: 1.2px solid;
  border-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(21, 21, 21, 0.4) 100%
    )
    1;
  height: 40px;
  width: 124px;
  cursor: pointer;
  border-radius: 10px !important;
`;

const CreditCardsContainer = styled(FlexBox)`
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled(FlexBox)`
  flex-direction: column;
`;

const CardImage = styled.img`
  object-fit: stretch;
  width: 450px !important;
  height: 290px !important;
`;

const InfoContainer = styled(FlexBox)`
  padding-left: 50px;
  flex-direction: column;
`;

const Chip = styled(FlexCenter)`
  background: linear-gradient(
    200.74deg,
    rgba(214, 211, 194, 0.2) 0%,
    rgba(92, 92, 92, 0.14) 100%
  );
  width: fit-content;
  padding: 12px 20px;
`;

const OPTIONS = ["Featured", "Cashback", "Rewards", "Fuel", "Business"];

const CREDIT_CARD_DATA = [
  {
    name: "HDFC Regalia",
    image: "/images/credit_cards/01.png",
  },
  {
    name: "Axis Bank Ace Credit Card",
    image: "/images/credit_cards/02.png",
  },
  {
    name: "Indian Oil HDFC Credit Card",
    image: "/images/credit_cards/01.png",
  },
];

const CreditCards = () => {
  return (
    <Container>
      <FlexBox width="60%">
        <Circka_82 align="center" color="white">
          Popular credit cards for every dedicated category
        </Circka_82>
      </FlexBox>
      <FlexBox
        justifyContent="space-around"
        columnGap="25px"
        margin="50px 0 0 0"
      >
        {OPTIONS.map((option, index) => (
          <Option key={index}>
            <Poppins_13 align="center" color="white">
              {option}
            </Poppins_13>
          </Option>
        ))}
      </FlexBox>
      <CreditCardsContainer>
        {CREDIT_CARD_DATA.map((card, index) => (
          <Card key={index}>
            <CardImage src={card.image} alt={card.name} />
            <InfoContainer>
              <Circka_36 color="rgba(177, 177, 177, 1)">{card.name}</Circka_36>
              <FlexBox columnGap="20px" margin="20px 0 0 0">
                <Chip>
                  <Poppins
                    size="16px"
                    spacing="1.12px"
                    color=" rgba(233, 217, 175, 1);"
                  >
                    TRAVEL
                  </Poppins>
                </Chip>
                <Chip>
                  <Poppins
                    size="16px"
                    spacing="1.12px"
                    color="rgba(233, 217, 175, 1)"
                  >
                    ONLINE SHOPPING{" "}
                  </Poppins>
                </Chip>
              </FlexBox>
              <FlexBox margin="22px 0 8px">
                <Poppins color="rgba(177, 177, 177, 1)" size="24px">
                  50% Cashback
                </Poppins>
              </FlexBox>

              <Poppins color="rgba(177, 177, 177, 1)" size="18px">
                High cashback on online and offline spends
              </Poppins>

              <FlexBox margin="18px 0 0 0" cursor="pointer">
                <Circka size="28px" spacing="1.5px" color="#E4C2A2">
                  Apply Now
                </Circka>
              </FlexBox>
            </InfoContainer>
          </Card>
        ))}
      </CreditCardsContainer>
    </Container>
  );
};

export default CreditCards;
