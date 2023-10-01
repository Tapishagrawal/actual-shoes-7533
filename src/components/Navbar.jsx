import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { LoginPageContext } from "../Context/LoginPageContextProvider";
import { useDispatch } from "react-redux";
import { getProducts as getWomenProducts } from "../redux/Women/action";
import { getProducts as getMenProducts } from "../redux/Men/action";

export const Navbar = () => {
  const location = useLocation();
  const { handleToggleLoginPage } = useContext(LoginPageContext);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = () => {
    const paramObj = {
      params: {
        q: search,
      },
    };

    if (location.pathname === "/men") {
      dispatch(getMenProducts(paramObj));
    } else if (location.pathname === "/women") {
      dispatch(getWomenProducts(paramObj));
    }

    setSearch("");
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <div className="flex items-center gap-40 justify-center py-4 border-b-2 sticky top-0 left-0 w-full bg-white z-[999]">
      <div>
        <Link to="/" className="font-bold text-3xl">
          Clothly.
        </Link>
      </div>
      <div className="flex items-center gap-7">
        <Link to="/">Home</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/winter">Winter</Link>
        <Link to="/sale">Sale</Link>

        <Link to="/login">Login</Link>
        <Link to="/payment">Payment</Link>


      </div>
      <div className="flex items-center gap-5 ">
        <div className="flex items-center gap-8">
          {location.pathname !== "/" && (
            <div className="border border-neutral-400 hover:border-blue-600 w-[14.5rem] flex items-center rounded outline-none py-1 px-2">
              <input
                type="text"
                className="outline-none"
                value={search}
                onChange={handleChange}
              />
              <div onClick={handleSubmit}>
                <HiOutlineSearch className="h-5 w-5 text-zinc-700 cursor-pointer" />
              </div>
            </div>
          )}
          <div>
            <AiOutlineHeart className="h-6 w-6 cursor-pointer" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <p>Cart</p>
            <span className="bg-black text-white p-[0.30rem] px-3 mx-1 rounded-full">
              0{/* This have to be dynamic value */}
            </span>
          </div>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-black text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={handleToggleLoginPage}
              className="bg-black text-white px-3 py-1 rounded"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
