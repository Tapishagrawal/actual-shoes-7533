import React from "react";
import { Men } from "../components/Men";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";


export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/men" element={<Men/>} />
      <Route path="/*" element={<h1>Page not Exist</h1>} />
    </Routes>
  );
};