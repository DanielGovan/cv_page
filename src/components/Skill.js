import React from "react";
import styled from "styled-components";
import Para from "./Para";

const StyledSkill = styled.div`
  h4 {
    color: #a4000e;
    font-family: "Ubuntu", sans-serif;
    margin: 0 0 0.2rem;
  }
`;

const Skill = ({ title, children }) => {
  return (
    <StyledSkill>
      <h4>{title}</h4> <Para>{children}</Para>
    </StyledSkill>
  );
};

export default Skill;
