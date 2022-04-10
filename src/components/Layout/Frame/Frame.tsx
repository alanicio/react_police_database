import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Frame = () => {
   const [isSidebarClosed, setIsSidebarClosed] = useState<boolean>(true);
   return (
      <>
         <Header {...{ isSidebarClosed, setIsSidebarClosed }} />
         <Sidebar {...{ isSidebarClosed, setIsSidebarClosed }} />
      </>
   );
};

export default Frame;
