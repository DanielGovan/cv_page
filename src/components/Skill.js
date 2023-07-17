import React from "react";
import styled from "styled-components";
import Para from "./Para";
import Subheader from "./Subheader";

const StyledSkill = styled.div`
  --webkit-column-break-inside: avoid;
  break-inside: avoid;
  h3 {
    margin: 0;
  }
  @media print {
    margin-top: 0.4rem;
    h3 {
      margin-right: 0.2rem;
      /* display: inline; */
      line-height: 1;
    }
  }
`;

const Skill = ({ title, children }) => {
  return (
    <StyledSkill>
      <Subheader>{title}</Subheader>
      <Para>{children}</Para>
    </StyledSkill>
  );
};

export default Skill;
