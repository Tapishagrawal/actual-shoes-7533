import { Link } from 'react-router-dom'
import React from 'react'

const Adminsidebar = () => {
  return (
    <div>
      
      <div>
    <h1>Admin</h1>
    </div>
    <div>
    <Link>Dashboard</Link>
    <Link>Users</Link>
    <Link>Products</Link>
    <Link>Operations</Link>
    </div>

    </div>
  )
}

export default Adminsidebar