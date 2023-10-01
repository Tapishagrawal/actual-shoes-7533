import React from "react";
import { Men } from "../components/Men";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";

import { Women } from "../components/Women";

import { Login } from "./Login";
import { Admin } from "./Admin";
import { PrivateRoute } from "../components/PrivateRoute";
import { Payment } from "../components/Payment";



export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/men" element={<Men/>} />

      <Route path="/women" element={<Women/>} />

      <Route path="/login" element={<Login/>} />
      <Route path="/admin" element={
        <PrivateRoute>
          <Admin/>
        </PrivateRoute>
      } />      

      <Route path="/payment" element={<Payment/>}/>

      <Route path="/*" element={<h1>Page not Exist</h1>} />
    </Routes>
  );
};
