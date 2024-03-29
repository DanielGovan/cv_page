import React from "react";
import styled from "styled-components";
import Subheader from "./Subheader";

const StyledPlace = styled.div`
  @media screen {
    margin-bottom: 1rem;
  }
  margin-bottom: 0.5rem;
  --webkit-column-break-inside: avoid;
  break-inside: avoid;
`;

const Place = ({ time, place, type, children }) => {
  return (
    <StyledPlace>
      <Subheader>
        {place}
        <span className="dateText">{time}</span>
        <span className="dateText">{type}</span>
      </Subheader>
      {children}
    </StyledPlace>
  );
};

export default Place;
