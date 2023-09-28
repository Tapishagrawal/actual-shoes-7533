import React from "react";
import { Men } from "../components/Men";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Women } from "../components/Women";


export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/men" element={<Men/>} />
      <Route path="/women" element={<Women/>} />
      <Route path="/*" element={<h1>Page not Exist</h1>} />
    </Routes>
  );
};
