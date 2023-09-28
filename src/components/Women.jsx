import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import { Sidebar } from "./Sidebar";
import { useSearchParams } from "react-router-dom";
import { Box } from "@chakra-ui/layout";
import { getProducts } from "../redux/Women/action";

export const Women = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.menReducer.products);
  const [searchParams]=useSearchParams();
  const paramObj={
    params:{
      category:searchParams.getAll("category"),
      brand:searchParams.getAll("brand"),
      price_gte: searchParams.getAll("lowPrice"),
      price_lte: searchParams.getAll("highPrice"),
    }
  }
  useEffect(() => {
    dispatch(getProducts(paramObj));
  }, [searchParams]);
  return (
    <Box style={{display:"flex"}}>
      <Sidebar />
      <Box style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",width:"80%",gap:"10px"}}>
        {products?.length > 0 &&
          products.map((item) => <ProductCard key={item.id} {...item} />)}
      </Box>
    </Box>
  );
};
