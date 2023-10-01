import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

export const SingleProduct = () => {
  const { id } = useParams();
  const location = useLocation();
  const [Product, setProduct] = useState({});
  // console.log(location.pathname)
  const productMen = useSelector((store) => store.menReducer.products);
  const productWomen = useSelector((store) => store.womenReducer.products);

  useEffect(() => {
    if (location.pathname == `/singleProductMen/${id}`) {
      const product = productMen.find((el) => el.id === +id);
      setProduct(product);
    } else if (location.pathname == `/singleProductWomen/${id}`) {
      const product = productWomen.find((el) => el.id === +id);
      setProduct(product);
    }
  }, [Product]);

  return (
    <DIV>
      <div className="main">
        <div className="img-show">
          <img
            src={Product.image}
            alt=""
          />
        </div>
        <div className="details-show">
          <h2>{Product.brand}</h2>
          <p className="p-large">{Product.category}</p>
          <p className="p-large">₹{Product.price}</p>
          <div className="btn-sizes">
            <p>Select Size</p>
            <button className="mk-cr">S</button>
            <button className="mk-cr">M</button>
            <button className="mk-cr">L</button>
            <button className="mk-br">XL</button>
          </div>
          <div className="add-cart">
            <button class="button-40" role="button">
              {" "}
              👜 ADD TO BAG
            </button>
            <p>HANDPICKED STYLES | ASSURED QUALITY</p>
            <button class="button-40" role="button">
              ❣️ SAVE TO WISHLIST
            </button>
          </div>
          <div className="product-details">
            <h3>Product Details</h3>
            <ul>
              <li>Fit: Regular Fit</li>
              <li>Package Contents: 1 {Product.category}</li>
              <li>Care Instructions: Machine wash</li>
              <li>Material: Cotton</li>
              <li>Product Code: 463775643003</li>
            </ul>
          </div>
        </div>
      </div>
    </DIV>
  );
};
const DIV = styled.div`
  .main {
    display: flex;
    justify-content: center;
    width: 60%;
    margin: auto;
    margin-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  .details-show {
    text-align: center;
    padding: 20px;
    padding-left: 40px;
  }
  .p-large {
    font-size: larger;
    margin: 5px;
  }
  .mk-br {
    background-color: white;
    border-radius: 50px;
    padding: 11px;
    border: 0.5px solid lightgray;
    margin: 5px;
  }
  .mk-br:hover {
    color: white;
    background-color: gray;
  }

  .mk-cr {
    background-color: white;
    border-radius: 50px;
    padding: 11px 15px;
    border: 0.5px solid lightgray;
    margin: 5px;
  }
  .mk-cr:hover {
    color: white;
    background-color: gray;
  }
  .add-cart button {
    width: 300px;
    padding: 10px;
    background-color: rgb(240, 185, 85);
    border-color: #edbf69;
    margin-top: 20px;
    font-size: large;
    color: white;
  }
  h2 {
    font-weight: normal;
    color: #edbf69;
    margin-bottom: 5px;
  }
  #btn-nonclr {
    background-color: white;
    border-color: rgb(237, 188, 98);
    color: rgb(237, 188, 98);
    font-size: large;
  }
  .add-cart p {
    font-size: smaller;
    margin-top: 4px;
    color: rgb(194, 161, 161);
  }
  .product-details {
    text-align: left;
  }
  /* CSS */
  .button-40 {
    background-color: #111827;
    border: 1px solid transparent;
    border-radius: 0.75rem;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    flex: 0 0 auto;
    font-family: "Inter var", ui-sans-serif, system-ui, -apple-system, system-ui,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.5rem;
    padding: 0.75rem 1.2rem;
    text-align: center;
    text-decoration: none #6b7280 solid;
    text-decoration-thickness: auto;
    transition-duration: 0.2s;
    transition-property: background-color, border-color, color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: auto;
  }

  .button-40:hover {
    background-color: #374151;
  }

  .button-40:focus {
    box-shadow: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    .button-40 {
      padding: 0.75rem 1.5rem;
    }
  }
`;
