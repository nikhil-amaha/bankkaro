import React from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

import { motion } from "framer-motion";
import { Poppins } from "./Text";

const ButtonWrapper = styled.div`
  position: relative;
  width: 386px;
  height: 87px;
  &:hover .left-arrow {
    transform: translate(5px, -20px);
  }

  &:hover .right-arrow {
    transform: translate(-5px, -20px) rotate(180deg);
  }
`;

const CompareButton = styled(motion.button)`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #c68b4a, #ffebc9);
  color: black;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  border: none;
  outline: none;
  gap: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  clip-path: path(
    "M349.953 87L36.047 87C24.4591 87 15.9213 78.2752 11.3997 67.707C10.0453 64.5415 8.62027 61.2107 6.89215 57.8994C2.56488 49.6078 0.401213 45.462 0.401213 43.5C0.401213 41.538 2.56488 37.3922 6.89215 29.1006C8.6203 25.7893 10.0454 22.4584 11.3997 19.293C15.9213 8.72477 24.4591 -1.69881e-05 36.047 -1.54718e-05L349.953 1.80735e-06C361.541 2.31387e-06 370.079 8.7248 374.6 19.293C375.955 22.4585 377.38 25.7893 379.108 29.1006C383.435 37.3922 385.599 41.538 385.599 43.5C385.599 45.462 383.435 49.6078 379.108 57.8994C377.38 61.2107 375.955 64.5416 374.6 67.707C370.079 78.2752 361.541 87 349.953 87Z"
  );

  &:hover {
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="386" height="87" viewBox="0 0 386 87" fill="none"><g filter="url(%23filter0_b_450_3312)"><path d="M349.953 87L36.047 87C24.4591 87 15.9213 78.2752 11.3997 67.707C10.0453 64.5415 8.62027 61.2107 6.89215 57.8994C2.56488 49.6078 0.401213 45.462 0.401213 43.5C0.401213 41.538 2.56488 37.3922 6.89215 29.1006C8.6203 25.7893 10.0454 22.4584 11.3997 19.293C15.9213 8.72477 24.4591 -1.69881e-05 36.047 -1.54718e-05L349.953 1.80735e-06C361.541 2.31387e-06 370.079 8.7248 374.6 19.293C375.955 22.4585 377.38 25.7893 379.108 29.1006C383.435 37.3922 385.599 41.538 385.599 43.5C385.599 45.462 383.435 49.6078 379.108 57.8994C377.38 61.2107 375.955 64.5416 374.6 67.707C370.079 78.2752 361.541 87 349.953 87Z" fill="url(%23paint0_linear_450_3312)"/><path d="M349.953 85L36.047 85C25.6018 85 17.6063 77.129 13.2385 66.9203L13.2256 66.8901C11.8788 63.7424 10.4287 60.3531 8.66522 56.9741C6.49209 52.8101 4.89474 49.7483 3.8363 47.4803C3.30801 46.3482 2.93674 45.4616 2.7001 44.7668C2.45492 44.0469 2.40121 43.6645 2.40121 43.5C2.40121 43.3355 2.45492 42.953 2.7001 42.2331C2.93674 41.5384 3.30801 40.6517 3.8363 39.5197C4.89474 37.2517 6.49209 34.1899 8.66522 30.0259C10.4287 26.6469 11.8788 23.2576 13.2255 20.11L13.2385 20.0797C17.6063 9.871 25.6018 1.99998 36.047 1.99998L349.953 2C360.398 2 368.394 9.87103 372.762 20.0797L372.774 20.1088C374.121 23.2568 375.571 26.6465 377.335 30.0259C379.508 34.1899 381.105 37.2517 382.164 39.5197C382.692 40.6518 383.063 41.5384 383.3 42.2332C383.545 42.9531 383.599 43.3355 383.599 43.5C383.599 43.6645 383.545 44.047 383.3 44.7669C383.063 45.4616 382.692 46.3483 382.164 47.4803C381.105 49.7483 379.508 52.8101 377.335 56.9741C375.571 60.3535 374.121 63.7432 372.774 66.8911L372.762 66.9203C368.394 77.129 360.398 85 349.953 85Z" stroke="url(%23paint1_linear_450_3312)" stroke-opacity="0.7" stroke-width="4"/></g><defs><filter id="filter0_b_450_3312" x="-29.7988" y="-30.2" width="445.598" height="147.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="15.1"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_450_3312"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_450_3312" result="shape"/></filter><linearGradient id="paint0_linear_450_3312" x1="283.354" y1="221.685" x2="237.5" y2="-23" gradientUnits="userSpaceOnUse"><stop stop-color="%23C68B4A"/><stop offset="1" stop-color="%23FEE0AE"/></linearGradient><linearGradient id="paint1_linear_450_3312" x1="390" y1="43.5" x2="-3.99994" y2="43.5" gradientUnits="userSpaceOnUse"><stop stop-color="%236A4C30"/><stop offset="0.1" stop-color="%239E7147" stop-opacity="0"/><stop offset="0.745" stop-color="%23A7774B" stop-opacity="0.173469"/><stop offset="1" stop-color="%236A4C30"/></linearGradient></defs></svg>');
    background-size: cover;
  }

  &:active {
    /* scale: 0.95; */
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  transform: translateY(-50%);
  transition: transform 0.2s ease-in-out;
  pointer-events: none;
  &.left-arrow {
    left: -30px;
  }

  &.right-arrow {
    right: -30px;
    width: fit-content;
    transform: translateY(-50%) rotate(180deg);
  }
`;

const LargeArrow = styled.div`
  width: 12px;
  height: 41px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="41" viewBox="0 0 12 41" fill="none"><g opacity="0.45" filter="url(%23filter0_b_450_1206)"><path d="M10.6898 40.5794C9.57375 37.9709 8.39942 35.2262 6.97539 32.4976C3.40956 25.665 1.62664 22.2487 1.62665 20.632C1.62665 19.0152 3.40956 15.5989 6.9754 8.76636C8.39944 6.03774 9.57377 3.29301 10.6898 0.68457" stroke="url(%23paint0_linear_450_1206)" stroke-width="1.64807"/></g><defs><filter id="filter0_b_450_1206" x="-24.0832" y="-24.5254" width="60.4165" height="90.3258" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="12.4429"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_450_1206"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_450_1206" result="shape"/></filter><linearGradient id="paint0_linear_450_1206" x1="234.789" y1="167.462" x2="97.4164" y2="-159.16" gradientUnits="userSpaceOnUse"><stop stop-color="%23C68B4A"/><stop offset="1" stop-color="%23FFEBC9"/></linearGradient></defs></svg>');
  background-size: contain;
  background-repeat: no-repeat;
`;

const SmallArrow = styled.div`
  width: 10px;
  height: 30px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="30" viewBox="0 0 8 30" fill="none"><g opacity="0.45" filter="url(%23filter0_b_450_1207)"><path d="M6.99985 29C6.62498 28.1238 6.27333 27.3483 5.92972 26.6483C2.64002 19.9466 0.995164 16.5958 0.993703 15.0683C0.992242 13.5409 2.50465 10.4449 5.52947 4.25294C6.00189 3.28588 6.47841 2.2187 6.99983 1" stroke="%23625C55" stroke-width="1.64807"/></g><defs><filter id="filter0_b_450_1207" x="-24.7162" y="-24.21" width="57.3595" height="78.42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="12.4429"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_450_1207"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_450_1207" result="shape"/></filter></defs></svg>');
  background-size: contain;
  background-repeat: no-repeat;
`;

const App = () => {
  return (
    <ButtonWrapper>
      <ArrowContainer className="left-arrow">
        <SmallArrow />
        <LargeArrow />
      </ArrowContainer>
      <CompareButton
        className="compare-button"
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 17,
          duration: 10,
        }}
      >
        <FiPlus size={32} color="rgba(22, 22, 20, 1)" />
        <Poppins
          size="22px"
          color="rgba(22, 22, 20, 1)"
          lineHeight="33px"
          spacing="2px"
        >
          Compare Now
        </Poppins>
      </CompareButton>
      <ArrowContainer className="right-arrow">
        <SmallArrow />
        <LargeArrow />
      </ArrowContainer>
    </ButtonWrapper>
  );
};

export default App;
