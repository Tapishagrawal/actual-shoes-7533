import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {

  const {admin_pro} = useSelector((store)=>{
    admin_pro: store.adminReducer.adminProd;
  })
  return (
    <div>
        <h1>Dashboard</h1>
        <div className="box1">
          <div>
            <h1>Total Users</h1>
            <p>1500</p>
          </div>
          <div>
            <h1>Total Order</h1>
            <p>1200</p>
          </div>
          <div>
            <h1>Total Products</h1>
            <p>{admin_pro.length}</p>
          </div>
        </div>
        <div className="users">
          <table>
            <thead>
              <tr></tr>
            </thead>
          </table>
        </div>
    </div>
  )
}

export default Dashboard