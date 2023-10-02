import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delet_prod, getAdminpro } from "../redux/Admin/action";
import { Link } from "react-router-dom"

const Products = () => {
  const dispatch = useDispatch();

  const product = useSelector((store) => store.adminReducer.adminProd);
  // console.log(product)

  useEffect(() => {
    dispatch(getAdminpro);
  }, []);

  const handleDelete = (id) => {
    dispatch(delet_prod(id));
  };


  return (
    <div>
      <h1>Admin Products</h1>
      <table>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
            <th>Opt</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {product.length > 0 &&
            product.map((ele) => (

              <tr key={ele.id}>

                <td>{ele.id}</td>
                <td>{ele.brand}</td>
                <td>{ele.category}</td>
                <td>{ele.name}</td>
                <td>{ele.price}</td>
                <td>
                  <Link to={`/products/${ele.id}/edit`}>
                    <button className="btn">Edit</button>
                  </Link>
                </td>
                <td

                >
                  <button className="btn" onClick={() => {
                    handleDelete(ele.id);
                  }}>Delete</button>
                </td>

              </tr>

            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
