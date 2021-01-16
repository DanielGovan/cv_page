import React from "react";
import styled from "styled-components";

const StyledNoColWrap = styled.div`
  --webkit-column-break-inside: avoid;
  break-inside: avoid;
`;

const NoColWrap = ({ children }) => {
  return <StyledNoColWrap>{children}</StyledNoColWrap>;
};

export default NoColWrap;
