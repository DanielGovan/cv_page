import React from "react";
import styled from "styled-components";

const StyledHeaderArea = styled.div`
  font-weight: 300;
  overflow: hidden;
  display: grid;
  color: #a4000e;
  font-family: "Ubuntu", sans-serif;
  margin: 0;

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media print {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledHeader = styled.h1`
  font-weight: 300;
  font-size: 6rem;
  text-shadow: 1px 1px 1px #710013;
  letter-spacing: -1px;
  margin: 0;
  line-height: 0.8;

  @media print {
    text-shadow: none !important;
    font-size: 4rem !important;
    line-height: 1 !important;
    padding: 0 !important;
  }
`;

const StyledIntro = styled.p`
  font-weight: 300;
  font-size: 1.5rem;
  margin: 0;

  @media print {
    text-shadow: none !important;
    font-size: 1.1rem !important;
    line-height: 1 !important;
    padding: 0 !important;
  }
`;

const HeaderArea = ({ header, intro }) => {
  return (
    <StyledHeaderArea>
      <StyledHeader>{header}</StyledHeader>
      <StyledIntro>{intro}</StyledIntro>
    </StyledHeaderArea>
  );
};

export default HeaderArea;
