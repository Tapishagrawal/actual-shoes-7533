import React from "react";
import { Men } from "../components/Men";
import { Route, Routes } from "react-router-dom";


export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="men" element={<Men/>} />
    </Routes>
  );
};
