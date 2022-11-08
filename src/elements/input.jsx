import React from "react";
import styled, { css } from "styled-components";

export default function Input({ children, ...restProps }) {
  return <Inp {...restProps}>{children}</Inp>;
}

const Inp = styled.input`
  ${({ inp }) => {
    switch (inp) {
      case "inp1":
        return inp1;
      case "inp2":
        return inp2;
      case "inp3":
        return inp3;
      default:
        break;
    }
  }}
`;

export const inp1 = css`
  width: 340px;
  height: 60px;
  font-size: 16px;
  border: 2px solid #999;
  border-radius: 6px;
  transition: all 0.3s linear;
  &:focus {
    border: 2px solid #2ac1bc;
    outline: none;
  }
`;

export const inp2 = css`
  width: 361px;
  height: 61px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #999;

  transition: all 0.2s linear;
  &:focus {
    border-bottom: 2px solid var(--brand-color);
    outline: none;
  }
`;
export const inp3 = css`
  width: 266px;
  height: 33px;
  font-size: 16px;
  border: 3px solid #f3f3f3;

  transition: all 0.2s linear;
  &:focus {
    border: 3px solid var(--brand-color);
    outline: none;
  }
`;
