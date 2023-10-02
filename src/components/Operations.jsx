import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProducts } from '../redux/Admin/action';
import Adminsidebar from './Adminsidebar';

const initialData = {
  image: "",
  brand: "",
  category: "",
  name: "",
  price: "",
};

const Operations = () => {

  const [data, setdata] = useState(initialData);
  const dispatch = useDispatch()

  const handle_change = (e) => {
    const { name, value } = e.target;
    // console.log(name, value)


    setdata((prev) => {

      return { ...prev, [name]: name == "price" ? +value : value };
    });
  };

  const handle_submit = (e) => {
    e.preventDefault();

    // console.log(data);
    dispatch(addProducts(data))
    setdata(initialData)
  };

  return (
    <div className="flex gap-7">
      <div className='w-[15%]'>
        <Adminsidebar />
      </div>
      <div className="w-[80%] mt-24">
        <form onSubmit={(e) => handle_submit(e)} className="form">
          <h1 className="text-2xl font-semibold text-zinc-600 border-b-2 mb-5">Add Product</h1>
          <div className="flex flex-col gap-5">
            <input
              className="border py-1 px-2 rounded outline-orange-300"
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={handle_change}
            />
            <input
              className="border py-1 px-2 rounded outline-orange-300"
              type="text"
              placeholder="Image"
              name="image"
              value={data.image}
              onChange={handle_change}
            />
            <input
              className="border py-1 px-2 rounded outline-orange-300"
              type="text"
              placeholder="Brand"
              name="brand"
              value={data.brand}
              onChange={handle_change}
            />
            <input
              className="border py-1 px-2 rounded outline-orange-300"
              type="number"
              placeholder="Price"
              name="price"
              value={data.price}
              onChange={handle_change}
            />
            <input
              className="border py-1 px-2 rounded outline-orange-300"
              type="text"
              placeholder="Category"
              name="category"
              value={data.category}
              onChange={handle_change}
            />
            <div className="text-center">
              <button className="sub_btn bg-black text-white text-lg w-[10rem] py-2 rounded-sm hover:bg-green-700 transition" type="submit">Add Product</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Operations