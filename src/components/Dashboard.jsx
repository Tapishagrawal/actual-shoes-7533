import React from 'react'
import { useSelector } from 'react-redux'
import Adminsidebar from './Adminsidebar';

const Dashboard = () => {

  const { admin_pro } = useSelector((store) => {
    return { admin_pro: store.adminReducer.adminProd };
  })
  return (
    <>
      <div className='flex gap-7'>
        <div className='w-[15%]'>
          <Adminsidebar />
        </div>
        <div className='w-[80%] mt-24'>
          <h1 className='text-2xl font-semibold text-zinc-600 border-b-2 mb-5'>Dashboard</h1>
          <div className="box1 flex gap-5 mb-5">
            <div>
              <h1 className='text-lg font-medium'>Total Users</h1>
              <p className='text-zinc-500 font-medium'>1500</p>
            </div>
            <div>
              <h1 className='text-lg font-medium'>Total Order</h1>
              <p className='text-zinc-500 font-medium'>1200</p>
            </div>
            <div>
              <h1 className='text-lg font-medium'>Total Products</h1>
              <p className='text-zinc-500 font-medium'>{admin_pro.length}</p>
            </div>
          </div>
          <div className="users">
            <h1 className='mb-3 text-2xl font-medium '>Users</h1>
            <table className='min-w-full text-justify'>
              <thead className='w-full'>
                <tr>
                  <th className='py-2 px-4 bg-gray-100 border-b'>Sl No</th>
                  <th className='py-2 px-4 bg-gray-100 border-b'>Name</th>
                  <th className='py-2 px-4 bg-gray-100 border-b'>Ph No</th>
                  <th className='py-2 px-4 bg-gray-100 border-b'>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='py-2 px-4 border-b'>1</td>
                  <td className='py-2 px-4 border-b'>Tapish Agarwal</td>
                  <td className='py-2 px-4 border-b'>125886543</td>
                  <td className='py-2 px-4 border-b'>Bhopal</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b'>2</td>
                  <td className='py-2 px-4 border-b'>Shivam Dubey</td>
                  <td className='py-2 px-4 border-b'>125886543</td>
                  <td className='py-2 px-4 border-b'>Uattar Pradesh</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b'>3</td>
                  <td className='py-2 px-4 border-b'>Naveen Kumar</td>
                  <td className='py-2 px-4 border-b'>125886543</td>
                  <td className='py-2 px-4 border-b'>Karnataka</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b'>4</td>
                  <td className='py-2 px-4 border-b'>Kshitiz</td>
                  <td className='py-2 px-4 border-b'>125886543</td>
                  <td className='py-2 px-4 border-b'>Bihar</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b'>5</td>
                  <td className='py-2 px-4 border-b'>Priya P</td>
                  <td className='py-2 px-4 border-b'>125886543</td>
                  <td className='py-2 px-4 border-b'>Karnataka</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard