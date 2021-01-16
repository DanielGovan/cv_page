import React from "react";
import styled from "styled-components";

const StyledLink = styled.div`
  font-family: "Ubuntu", sans-serif;
  padding: 5px;
  margin: 0 10px 0 0;
  display: inline-block;
  a {
    color: #a4000e;
    border: none !important;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    position: relative;
    bottom: -2px;
    margin-right: 5px;
  }

  @media print {
    [data-print]:after {
      content: " " attr(data-print) " ";
      font-family: monospace;
    }
  }
`;

const FooterLink = ({ print, href, children }) => {
  return (
    <StyledLink data-print={print}>
      <a target="_blank" rel="noreferrer" href={href}>
        {children}
      </a>
    </StyledLink>
  );
};

export default FooterLink;
