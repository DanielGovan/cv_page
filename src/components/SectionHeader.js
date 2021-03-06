import React from "react";
import styled from "styled-components";

const StyledSectionHeader = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #bbb;
  letter-spacing: 2px;
  padding: 1rem 0 0;

  @media print {
    letter-spacing: normal !important;
    font-size: 1.2rem !important;
    padding: 1rem 0 0 0 !important;
  }
`;

const SectionHeader = ({ children }) => {
  return <StyledSectionHeader>{children}</StyledSectionHeader>;
};

export default SectionHeader;
