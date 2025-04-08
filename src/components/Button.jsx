import React from 'react';
import styled from 'styled-components';

const Button = ({ title, href, download}) => {
  return (
    <StyledWrapper>
      <a
        className="btn-donate"
        href={href}
        download={download}
        target='_blank'
      >
        {title}
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn-donate {
    --clr-font-main: hsla(0 0% 20% / 100);
    --btn-bg-1: hsla(194 100% 69% / 1);
    --btn-bg-2: hsla(217 100% 56% / 1);
    --btn-bg-color: hsla(360 100% 100% / 1);
    --radii: 0.5em;
    cursor: pointer;
    padding: 0.9em 1.5em;
    min-width: 120px;
    min-height: 44px;
    padding: 0.6em 1.2em;
    height: 2.4em;
    font-size: var(--size, 1rem);
    font-weight: 500;
    transition: 0.8s;
    background-size: 280% auto;
    background-image: linear-gradient(
      325deg,
      var(--btn-bg-2) 0%,
      var(--btn-bg-1) 55%,
      var(--btn-bg-2) 90%
    );
    border: none;
    border-radius: var(--radii);
    color: var(--btn-bg-color);
    box-shadow:
      0px 0px 20px rgba(71, 184, 255, 0.5),
      0px 5px 5px -1px rgba(58, 125, 233, 0.25),
      inset 4px 4px 8px rgba(175, 230, 255, 0.5),
      inset -4px -4px 8px rgba(19, 95, 216, 0.35);
  }

  .btn-donate:hover {
    background-position: right top;
  }

.btn-donate:is(:focus, :focus-visible, :active) {
  outline: none;
  box-shadow: none;
}

  @media (prefers-reduced-motion: reduce) {
    .btn-donate {
      transition: linear;
    }
  }`;

export default Button;
