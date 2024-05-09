import styled, { css } from "styled-components";

import { MyAnimation } from "../styles/animation/Animations";

type StyledBtnPropsType = {
  color?: string;
  fontSize?: string;
  btntype: "primary" | "outlined";
  active?: boolean;
  // primary?: boole an;
  // outlined?: boolean;
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: 0cm;
  /* background-color: #86182e; */
  background-color: ${(props) => props.color || "#86182e"}; // по умолчанию
  padding: 10px 20px;
  //border-radius: 5px;
  color: snow;
  //font-size: 2rem;
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: bold;
  border-radius: 10px;

  /* &:last-child {
    background-color: green;
  } */

  //outlined
  ${(props) =>
    props.btntype === "outlined" &&
    css<StyledBtnPropsType>`
      border: 2px solid ${(props) => props.color || "#86182e"};
      color: ${(props) => props.color || "#86182e"};
      background-color: transparent;

      &:hover {
        border-color: aqua;
        color: aqua;
        background: transparent;
      }
    `}

  //primary
    ${(props) =>
    props.btntype === "primary" &&
    css<StyledBtnPropsType>`
      background-color: ${(props) => props.color || "#86182e"};
      color: snow;

      // same & = button
      &:hover {
        background-color: aqua;
      }
    `}

    ${(props) =>
    props.active &&
    css<StyledBtnPropsType>`
      box-shadow: 5px 5px 5px 5px gray;
    `}
`;

// РАСШИРЕНИЕ На Базе StyledBtn
export const SupetButton = styled(StyledBtn)`
  border-radius: 5px;
  color: black;
  background-color: yellow;

  &:hover {
    animation: ${MyAnimation} 2s infinite; // добавляем анимацию
  }
`;
