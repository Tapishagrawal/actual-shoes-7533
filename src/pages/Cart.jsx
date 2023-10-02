import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setDeletedDataInLocal, setWishListDataInLocal } from '../redux/localReducer/action'

export const Cart = () => {
  const localCartData = useSelector((store) => store.localReducer.addCartData);
  const dispatch = useDispatch();

  const handleDeleteCartData = (id) => {
    let existingCartItems = localCartData.filter(data => data.id !== id);
    dispatch(setDeletedDataInLocal("cartData",existingCartItems))
  }
  const handleAddInWishList = (data) => {
    dispatch(setWishListDataInLocal("wishListData",data))
  }
  return (
    <>
      <div className='w-[80%] m-auto mt-10 grid grid-cols-3 gap-10'>
        {localCartData &&
          localCartData.reverse().map((data) => (
            <div className='group h-[20.5rem] w-[15rem] relative p-2 border  rounded-md shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden'>
              <span onClick={()=>handleAddInWishList(data)} className='group absolute bg-white p-2 rounded-full shadow-[0_8px_24px_rgba(149,157,165,0.4)] -right-10 cursor-pointer hover:text-orange-600 group-hover:right-2 transition-all duration-300'>
                <AiOutlineHeart />
              </span>
              <div className='w-[90%] h-[250px] m-auto overflow-hidden'>
                <img width={"100%"} className='text-center rounded' src={data.image} alt="name" />
              </div>
              <div className='flex items-center justify-between px-2 mt-2'>
                <div>
                  <p className='font-semibold line-clamp-1'>{data.name}</p>
                  <p className='font-medium'>&#x20B9;{data.price}</p>
                </div>
                <div onClick={()=>handleDeleteCartData(data.id)} className='p-2 cursor-pointer text-lg rounded-full hover:bg-black hover:text-white transition duration-300 shadow-[0_8px_24px_rgba(149,157,165,0.2)]'>
                  <MdDeleteOutline />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
