import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProducts } from '../redux/Admin/action';

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
    <div>
   <form onSubmit={(e) => handle_submit(e)} className="form">
      <h1>Add Product</h1>

      <input
        type="text"
        placeholder="Name"
        name="name"
        value={data.name}
        onChange={handle_change}
      />
      <input
        type="text"
        placeholder="Image"
        name="image"
        value={data.image}
        onChange={handle_change}
      />
      <input
        type="text"
        placeholder="Brand"
        name="brand"
        value={data.brand}
        onChange={handle_change}
      />
<input
        type="number"
        placeholder="Price"
        name="price"
        value={data.price}
        onChange={handle_change}
      />
         <input
        type="text"
        placeholder="Category"
        name="category"
        value={data.category}
        onChange={handle_change}
      />

      <button className="sub_btn" type="submit">Add Product</button>
    </form>

    </div>
  )
}

export default Operations