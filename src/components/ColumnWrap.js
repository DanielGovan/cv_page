import React from "react";
import styled from "styled-components";

const StyledColumnWrap = styled.div`
  @media screen and (min-width: 1000px) {
    column-count: 2;
    column-width: 200px;
  }
  @media print {
    column-count: 2;
    column-width: 200px;
  }
`;

const ColumnWrap = ({ children }) => {
  return <StyledColumnWrap>{children}</StyledColumnWrap>;
};

export default ColumnWrap;
