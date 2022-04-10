import styled from "styled-components";

interface Props {
   isSidebarClosed: boolean;
}

export const SidebarContainer = styled.div`
   height: 100%;
   background-color: black;
   transition: width 0.8s, min-width 0.8s, max-width 0.8s;
   overflow: hidden;
   padding-top: 120px;
   width: ${({ isSidebarClosed }: Props) =>
      isSidebarClosed
         ? `width: 71.5px;min-width:71.5px;max-width:71.5px`
         : `width: 270px;min-width:270px;max-width:270px`};
`;

export const Menu = styled.ul`
   list-style-type: none;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0;
   padding: 0;
   a {
      text-decoration: none;
      display: flex;
      align-items: center;
      &:visited {
         color: inherit;
      }
   }
   p {
      margin-left: 15px;
      ${({ isSidebarClosed }: Props) =>
         isSidebarClosed ? "display: none;" : null}
   }
   li {
      margin-bottom: 60px;
   }
`;
