import styled from "styled-components";

export const Main = styled.main`
   background: rgb(22, 46, 69);
   background: linear-gradient(
      360deg,
      rgba(22, 46, 69, 1) 0%,
      rgba(24, 67, 106, 1) 100%
   );
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
   padding-top: 88px;
   box-sizing: border-box;
   .content-scroll {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      overflow: auto;
      padding: 40px 50px;
   }
`;
