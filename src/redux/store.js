import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as menReducer } from "./Men/reducer";
import { reducer as womenReducer } from "./Women/reducer";
import thunk from "redux-thunk"
const rootReducer = combineReducers({
    menReducer,
    womenReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))