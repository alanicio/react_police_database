import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Frame from "./Frame";
import { Content, Main } from "./styled";
import { defaultTheme } from "./themes";

const Layout = () => {
   return (
      <ThemeProvider theme={defaultTheme}>
         <Main>
            <Frame />
            <Content>
               <div className="content-scroll">
                  <Outlet />
               </div>
            </Content>
         </Main>
      </ThemeProvider>
   );
};

export default Layout;
