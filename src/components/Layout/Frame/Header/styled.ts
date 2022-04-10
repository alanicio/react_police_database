import styled from "styled-components";

interface Props {
   isSidebarClosed: boolean;
}

export const HeaderContainer = styled.header<Props>`
   background-color: ${({ theme }) => theme.background.color1};
   position: fixed;
   top: 0;
   right: 0;
   transition: width 0.8s;
   width: ${({ isSidebarClosed }: Props) =>
      isSidebarClosed ? "100%" : "calc(100% - 200px)"};
   display: flex;
   align-items: center;
   padding-right: 1.5vw;
   box-sizing: border-box;
   color: ${({ theme }) => theme.text.color1};
   .sidebar-icon {
      margin-right: 40px;
      transition: transform 0.8s;
      height: 73px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 22px;
      ${({ isSidebarClosed }: Props) =>
         isSidebarClosed ? null : "transform: rotateY(180deg);"}
   }
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
