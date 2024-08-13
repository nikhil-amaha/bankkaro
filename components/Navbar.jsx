"use client";
import React from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

import { Roboto_28, Cirka_20, Circka } from "./common/Text";
import { FlexBox, FlexCenter } from "./common/Flex";

const NavbarContainer = styled.nav`
  font-family: "Roboto Slab", serif;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.33px solid black;
  position: fixed;
  top: 0;
  z-index: 10000;
  width: 100%;
  max-width: 100vw;
  background: rgba(0, 0, 0, 0.3);
  border: 1.33px solid;
  border-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 50%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(25px);
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
`;

const TitleTextContainer = styled.div`
  display: flex;
`;

const NavOptions = styled(FlexCenter)`
  display: flex;
  gap: 80px;
`;

const NavOption = styled(FlexBox)`
  gap: 10px;
  align-items: center;
`;

const ButtonContainer = styled.button`
  width: 144px;
  height: 46px;
  background: linear-gradient(
    200.74deg,
    rgba(214, 211, 194, 0.2) 0%,
    rgba(92, 92, 92, 0.14) 50%
  );
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
  position: relative;
  margin-right: 50px;
`;

const ButtonText = styled(Circka)`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 2%;
`;

const ProfileImage = styled.img`
  position: absolute;
  width: 64px;
  height: 64px;
  top: -10px;
  right: -55px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <TitleTextContainer>
          <Roboto_28 color="rgba(255, 255, 255, 0.6)">BANK</Roboto_28>
          <Roboto_28 color="white">KARO</Roboto_28>
        </TitleTextContainer>
        <NavOptions>
          <NavOption>
            <Cirka_20 color="white">OUR PRODUCTS</Cirka_20>
            <FiChevronDown color="white" size={24} />
          </NavOption>
          <NavOption>
            <Cirka_20 color="white">TOOLS</Cirka_20>
            <FiChevronDown color="white" size={24} />
          </NavOption>
          <NavOption>
            <Cirka_20 color="white">BLOGS</Cirka_20>
          </NavOption>
          <NavOption>
            <Cirka_20 color="white">ABOUT US</Cirka_20>
          </NavOption>
        </NavOptions>
        <ButtonContainer>
          <ButtonText color="rgba(255, 233, 190, 1)" size="24px">
            Sign In
          </ButtonText>
          <ProfileImage src="/images/navbar/profile.png" />
        </ButtonContainer>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
