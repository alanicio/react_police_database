import React from "react";
import { Outlet } from "react-router-dom";
import Frame from "./Frame";
import { Content, Main } from "./styled";

const Layout = () => {
   return (
      <Main>
         <Frame />
         <Content>
            <div className="content-scroll">
               <Outlet />
            </div>
         </Content>
      </Main>
   );
};

export default Layout;
