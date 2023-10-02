import { SET_DATA_IN_LOCAL, SET_DELETED_DATA_IN_LOCAL } from "../actionType"
import { getDataFromLocal } from "./action"

const initState = {
    wishListData : getDataFromLocal() || [],
    addCartData : getDataFromLocal("cartData") || []
}
export const reducer = (state = initState, {type, payload}) =>{
    switch(type){
        case SET_DATA_IN_LOCAL:{
            let existingCartItems = state.addCartData
            existingCartItems.push(payload) 
            return {...state, addCartData:existingCartItems}
        }
        case SET_DELETED_DATA_IN_LOCAL:{
            return {...state, addCartData:payload}
        }
        default: return state
    }
}