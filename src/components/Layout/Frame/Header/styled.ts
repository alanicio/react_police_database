import styled from "styled-components";

export const HeaderContainer = styled.header`
   background-color: ${({ theme }) => theme.background.color1};
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   display: flex;
   align-items: center;
   padding: 12px 1.5vw;
   box-sizing: border-box;
   color: ${({ theme }) => theme.text.color1};
   .police-logo {
      width: 50px;
      margin-right: 1vw;
   }
   input {
      padding: 5px;
      margin-left: 10px;
   }
   label {
      margin-left: auto;
   }
`;
