import { combineReducers } from "redux";
import authenReducer from './authenReducer'
import productReducer from './productReducer'
import counterReducer from './counterReducer'
const rootReducer = combineReducers({
    authenReducer,
    productReducer,
    counterReducer,
})
export default rootReducer;