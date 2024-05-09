import styled from "styled-components"

import { MyAnimation } from "../styles/animation/Animations"

export const StyledBtn = styled.button`
  border: 0cm;
  background-color: #86182e;
  padding: 10px 20px;
  //border-radius: 5px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  // same & = button
  &:hover {
    background-color: aqua;
  }

  &:last-child{
    background-color: green;
  }

`

// РАСШИРЕНИЕ На Базе StyledBtn
export const SupetButton = styled(StyledBtn)`
  border-radius: 5px;
  color: black;
  background-color: yellow;
  
  &:hover{
    animation: ${MyAnimation} 2s infinite; // добавляем анимацию
  }
`