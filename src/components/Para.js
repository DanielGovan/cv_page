import React from "react";
import styled from "styled-components";

const StyledPara = styled.p`
  font-size: 1.2rem;
  line-height: 1.2;
  padding: 0;
  margin: 0 0 0.5rem 0.5rem;

  @media print {
    font-size: 1rem !important;
    line-height: 1 !important;
    margin: 0 0 0.2rem 0.2rem !important;
  }
`;

const Para = ({ children }) => {
  return <StyledPara>{children}</StyledPara>;
};

export default Para;
