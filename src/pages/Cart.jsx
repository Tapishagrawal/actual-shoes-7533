import React from 'react'

export const Cart = () => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cartData)

return (
    <>
    {cartData?.length>0 && cartData?.map((item)=>
        <div style={{ width: "94%", margin: "auto" }}>
        <div className="group h-[20.5rem] w-[15rem] relative p-2 border  rounded-md shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden">
          <div className="w-[90%] m-auto overflow-hidden">
                <img
                  width={"100%"}
                  className="text-center rounded"
                  src={item.image}
                  alt={item.brand}
                />
          </div>
          <div className="flex items-center justify-between px-2 mt-2">
            <div>
              <p className="font-semibold">
                {item.brand} {item.category}
              </p>
              <p className="font-medium">&#x20B9;{item.price}</p>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
)
}
