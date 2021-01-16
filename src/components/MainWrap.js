import React from "react";
import styled from "styled-components";

const StyledMainWrap = styled.div`
  max-width: 1200px;
  font-size: 1.4rem;
  font-family: "Lora", serif;
  margin: 0 auto;
  line-height: 1.2;
  color: #333;
  background: #fff;
  padding: 1rem;

  @media print {
    @page {
      margin: 0.5cm;
    }
  }
`;

const MainWrap = ({ children }) => {
  return <StyledMainWrap>{children}</StyledMainWrap>;
};

export default MainWrap;
