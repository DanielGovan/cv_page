import React from "react";
import styled from "styled-components";

const StyledSubheader = styled.h3`
  font-size: 1.3rem;
  color: #a4000e;
  font-family: "Ubuntu", sans-serif;
  margin: 0 0 0.4rem 0;

  @media print {
    font-size: 1rem;
    margin: 0;
  }

  .dateText {
    display: block;
    font-size: 0.78em;
    opacity: 0.7;
    color: #111;
    line-height: 1;

    @media print {
      font-size: 0.78em;
    }
  }
`;

const Subheader = ({ children }) => {
  return <StyledSubheader>{children}</StyledSubheader>;
};

export default Subheader;
