import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as menReducer } from "./Men/reducer";
import thunk from "redux-thunk"
const rootReducer = combineReducers({
    menReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))