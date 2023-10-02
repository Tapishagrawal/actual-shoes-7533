import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom"
import { edit_product } from "../redux/Admin/action";

const EditProduct = () => {
  const { id } = useParams();
  const nav = useNavigate();
const products = useSelector((store)=> store.adminReducer.adminProd);

  const [editData, seteditdata] = useState({});

  const dispatch = useDispatch();

  const handle_edit = () => {
    console.log(editData);
    dispatch(edit_product(id, editData));

    nav("/");
  }

  const handle_change = (e) => {
    let obj = { ...editData };
    obj[e.target.name] = +e.target.value;
    seteditdata(obj);
  };

  useEffect(() => {
    const prodata = products.find((item) => item.id === +id);
    console.log(prodata);
    prodata && seteditdata(prodata);
  }, []);

  return (
    <div>
      <h1>Edit Product</h1>

      <input
        type="text"
        placeholder="Name"
        value={editData.name}
        name="name"
        onChange={(e) => handle_change(e)}
      />
      <input
        type="text"
        placeholder="Image"
        value={editData.image}
        name="image"
        onChange={(e) => handle_change(e)}
      />
      <input
        type="text"
        placeholder="Brand"
        value={editData.brand}
        name="brand"
        onChange={(e) => handle_change(e)}
      />
      <input
        type="number"
        placeholder="Price"
        value={editData.price}
        name="price"
        onChange={(e) => handle_change(e)}
      />

      <button onClick={handle_edit}>submit</button>
    </div>
  );
};

export default EditProduct;
