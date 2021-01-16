import React from "react";
import styled from "styled-components";
import Para from "./Para";

const StyledPlace = styled.div`
  margin-top: 1rem;
  --webkit-column-break-inside: avoid;
  break-inside: avoid;
  h3 {
    font-size: 1.3rem;
    color: #a4000e;
    font-family: "Ubuntu", sans-serif;
    margin: 0 0 0.4rem 0;
    .dateText {
      display: block;
      font-size: 0.78em;
      opacity: 0.7;
      color: #111;
      line-height: 1;
    }
  }
`;

const Place = ({ time, place, children }) => {
  return (
    <StyledPlace>
      <h3>
        <span class="dateText">{time}</span>
        {place}
      </h3>
      <Para>{children}</Para>
    </StyledPlace>
  );
};

export default Place;
