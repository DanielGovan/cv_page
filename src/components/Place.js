import React from "react";
import styled from "styled-components";
import Para from "./Para";
import Subheader from "./Subheader";

const StyledPlace = styled.div`
  @media screen {
    margin-bottom: 1rem;
  }
  margin-bottom: 0.5rem;
  --webkit-column-break-inside: avoid;
  break-inside: avoid;
`;

const Place = ({ time, place, children }) => {
  return (
    <StyledPlace>
      <Subheader>
        <span class="dateText">{time}</span>
        {place}
      </Subheader>
      <Para>{children}</Para>
    </StyledPlace>
  );
};

export default Place;
