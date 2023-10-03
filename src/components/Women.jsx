import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import { Sidebar } from "./Sidebar";
import { useSearchParams } from "react-router-dom";
import { Box } from "@chakra-ui/layout";
import styled from "styled-components";
import { getProducts, toggleWishList } from "../redux/Women/action";
import { setDataInLocal, setWishListDataInLocal } from "../redux/localReducer/action";

export const Women = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.womenReducer.products);
  const [searchParams]=useSearchParams();
  const paramObj={
    params:{
      category:searchParams.getAll("category"),
      brand:searchParams.getAll("brand"),
      price_gte: searchParams.getAll("lowPrice"),
      price_lte: searchParams.getAll("highPrice"),
    }
  }
  const handleAddcart = (product) => {
    dispatch(setDataInLocal("cartData", product))
  }
  const handleAddInWishList = (product) => {
    dispatch(setWishListDataInLocal("wishListData", product))
  }
  useEffect(() => {
    dispatch(getProducts(paramObj));
  }, [searchParams]);
  return (
    <DIV>
    <Box  className="Box-1">
      <Sidebar />
      <Box className="Box-2">
        {products?.length > 0 &&
          products.map((item) => <ProductCard key={item.id} {...item} handleAddcart={handleAddcart} handleAddInWishList={handleAddInWishList} />)}
      </Box>
    </Box>
    </DIV>
  );
};

const DIV= styled.div`
.Box-1{
  display:flex;
}
.Box-2{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  width:80%;
  gap:10px;
  margin:auto;
}
@media screen and (max-width: 768px) {
    .Box-2 {
      grid-template-columns: repeat(3, 1fr);
      width:100%;
      gap:20px;
      margin-left:10%;
    }
  }
@media screen and (max-width: 480px) {
  .Box-1{
    flex-direction:column;
  }
    .Box-2 {
      grid-template-columns: repeat(1, 1fr);
      width:100%;
      padding:5%;
    }
  }

`;