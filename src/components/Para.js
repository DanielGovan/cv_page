import React from "react";
import styled from "styled-components";

const StyledPara = styled.p`
  font-size: 1.2rem;
  line-height: 1.2;
  padding: 0;
  margin: 0.5rem 0 1rem 0.5rem;

  @media print {
    font-size: 0.9rem !important;
    line-height: 1.1 !important;
    margin: 0.4rem 0 0.4rem 0 !important;
  }
`;

const Para = ({ children }) => {
  return <StyledPara>{children}</StyledPara>;
};

export default Para;
