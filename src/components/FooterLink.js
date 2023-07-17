import React from "react";
import styled from "styled-components";

const StyledLink = styled.div`
  font-family: "Ubuntu", sans-serif;
  padding: 0;
  margin: 0 0.5rem 0 0;
  display: inline-block;
  a {
    color: #a4000e;
    border: none !important;
    text-decoration: none;
    margin-right: 10px;
    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    position: relative;
    bottom: -0.2rem;
    margin-right: 0.5rem;
  }

  @media print {
    &.noprint {
      display: none;
    }

    font-size: 0.8rem;
    margin: 0;
    padding: 0;
    content: " ";

    &[data-print]:after {
      content: " " attr(data-print) " ";
      font-family: monospace;
      margin-right: 10px;
    }

    a {
      margin: 0;
      padding: 0;
    }
  }
`;

const FooterLink = ({ print, href, children, flag }) => {
  return (
    <StyledLink className={flag} data-print={print}>
      <a target="_blank" rel="noreferrer" href={href}>
        {children}
      </a>
    </StyledLink>
  );
};

export default FooterLink;
