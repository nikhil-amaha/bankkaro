import styled from "styled-components";
import PropTypes from "prop-types";

const FlexBox = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) =>
    props.column || props.isMobile ? "column" : "row"};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  row-gap: ${(props) => props.rowGap};
  column-gap: ${(props) => props.columnGap};
  flex-wrap: ${(props) => props.wrap};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => (props.isMobile ? "100%" : props.width)};
  position: ${(props) => (props.noPosition ? props.noPosition : "relative")};
  cursor: ${(props) => props.cursor};
  opacity: ${(props) => props.opacity};
`;

FlexBox.defaultProps = {
  column: false,
  align: "stretch",
  justify: "flex-start",
  rowGap: 0,
  columnGap: 0,
  wrap: "nowrap",
  margin: 0,
  padding: 0,
  isMobile: false,
  width: "auto",
  cursor: "unset",
  opacity: 1,
};

FlexBox.propTypes = {
  column: PropTypes.bool,
  align: PropTypes.string,
  justify: PropTypes.string,
  rowGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  columnGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  wrap: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isMobile: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cursor: PropTypes.string,
};

const FlexCenter = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { FlexBox, FlexCenter };
