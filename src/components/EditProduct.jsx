import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom"
import { edit_product } from "../redux/Admin/action";
import Adminsidebar from "./Adminsidebar";

const EditProduct = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const products = useSelector((store) => store.adminReducer.adminProd);

  const [editData, seteditdata] = useState({});

  const dispatch = useDispatch();

  const handle_edit = () => {
    dispatch(edit_product(id, editData));
    return nav("/products");
  }

  const handle_change = (e) => {
    let obj = { ...editData };
    obj[e.target.name] = e.target.type==="number" ? +e.target.value : e.target.value;
    seteditdata(obj);
  };

  useEffect(() => {
    const prodata = products.find((item) => item.id === +id);
    console.log(prodata);
    prodata && seteditdata(prodata);
  }, []);

  return (
    <div className="flex gap-7">
      <div className='w-[15%]'>
        <Adminsidebar />
      </div>
      <div className="w-[80%] mt-24">
        <h1 className="text-2xl font-semibold text-zinc-600 border-b-2 mb-5">Edit Product</h1>
        <div className="flex flex-col gap-5">
          <input
            className="border py-1 px-2 rounded outline-orange-300"
            type="text"
            placeholder="Name"
            value={editData.name}
            name="name"
            onChange={(e) => handle_change(e)}
          />
          <input
            className="border py-1 px-2 rounded outline-orange-300"
            type="text"
            placeholder="Image"
            value={editData.image}
            name="image"
            onChange={(e) => handle_change(e)}
          />
          <input
            className="border py-1 px-2 rounded outline-orange-300"
            type="text"
            placeholder="Brand"
            value={editData.brand}
            name="brand"
            onChange={(e) => handle_change(e)}
          />
          <input
            className="border py-1 px-2 rounded outline-orange-300"
            type="number"
            placeholder="Price"
            value={editData.price}
            name="price"
            onChange={(e) => handle_change(e)}
          />
          <div className="text-center">
            <button className="bg-black text-white text-lg w-[10rem] py-2 rounded-sm hover:bg-yellow-700 transition" onClick={handle_edit}>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
