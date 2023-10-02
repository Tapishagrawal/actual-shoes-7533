import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as menReducer } from "./Men/reducer";
import { reducer as authReducer } from "./Authentication/reducer";
import { reducer as womenReducer } from "./Women/reducer";
import { reducer as sliderReducer } from "./Slider/reducer";
import { reducer as localReducer } from "./localReducer/reducer";
import { reducer as adminReducer} from "./Admin/reducer";

import thunk from "redux-thunk"

const rootReducer = combineReducers({
    menReducer,
    womenReducer,
    authReducer,
    sliderReducer,
    localReducer,
    adminReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))