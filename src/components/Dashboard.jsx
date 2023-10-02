import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {

  const {admin_pro} = useSelector((store)=>{
    return {admin_pro: store.adminReducer.adminProd};
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
          <h1>Users</h1>
          <table>
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Ph No</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Tapish Agarwal</td>
                <td>125886543</td>
                <td>Bhopal</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Shivam Dubey</td>
                <td>125886543</td>
                <td>Uattar Pradesh</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Naveen Kumar</td>
                <td>125886543</td>
                <td>Karnataka</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Kshitiz</td>
                <td>125886543</td>
                <td>Bihar</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Priya P</td>
                <td>125886543</td>
                <td>Karnataka</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Dashboard