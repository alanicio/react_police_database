import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<Layout />}>
               <Route index element={<Home />} />
               <Route index element={<Home />} />
               <Route path="*" />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
