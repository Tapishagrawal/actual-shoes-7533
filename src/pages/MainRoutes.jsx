import React from "react";
import { Men } from "../components/Men";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";

import { Women } from "../components/Women";

import { Login } from "./Login";
import { Admin } from "./Admin";
import { PrivateRoute } from "../components/PrivateRoute";

import { Payment } from "../components/Payment";

import { SingleProduct } from "../components/SingleProduct";
import { Cart } from "./Cart";
import { WishList } from "./WishList";
import Dashboard from "../components/Dashboard";
import Products from "../components/Products";
import Operations from "../components/Operations";
import EditProduct from "../components/EditProduct";
import Deshboard from "../components/Dashboard"

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />

      <Route path="/women" element={<Women />} />
      <Route path={"/singleProductMen/:id"} element={<SingleProduct />} />
      <Route path={"/singleProductWomen/:id"} element={<SingleProduct />} />
      <Route path={"/wishList"} element={<WishList />} />
      <Route path={"/cart"} element={<Cart />} />
      <Route
        path="/deshboard"
        element={
          // <PrivateRoute>
          <Deshboard />
          // </PrivateRoute>
        }
      />
      <Route path="/payment" element={<Payment />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id/edit" element={<EditProduct/>} />
      <Route path="/operations" element={<Operations />} />
      <Route path="/*" element={<h1>Page not Exist</h1>} />
    </Routes>
  );
};
