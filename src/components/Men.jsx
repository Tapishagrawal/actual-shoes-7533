import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, toggleAddToCart, toggleWishList } from "../redux/Men/action";
import { ProductCard } from "./ProductCard";
import { Sidebar } from "./Sidebar";
import { useSearchParams } from "react-router-dom";
import { Box } from "@chakra-ui/layout";
import styled from "styled-components";
import { setDataInLocal, setDeletedDataInLocal, setDeletedWishListDataInLocal, setWishListDataInLocal } from "../redux/localReducer/action";

export const Men = () => {
  const dispatch = useDispatch();
  const localCartData = useSelector((store) => store.localReducer.addCartData);
  const localWishListData = useSelector((store) => store.localReducer.wishListData);

  const { products, isLoading } = useSelector((store) => {
    return {
      products: store.menReducer.products,
      isLoading: store.menReducer.isLoading
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

  const handleDeleteCartData = (product) => {
    dispatch(toggleAddToCart(product.id, !product.addToCart))
    let existingCartItems = localCartData.filter(data => data.id !== product.id);
    dispatch(setDeletedDataInLocal("cartData", existingCartItems))
  }

  const handleAddcart = (product) => {
    dispatch(toggleAddToCart(product.id, !product.addToCart))
    product.addToCart = true
    dispatch(setDataInLocal("cartData", product));
  }


  const handleAddInWishList = (product) => {
    dispatch(toggleWishList(product.id, !product.wishList))
    product.wishList = true
    dispatch(setWishListDataInLocal("wishListData", product))
  }

  const handleDeleteWishList = (product) => {
    dispatch(toggleWishList(product.id, !product.wishList))
    let existingCartItems = localWishListData.filter(data => data.id !== product.id);
    dispatch(setDeletedWishListDataInLocal("wishListData", existingCartItems))
  }
  useEffect(() => {
    dispatch(getProducts(paramObj));
  }, [searchParams]);
  return (
    <DIV>
      <Box className="Box-1">
        <Sidebar />
        <Box
          className="Box-2"
        >
          {products?.length > 0 &&
            products.map((item) => <ProductCard key={item.id} isLoading={isLoading} {...item} handleAddcart={handleAddcart} handleAddInWishList={handleAddInWishList} handleDeleteCartData={handleDeleteCartData} handleDeleteWishList={handleDeleteWishList} />)}
        </Box>
      </Box>
    </DIV>
  );
};
const DIV = styled.div`
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
