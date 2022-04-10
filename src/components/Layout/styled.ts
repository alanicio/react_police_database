import styled from "styled-components";

export const Main = styled.main`
   background: ${({ theme }) => theme.background.gradient};
   width: 100vw;
   height: 100vh;
   color: white;
   display: flex;
`;

export const Content = styled.div`
   width: 100%;
   height: 100%;
   max-width: 100%;
   max-height: 100%;
   padding-top: 73px;
   box-sizing: border-box;
   .content-scroll {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      overflow: auto;
      padding: 40px 50px;
   }
`;
