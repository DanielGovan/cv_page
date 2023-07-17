import React from "react";
import styled from "styled-components";

const StyledSectionHeader = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #bbb;
  letter-spacing: 2px;
  margin: 2rem 0 1rem;
  text-align:

  &:nth-child(1) {
    margin: 0rem 0 0;
  }

  @media print {
    letter-spacing: normal !important;
    font-size: 1.5rem !important;
    margin: 1rem 0 0rem;
  }
`;

const SectionHeader = ({ children }) => {
  return <StyledSectionHeader>{children}</StyledSectionHeader>;
};

export default SectionHeader;
