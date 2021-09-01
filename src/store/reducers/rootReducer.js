import { combineReducers } from "redux";
import authenReducer from './authenReducer'
import productReducer from './productReducer'
const rootReducer = combineReducers({
    authenReducer,
    productReducer,
})
export default rootReducer;