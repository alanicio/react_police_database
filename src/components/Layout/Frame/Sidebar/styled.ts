import styled from "styled-components";

interface Props {
   isSidebarClosed: boolean;
}

export const SidebarContainer = styled.div`
   height: 100%;
   background-color: black;
   transition: width 0.8s, min-width 0.8s, max-width 0.8s;
   overflow: hidden;
   width: ${({ isSidebarClosed }: Props) =>
      isSidebarClosed
         ? `width: 0;min-width:0;max-width:0`
         : `width: 270px;min-width:270px;max-width:270px`};
`;

export const Menu = styled.ul``;
