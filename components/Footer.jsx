"use client";

import React from "react";
import styled from "styled-components";
import { FlexBox } from "./common/Flex";
import { Roboto } from "./common/Text";

const Container = styled.div`
  position: relative;
  width: 100%;
  top: 300px;
  background-color: rgb(15, 15, 15);
  display: flex;
  justify-content: center;
  padding: 110px 155px;
  padding-bottom: 100px;
`;

const LeftContainer = styled.div`
  width: 50%;
`;

const RightContainer = styled.div`
  width: 50%;
  padding-left: 50px;
  align-items: space-between;
  height: 100%;
  flex: 1;
  position: relative;
`;

const ButtonText = styled(Roboto)`
  font-size: 22px;
  font-weight: 200;
  line-height: 21.76px;
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
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

const ButtonWrapper = styled(FlexBox)`
  padding-bottom: 40px;
  border-bottom: 1.33px solid rgba(38, 38, 38, 1);
`;

const CreditImage = styled.img`
  position: absolute;
  width: 280px;
  right: 0;
  bottom: 0;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const FOOTER_ITEMS = [
  {
    name: "COMPANY",
    items: [
      "About BankKaro",
      "Vision and Mission",
      "Our Team Members",
      "Partners and Investors",
    ],
  },
  {
    name: "BLOG",
    items: [
      "BankKaro Savings",
      "Cashless Makes Perfect",
      "BankKaro No Interest",
      "BankKaro Digital Wallet",
    ],
  },
  {
    name: "FEATURES",
    items: ["Card Genius", "Lounge Finder", "Beat My Card", "Compare Cards"],
  },
];

const FOOTER_ITEMS_2 = [
  {
    name: "CONTACT",
    items: ["Contact Us", "Contact Support"],
  },
  {
    name: "LEGAL",
    items: ["Terms", "Privacy"],
  },
];

const Footer = () => {
  return (
    <Container>
      <LeftContainer>
        <Roboto color="rgba(153, 153, 153, 1)" size="19px" lineHeight="33px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce
          id mollis ex.{" "}
        </Roboto>
        <ButtonWrapper justify="start" margin="150px 0 0 0">
          <ButtonContainer column>
            <Icon src="/images/footer/app_store.png" />
            <ButtonText color="rgba(255, 233, 190, 1)" size="24px">
              App Store
            </ButtonText>
          </ButtonContainer>
          <ButtonContainer column>
            <Icon src="/images/footer/google_play.png" />
            <ButtonText color="rgba(255, 233, 190, 1)" size="24px">
              Google Play
            </ButtonText>
          </ButtonContainer>
        </ButtonWrapper>
        <FlexBox margin="56px 0 0 0">
          <Roboto
            color="rgba(229, 229, 229, 1)"
            size="22px"
            lineHeight="38px"
            fontWeight="300"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea.
          </Roboto>
        </FlexBox>
      </LeftContainer>
      <RightContainer>
        <FlexBox justify="space-between">
          {FOOTER_ITEMS.map((item, index) => (
            <FlexBox key={index} column margin="0 0 20px 0">
              <FlexBox margin="0 0 26px 0">
                <Roboto
                  color="rgba(229, 229, 229, 1)"
                  size="20px"
                  lineHeight="30px"
                  fontWeight="600"
                >
                  {item.name}
                </Roboto>
              </FlexBox>

              {item.items.map((subItem, subIndex) => (
                <FlexBox margin="0 0 16px 0">
                  <Roboto
                    key={subIndex}
                    color="rgba(153, 153, 153, 1)"
                    size="18px"
                    lineHeight="28px"
                    fontWeight="400"
                    cursor="pointer"
                  >
                    {subItem}
                  </Roboto>
                </FlexBox>
              ))}
            </FlexBox>
          ))}
        </FlexBox>
        <FlexBox margin="100px 0 0 0">
          <FlexBox>
            {FOOTER_ITEMS_2.map((item, index) => (
              <FlexBox key={index} column margin="0 60px  20px 0">
                <FlexBox margin="0 0 26px 0">
                  <Roboto
                    color="rgba(229, 229, 229, 1)"
                    size="20px"
                    lineHeight="30px"
                    fontWeight="600"
                  >
                    {item.name}
                  </Roboto>
                </FlexBox>

                {item.items.map((subItem, subIndex) => (
                  <FlexBox margin="0 0 16px 0">
                    <Roboto
                      key={subIndex}
                      color="rgba(153, 153, 153, 1)"
                      size="18px"
                      lineHeight="28px"
                      fontWeight="400"
                      cursor="pointer"
                    >
                      {subItem}
                    </Roboto>
                  </FlexBox>
                ))}
              </FlexBox>
            ))}
          </FlexBox>
          <FlexBox></FlexBox>
        </FlexBox>
        <CreditImage src="/images/footer/credits.png" />
      </RightContainer>
    </Container>
  );
};

export default Footer;
