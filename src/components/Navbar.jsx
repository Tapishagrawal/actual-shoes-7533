import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineSearch, HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { LoginPageContext } from "../Context/LoginPageContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as getWomenProducts } from "../redux/Women/action";
import { getProducts as getMenProducts } from "../redux/Men/action";

export const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false)
  const location = useLocation();
  const { handleToggleLoginPage } = useContext(LoginPageContext);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );
  const cardLocalDataCount = useSelector(store => store.localReducer.addCartData).length || 0

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

  const handleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible)
  }

  return (
    <div className={`flex items-center justify-between px-3 py-4 border-b-2 sticky top-0 left-0 w-full bg-white z-[999]`}>
      <div className="flex items-center justify-between max-[900px]:w-full  mr-5">
        <Link to="/" className="font-bold text-3xl">
          Clothly.
        </Link>
        <span onClick={handleMobileMenu} className="hidden max-[900px]:inline">
          {isMobileMenuVisible ? <AiOutlineClose className="text-2xl" /> : <HiMenuAlt1 className="text-2xl" />}
        </span>
      </div>
      <div className="flex items-center gap-7 max-[900px]:hidden">
        <Link to="/">Home</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/winter">Winter</Link>
        <Link to="/sale">Sale</Link>
        {/* <Link to="/payment">Payment</Link> */}
      </div>
      <div className="relative min-[900px]:hidden">
        <div className={`flex gap-4 w-[170px] flex-col fixed top-[4.3rem] -right-3 p-1 px-3 shadow-[0px_13px_29px_0px_rgba(100,100,111,0.4)] bg-white h-[100vh] ${isMobileMenuVisible ? "" : "-right-[300px]"} transition-all duration-500`}>
          <Link className="border-b mt-4" to="/">Home</Link>
          <Link className="border-b" to="/men">Men</Link>
          <Link className="border-b" to="/women">Women</Link>
          <Link className="border-b" to="/accessories">Accessories</Link>
          <Link className="border-b" to="/winter">Winter</Link>
          <Link className="border-b" to="/sale">Sale</Link>
          {/* <Link to="/payment">Payment</Link> */}
          <div className="relative min-[426px]:hidden border-b pb-1">
            <AiOutlineHeart className="h-6 w-6 cursor-pointer" />
            <span className="absolute -top-1 left-4 bg-black text-white px-1 rounded-full text-[0.6rem]">0</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer min-[426px]:hidden border-b pb-1">
            <Link to="/cart">Cart</Link>
            <span className="bg-black text-white p-[0.30rem] px-3 mx-1 rounded-full">
              {cardLocalDataCount}
            </span>
          </div>
          <div className="min-[426px]:hidden">
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-black text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            ) : (
              <Link
                onClick={handleToggleLoginPage}
                className="bg-black text-white px-3 py-1 rounded"
              >
                Login
              </Link>
            )}

          </div>
        </div>
        <div className="flex items-center gap-3">

        </div>
      </div>
      <div className="flex items-center gap-3 max-[426px]:hidden">
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
        <div className="relative">
          <AiOutlineHeart className="h-6 w-6 cursor-pointer" />
          <span className="absolute -top-1 -right-2 bg-black text-white px-1 rounded-full text-[0.6rem]">0</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <Link to="/cart">Cart</Link>
          <span className="bg-black text-white p-[0.30rem] px-3 mx-1 rounded-full">
            {cardLocalDataCount}
          </span>
        </div>
        <div>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-black text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <Link
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
