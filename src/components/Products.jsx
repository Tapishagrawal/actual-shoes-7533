import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delet_prod, getAdminpro } from "../redux/Admin/action";
import { Link } from "react-router-dom"
import Adminsidebar from "./Adminsidebar";
import { TbHttpDelete } from "react-icons/tb"
import { CiEdit } from "react-icons/ci"

const Products = () => {
  const dispatch = useDispatch();

  const product = useSelector((store) => store.adminReducer.adminProd);


  useEffect(() => {
    dispatch(getAdminpro);
  }, []);

  const handleDelete = (id) => {
    dispatch(delet_prod(id));
  };


  return (
    <div className="flex gap-7">
      <div className='w-[15%]'>
        <Adminsidebar />
      </div>
      <div className="w-[80%] mt-24">
        <h1 className="text-2xl font-semibold text-zinc-600 border-b-2 mb-5">Admin Products</h1>
        <table className="min-w-full divide-y divide-gray-200 text-justify">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 border-b" >ID</th>
              <th className="py-2 px-4 bg-gray-100 border-b" >Brand</th>
              <th className="py-2 px-4 bg-gray-100 border-b" >Category</th>
              <th className="py-2 px-4 bg-gray-100 border-b" >Name</th>
              <th className="py-2 px-4 bg-gray-100 border-b" >Price</th>
              <th className="py-2 px-4 bg-gray-100 border-b" >Opt</th>
              <th className="py-2 px-4 bg-gray-100 border-b" >Edit</th>
            </tr>
          </thead>
          <tbody>
            {product.length > 0 &&
              product.reverse().map((ele) => (

                <tr key={ele.id}>

                  <td className="py-2 px-4 border-b">{ele.id}</td>
                  <td className="py-2 px-4 border-b">{ele.brand}</td>
                  <td className="py-2 px-4 border-b">{ele.category}</td>
                  <td className="py-2 px-4 border-b">{ele.name}</td>
                  <td className="py-2 px-4 border-b">{ele.price}</td>
                  <td className="py-2 px-4 border-b">
                    <Link to={`/products/${ele.id}/edit`}>
                      <button className="btn text-2xl hover:text-green-600 hover:scale-110 transition"> <CiEdit /> </button>
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-b"

                  >
                    <button className="btn text-2xl hover:text-red-600 hover:scale-110 transition" onClick={() => {
                      handleDelete(ele.id);
                    }}><TbHttpDelete /></button>
                  </td>

                </tr>

              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
