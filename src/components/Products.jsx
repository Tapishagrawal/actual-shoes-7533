import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delet_prod, getAdminpro } from "../redux/Admin/action";

const Products = () => {
  const dispatch = useDispatch();

  const { admin_pro } = useSelector((store) => {
    return {
      admin_pro: store.adminReducer.adminProd,
    };
  });

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
          {admin_pro > 0 &&
            admin_pro.map((ele) => {
              <div>
                <tr>
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
                    onClick={(id) => {
                      handleDelete(id);
                    }}
                  >
                    Delete
                  </td>
                </tr>
              </div>;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
