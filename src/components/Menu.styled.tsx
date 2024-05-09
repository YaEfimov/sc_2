import { styled } from "styled-components";

export const Menu = styled.nav`
  
  ul{
    list-style-type: none;
    padding: 0;
    display: flex;
    
    // Комбинатор, ссылки, которые вложены в li
    li > a {
      color: green;
    }
    
    // li идут друг за другом 
    li + li {
      margin-left: 20px;
    }

  }
`