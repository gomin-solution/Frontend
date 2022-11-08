import React from "react";
import styled, { css } from "styled-components";

export default function Button({ children, ...restProps }) {
  return <Btn {...restProps}>{children}</Btn>;
}

const Btn = styled.button`
  ${({ btn }) => {
    switch (btn) {
      case "btn1":
        return btn1;
      case "btn2":
        return btn2;
      case "btn3":
        return btn3;
      default:
        break;
    }
  }}
`;

export const btn1 = css`
  width: 381px;
  height: 62px;
  background-color: white;
  /* color: white; */
  border: none;
  transition: all 0.2s linear;
  font-size: 16px;
  margin: 0;
  bottom: 65px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #2ac1bc;
    border: 1px solid #2ac1bc;
  }
`;
export const btn2 = css`
  width: 150px;
  height: 30px;
  border: none;
  background: var(--brand-color);
  color: white;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  border-radius: var(--sm-radius);
  cursor: pointer;
  &:hover {
    background: white;
    color: var(--brand-color);
    border: 1px solid var(--brand-color);
  }
`;
export const btn3 = css`
  font-size: 17px;
  width: 97px;
  height: 50px;
  background-color: white;
  border: none;

  &:focus {
    font-size: 18px;
    width: 110px;
    height: 50px;
    border: none;
    border-bottom: 4.5px solid var(--brand-color);
  }
`;
