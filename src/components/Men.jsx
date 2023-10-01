import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, toggleAddToCart, toggleWishList } from "../redux/Men/action";
import { ProductCard } from "./ProductCard";
import { Sidebar } from "./Sidebar";
import { useSearchParams } from "react-router-dom";
import { Box } from "@chakra-ui/layout";

export const Men = () => {
  const dispatch = useDispatch();
  const { products,isLoading } = useSelector((store) => {
    return {
      products:store.menReducer.products,
      isLoading:store.menReducer.isLoading
    }
  });
  const [searchParams] = useSearchParams();
  const paramObj = {
    params: {
      category: searchParams.getAll("category"),
      brand: searchParams.getAll("brand"),
      price_gte: searchParams.getAll("lowPrice"),
      price_lte: searchParams.getAll("highPrice"),
    },
  };
  const handleToggleWishList = (id, wishList) => {
    dispatch(toggleWishList(id, !wishList));
  }
  const handleToggleAddToCart = (id, addToCart) =>{
    dispatch(toggleAddToCart(id, !addToCart));
  }
  useEffect(() => {
    dispatch(getProducts(paramObj));
  }, [searchParams]);
  return (
    <Box style={{ display: "flex" }}>
      <Sidebar />
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          width: "80%",
          gap: "10px",
        }}
      >
        {products?.length > 0 &&
          products.map((item) => <ProductCard key={item.id} isLoading={isLoading} {...item} handleToggleWishList={handleToggleWishList} handleToggleAddToCart={handleToggleAddToCart} />)}
      </Box>
    </Box>
  );
};
