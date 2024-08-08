import styled from "styled-components";
import css from "styled-jsx/css";

const Text = styled.p`
  ${(props) =>
    props?.color &&
    css`
      color: ${props.color};
    `}
  ${(props) =>
    props?.size &&
    css`
      font-size: ${props.size};
    `}
  ${(props) =>
    props?.align &&
    css`
      text-align: ${props.align};
    `}
    ${(props) =>
    props?.spacing &&
    css`
      letter-spacing: ${props.spacing};
    `}

    ${(props) =>
    props?.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `}

    ${(props) =>
    props?.lineHeight &&
    css`
      line-height: ${props.lineHeight};
    `}

    ${(props) =>
    props?.cursor &&
    css`
      cursor: ${props.cursor};
    `}
`;

const Roboto = styled(Text)`
  font-family: "Roboto Slab", sans-serif;
`;

const Roboto_28 = styled(Text)`
  font-size: 1.75rem;
  font-family: "Roboto Slab", sans-serif;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: 0.02em;
`;

const Circka = styled(Text)`
  font-family: "PP Cirka", sans-serif;
`;

const Cirka_20 = styled(Circka)`
  font-size: 20px;
  font-weight: 600;
  line-height: 18.4px;
  letter-spacing: 0.02em;
`;

const Circka_44 = styled(Circka)`
  font-size: 44px;
  font-weight: 600;
  line-height: 52.8px;
`;
const Circka_36 = styled(Circka)`
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
`;

const Circka_82 = styled(Circka)`
  font-size: 82px;
  font-weight: 600;
  line-height: 98.4px;
`;

const Poppins = styled(Text)`
  font-family: "Poppins", sans-serif;
`;

const Poppins_13 = styled(Poppins)`
  font-size: 13px;
  font-weight: 400;
  line-height: 19.2px;
`;

const Poppins_22 = styled(Poppins)`
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
`;

const Poppins_24 = styled(Poppins)`
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  text-align: left;
`;

export {
  Roboto,
  Roboto_28,
  Cirka_20,
  Circka_36,
  Circka_44,
  Circka_82,
  Circka,
  Poppins,
  Poppins_13,
  Poppins_22,
};
