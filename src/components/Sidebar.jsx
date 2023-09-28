import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );
  const [brand, setBrand] = useState(searchParams.getAll("brand") || []);
  const [lowPrice, setLowPrice] = useState(
    searchParams.getAll("lowPrice") || []
  );
  const [highPrice, setHighPrice] = useState(
    searchParams.getAll("highPrice") || []
  );

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (category.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };
  const handleBrand = (e) => {
    const { value } = e.target;
    let newBrand = [...brand];
    if (brand.includes(value)) {
      newBrand = newBrand.filter((el) => el !== value);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };
  const handlePrice = (e) => {
    const { value } = e.target;
    let newLowPrice = [...lowPrice];
    let newHighPrice = [...highPrice];

    if (lowPrice.includes(value)) {
        newLowPrice = newLowPrice.filter((el) => el !== value);
        newHighPrice = newHighPrice.filter((el) => el !== +value+500);

    } else {
        newLowPrice.push(value);
        newHighPrice.push(+value+500);

    }
    setLowPrice(newLowPrice);
    setHighPrice(newHighPrice);
  };
  console.log(lowPrice,highPrice)
  useEffect(() => {
    const params = {
      category,
      brand,
      lowPrice,
      highPrice,
    };
    setSearchParams(params);
  }, [category, brand, lowPrice, highPrice]);

  return (
    <DIV>
      <h1>FILTERS</h1>
      <hr className="hr_line" />
      {/* Filter by Category starts  */}
      <h3 className="filter_heading">CATEGORIES</h3>
      <div className="filter_by_category">
        <div>
          <input
            type="checkbox"
            value={"Jacket"}
            onChange={handleCategory}
            checked={category.includes("Jacket")}
          />
          <span>Jacket</span>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Shirt"}
            onChange={handleCategory}
            checked={category.includes("Shirt")}
          />
          <span>Shirt</span>
        </div>
        <div>
          <input
            type="checkbox"
            value={"T-shirt"}
            onChange={handleCategory}
            checked={category.includes("T-shirt")}
          />
          <span>T-shirt</span>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Pants"}
            onChange={handleCategory}
            checked={category.includes("Pants")}
          />
          <span>Pants</span>
        </div>
      </div>
      <hr className="hr_line" />

      {/* Filter by Category ends  */}

      {/* Filter by Brand starts  */}
      <h3 className="filter_heading">BRANDS</h3>
      <div className="filter_by_category">
        <div>
          <input
            type="checkbox"
            value={"Zara"}
            onChange={handleBrand}
            checked={brand.includes("Zara")}
          />
          <span>Zara</span>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Prada"}
            onChange={handleBrand}
            checked={brand.includes("Prada")}
          />
          <span>Prada</span>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Levi's"}
            onChange={handleBrand}
            checked={brand.includes("Levi's")}
          />
          <span>Levi's</span>
        </div>
        <div>
          <input
            type="checkbox"
            value={"H&M"}
            onChange={handleBrand}
            checked={brand.includes("H&M")}
          />
          <span>H&M</span>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Nike"}
            onChange={handleBrand}
            checked={brand.includes("Nike")}
          />
          <span>Nike</span>
        </div>
      </div>
      <hr className="hr_line" />
      {/* Filter by Brand ends  */}

      {/* Filter by Price starts  */}
      <h3 className="filter_heading">Price</h3>
      <div className="filter_by_category">
        <div>
          <input
            type="checkbox"
            value={"500"}
            onChange={handlePrice}
            checked={lowPrice.includes("500")}
          />
          <span>Rs 999 to Rs 1999</span>
        </div>
        <div>
          <input
            type="checkbox"
            value={"1999"}
            onChange={handlePrice}
            checked={lowPrice.includes("1999")}
          />
          <span>Rs 1999 to Rs 2999</span>
        </div>
        <div>
          <input
            type="checkbox"
            value={"2999"}
            onChange={handlePrice}
            checked={lowPrice.includes("2999")}
          />
          <span>Rs 2999 to Rs 3999</span>
        </div>
        <div>
          <input
            type="checkbox"
            value={"3999"}
            onChange={handlePrice}
            checked={lowPrice.includes("3999")}
          />
          <span>Rs 3999 to Rs 4999</span>
        </div>
        <div>
          <input
            type="checkbox"
            value={"4999"}
            onChange={handlePrice}
            checked={lowPrice.includes("4999")}
          />
          <span>Rs 4999 to Rs 5999</span>
        </div>
      </div>
      <hr className="hr_line" />
      {/* Filter by Brand ends  */}
    </DIV>
  );
};
const DIV = styled.div`
  width: "20%";
  margin: 20px;
  .hr_line {
    margin: 5px;
  }
  .filter_heading {
    margin: 8px;
  }
  .filter_by_category > div {
    margin-left: 8px;
    gap: 10px;
    display: flex;
  }
`;
