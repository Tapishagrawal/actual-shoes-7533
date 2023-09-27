import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/Men/action";
import { ProductCard } from "./ProductCard";

export const Men = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.menReducer.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      {products?.length > 0 &&
        products.map((item) => <ProductCard key={item.id} {...item} />)}
    </div>
  );
};
