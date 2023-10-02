import React from 'react'
import { PiBasketBold } from 'react-icons/pi';
import { MdDeleteOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setDataInLocal, setDeletedWishListDataInLocal } from "../redux/localReducer/action"

export const WishList = () => {
    const localWishListData = useSelector((store) => store.localReducer.wishListData);
    const dispatch = useDispatch();

    const handleDeleteCartData = (id) => {
        let existingCartItems = localWishListData.filter(data => data.id !== id);
        dispatch(setDeletedWishListDataInLocal("wishListData", existingCartItems))
    }
    const handleAddCard = (data) => {
        dispatch(setDataInLocal("cartData", data))
    }
    return (
        <>
            <div className='w-[80%] m-auto mt-10 grid grid-cols-3 gap-10'>
                {localWishListData &&
                    localWishListData.reverse().map((data) => (
                        <div className='group h-[20.5rem] w-[15rem] relative p-2 border  rounded-md shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden'>
                            <span onClick={() => handleDeleteCartData(data.id)} className='absolute bg-white p-2 rounded-full shadow-[0_8px_24px_rgba(149,157,165,0.4)] right-2 cursor-pointer hover:text-orange-600 transition-all duration-300'>
                                <MdDeleteOutline />
                            </span>
                            <div className='w-[90%] h-[250px] m-auto overflow-hidden'>
                                <img width={"100%"} className='text-center rounded' src={data.image} alt="name" />
                            </div>
                            <div className='flex items-center justify-between px-2 mt-2'>
                                <div>
                                    <p className='font-semibold line-clamp-1'>{data.name}</p>
                                    <p className='font-medium'>&#x20B9;{data.price}</p>
                                </div>
                                <div onClick={()=>handleAddCard(data)} className='p-2 cursor-pointer text-lg rounded-full hover:bg-black hover:text-white transition duration-300 shadow-[0_8px_24px_rgba(149,157,165,0.2)]'>
                                    <PiBasketBold />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
