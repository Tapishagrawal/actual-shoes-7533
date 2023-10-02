import { Link } from 'react-router-dom'
import React from 'react'

const Adminsidebar = () => {
  return (
    <div>
      
      <div>
    <h1>Admin</h1>
    </div>
    <div>
    <Link to="/dashboard">Dashboard</Link>
    <Link to = "/products/:id/edit">EditProduct</Link>
    <Link to="/products">Products</Link>
    <Link to="/operations">Add Product</Link>
    </div>

    </div>
  )
}

export default Adminsidebar